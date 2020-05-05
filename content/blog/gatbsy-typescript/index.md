---
title: Adding Typescript to your Gatbsy.js application
date: "2020-05-10"
author: franleplant
description: "Let us go through the steps to turn your Gatsby application into a Typescript application."
tags:
  - gatsbyjs
  - javascript
  - react
  - typescript
  - graphql
---

## Intro

I have been using Typescript for the past 4 years in different production
projects in different companies and although this post is not meant to be
a _why typescript?_ post let me tell you briefly why I love typescript
and why I do think that most medium to larger size Javascript applications
would benefit from using Typescript, in no particular order:

1. automatically up-to-date and synchronized code documentation in the form of types.
2. new code verification tool added to your pool (in Javascript apps this is mostly made of different kinds of tests and lints)
3. better development experience: better autocompletion and API discovery
4. type checker guided hassle free refactoring
5. improve the mind set of developers so that they think more about data structures and their semantic meaning inside the code (as opposed to just have a bunch of unnamed and uncategorised objects which is something that tends to happen in bigger Javascript apps).

I plan to talk a lot more about this in a follow up post so that is why I won't focus to much
explaining these points, but please note that most of these come from real world experiences
handling large production code bases in both Javascript and Typescript, and there is an abyss between the too.

Additionally, from a business standpoint we can also enumerate derived benefits:

- more productivity: items 1, 3 and 4
- higher quality: items 2, 4 and 5

Having these in mind we are going to cover how to integrate Typescript to Gatsby,
considering that Gatbsy is a framework that can accommodate larger production applications that
will benefit the most out of this.

The process is rather simple but I want to cover some pain points and tips and tricks.

Note: This blog is actually using Typescript. Check the [source](https://github.com/franleplant/nosleepjavascript-blog)

## How to use Typescript in your Gatbsy.js site.

We are going to install two plugins:

- [gatsby-plugin-typescript](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/) to support typescript compilation
- [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/) to automatically generate Typescript types out of the underlying GraphQL data model that Gatsby uses.

After following the instructions you will have most of the tools, the rest is going to be
related to 1) configuration and 2) migrating js files.

## Configuration

### Typescript

You will need to create a `tsconfig.json` at the root of your project configuring the
typescript compiler. This can vary a lot depending on your taste but here's the one we are using:

```json:title=tsconfig.json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "jsx": "preserve",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": false,
    "strictFunctionTypes": true,
    "noImplicitThis": true,
    "alwaysStrict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

I won't cover all the options but I do want to cover `strictNullChecks`.

I found that enabling this option to be a big pain point when combining it with the GraphQL codegen tool.
Most of the automatically generated types from the queries you make around your codebase
will have a lot of optionals and `Maybe` making it super verbose and sometimes super
awkward to handle all these in a strict way.

I usually try to use `strictNullChecks: true` for applications because it makes the typechecking
to provide even more guarantees about your code, but in this particular application I recommend
you avoid it altogether.

At this stage you might want to `allowJs: true` to avoid having to migrate _all_ your codebase
at once. But you should probably migrate some of the core files just to verify the setup.

The process is rather simple, any `.js` file that has `JSX` inside it should be renamed to `.tsx`,
if not, it should be rename to `.ts`.

Let the compiler tell you what it expects from those freshly migrated files (see next section): spoiler alert,
it will ask for props definitions and perhaps some dependencies type definitions.

### `declarations.d.ts`

In most Typescript codebases we have some global types or some untyped modules to declare,
that is why you most likely will need `src/declaration.d.ts`. Let's see a bear minimum one:

```typescript:title=src/declaration.d.ts
// Make typescript aware of this
// global Gatbsy variable
declare var __PATH_PREFIX__: string

// Declare that this modules are untyped
declare module "typography-theme-github"
// This tells typescript to consider any import
// of svg images as with type "any"
// You might need to declare other types of files
// used in your codebase
declare module "*.svg"
```

And then you should import this file from your `gatsby-browser.js` which
is the main entry point of the browser application:

```javascript:title=gatsby-browser.js
import "./src/declarations.d.ts"
```

### Typechecking

As the typescript plugin docs state, by default it wont run typechecks on your code, it
will only strip out any type information and typescript syntax and compile it down to Javascript.

For enabling typechecking you will need to create an NPM script:

```json
"typecheck": "tsc --noEmit",
```

`tsc` is the Typescript Compiler and `noEmit` tells it that we only want to typecheck.

I also call this script from my `test` script because I want to add this extra verification
to the main list of verifications that run over my code.

You will probably need to install type definitions for some libraries you might be using by
doing the following:

```sh
yarn add --dev @types/my-lib
```

When typechecking your code base the typescript compiler will let you know what to do
pretty accurately in each case.

**NOTE**: I configured this in March 2020 and I had some troubles with Gatbsy type definitions, in
order to fix it I had to add this to my `package.json#resolutions` field:

```json:title=package.json
"resolutions": {
  "unified": "7.1.0",
  "vfile": "4.0.3",
  "@types/vfile": "4.0.0"
},
```

If you see a type error relating these libraries this might be fix for you.

### gatsby-plugin-typescript

I did not made any special configurations to this plugin.

### gatsby-plugin-graphql-codegen

Here is where things become more complicated.

The main data layer of Gatbsy is Grapqhl and most of the pages
and some components will access that data layer and that data will
flow through props and context down the component tree.

So it is reasonable to expect to somehow have that data model
and the queries we make out of it to by statically typed.

You can of course write these types by hand but it will be much better
to have a tool automatically generate those files from the latest queries
and GraphQL data model. Enter: `gatsby-plugin-graphql-codegen`.

This is how I recommend you configure it:

```typescript:title=gatsby-config.js
{
  resolve: `gatsby-plugin-graphql-codegen`,
  options: {
    codegenConfig: {
      // optional if you prefix, as I do,
      // all your types with I
      typesPrefix: "I",
      avoidOptionals: true,
    },
  },
}
```

The `avoidOptionals` is important because the codegen tools generate
most of the types with the following shape:

```typescript
export type SomeGeneratedType = {
  attribute?: Maybe<Type>
}
```

This evaluates to something like `Type | null | undefined`, so you basically have three potential types instead
of just the two you actually expect: `Type | null` which is what `Maybe<Type>` resolves to.

So this will reduce some of the more awkward errors when passing props.

Additionally, it is better to create your own types instead of trying to reuse the types that the
codegen generates.

For example in this blog we have an `data/authors.yaml`.
The codegen generates this type

```typescript
export type IAuthorYaml = INode & {
  id: Scalars["ID"]
  parent: Maybe<INode>
  children: Array<INode>
  internal: IInternal
  bio: Maybe<Scalars["String"]>
  profilepicture: Maybe<IFile>
  twitter: Maybe<Scalars["String"]>
  github: Maybe<Scalars["String"]>
}
```

But the pages that make the query might generate different variants of this type. Sometime shaving
some fields off sometimes others and in particular the `profilepicture` filed which maps to an image
might be altered in several ways like asking for a sharp image fluid.

In that case this type wont be useful at all.
Instead what I have done is to manually write a concrete `IAuthor` type
that I defined which is very similar to this but only has the "domain" attributes I need

```typescript
export interface IAuthor {
  id: string
  bio: string
  twitter: string
  github: string
  profilepicture?: any
}
```

And in the case of providing a particular image fluid I can extend that type ad-hoc like this

```typescript
interface IAuthorWithProfilePic extends IAuthor {
  profilepicture: {
    childImageSharp: {
      fluid: IGatsbyImageSharpFluidFragment
    }
  }
}
```

This will force you a little bit to always query the author with all the fields except `profilepicture` which
is a rather simple cost to pay to have your codebase have greater type safety guarantees.

Note that in the latter case `author.profilepicture` will have all the type information about
what Gatbsy does with the image, with a properly configured IDE, you will be able to see how
this object is made without leaving your dev tools and googling it.

### How to incorporate typechecking to your `npm run test`

The only important consideration here is that you need to codegen
your GraphQL types before being able to typecheck your codebase:

```json
{
  "test": "npm run build && npm run typecheck"
}
```

And of course you can mix this with lints, prettier and actual unit or integration tests.

## Closing

I will talk more about Typescript in the future, so that is why I started by making the
codebase behind this blog a Typescript code base. I expected to play around with different
concepts and patterns and apply them here so that later I can talk more about them.

So stay tuned!

</br>
Want to become a Javascript expert? This is nice place to start:
</br>
</br>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=franleplant-20&language=en_US&marketplace=amazon&region=US&placement=B084BNMN7T&asins=B084BNMN7T&linkId=8b137e903d39f2ffe9d05b679af42508&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=franleplant-20&language=en_US&marketplace=amazon&region=US&placement=B08634PZ3N&asins=B08634PZ3N&linkId=41b1c21effffe8f07f6a3f9556d010b2&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=franleplant-20&language=en_US&marketplace=amazon&region=US&placement=1491904151&asins=1491904151&linkId=1cf3fa04463aad92be6c68fd69a0c964&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=franleplant-20&language=en_US&marketplace=amazon&region=US&placement=1491904224&asins=1491904224&linkId=6deb74eba04d6d6f64eda93686b39beb&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=franleplant-20&language=en_US&marketplace=amazon&region=US&placement=1491904240&asins=1491904240&linkId=3022a1bcff37fcf599ba8b9ddcd8517f&show_border=true&link_opens_in_new_window=true"></iframe>

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=franleplant-20&language=en_US&marketplace=amazon&region=US&placement=1491904194&asins=1491904194&linkId=879d759323b3c457b665eeb431537dab&show_border=true&link_opens_in_new_window=true"></iframe>

 <div id="amzn-assoc-ad-388ed262-d0bf-4cf6-8458-5b5d84d8a3cd"></div><script async src="https://z-na.associates-amazon.com/onetag/v2?MarketPlace=US&instanceId=388ed262-d0bf-4cf6-8458-5b5d84d8a3cd"></script>
