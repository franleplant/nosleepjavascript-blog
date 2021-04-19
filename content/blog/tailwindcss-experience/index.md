---
title: Rewriting the NSJS blog in Tailwind Css
date: "2021-04-18"
author: franleplant
description:
  "My blog has been long overdue to some aesthetic love and I decided to give Tailwind
  a run for its money. This is my experience."
tags:
  - tailwindcss
  - css
  - postcss
  - styling
  - dark mode
---

My blog has been long overdue to some aesthetic love and I gave Tailwind
a run for its money.

I had a lot of fun with Tailwind, it’s refreshing not to write css
and only care about classes, the utility approach sounds weird at first
but in practice works pretty good. It is also interesting to grab pre-made
style primitives (that you can tweak) from a limited pool to materialise
your visual language and you have to
go out of your way in order to break it.

Tailwind has awesome IDE support,
good tooling and composition mechanics and together with a framework like React
you can create awesome reusable full fledged components for your websites or web apps.

Here's a break down of the things I liked and the things I didn't.

## Tailwind Pros

- **composition** is nice and powerful, and with a decent UI lib, such as React, you can create powerful high level flexible abstractions easily, like a `Button` or an `Input`.
- **use anywhere**: you can use the classes inside your markdown, in your raw html, etc; this in practice makes it really easy to share your visual language.
- **intellisense** IDE intellisense support is top notch, I've used one of the VIM plugins out there with great success and I've seen that [VS Code][21] support is even better.
- **js framework agnostic**: in certain environments it is desired to be able to share styles across JS frameworks and technologies, imagine a big company with independent teams that don't want to all use the same JS framework to develop their apps but do want to share the same visual language. If you use a React UI library like [Ant design][23] you are basically locked in with React, and it is an uphill battle to try to share only the css parts of Antd into other JS frameworks like [angular][24].
- **visual language** easy to create a consistent visual language by using customizable primitives.
- **theming** built time theming is a first class citizen (run time theming is not, although it is not entirely impossible to do).
- **suitable for component libraries**: assuming your reusable components (i.e. React) library only uses Tailwind classes and not custom css you can use all of the benefits of a js only, inline-all distribution strategy as the one covered in my [previous post][20] with all the benefits of built time theming we just covered.
- **css only** framework: css has become pretty powerful with flex and grid layouts and css variables, being a css only framework makes it easy to integrate anywhere, you could even grab the generated stylesheet and drop it in a manually generated html and it would work.

## Tailwind Cons

- **no high level primitives**: you do need to build higher level stuff from scratch like inputs, buttons, modals, etc, and certain UI components are surprisingly complex with variants, different flags for different states, etc.
- **css only**: certain common things are going to require manual implementations (think anything that requires js): form input validation states, modals, etc.
- **missing variants** it is awkward to find out which variants (i.e. `lg:dark:hover:shadow`) are not already generated, you basically need to wait for compilation and see if that class has any styles attached to it. **Important** this has been recently solved with the `JIT` patch which is still marked as experimental as we speak, but `JIT` also removes the possibility of live editing your html to add Tailwind Css classes for a quick feedback loop (because that particular class might not have been generated and injected on the compilation process).
- **requires compilation**: it uses [postcss][25] to compile your css plus it inspects all your source files to only emit the css classes that your site is actually using, this means that you are going to need `Node.js` available which means that if you are using other technologies this might mean extra complexity for your apps, but it is a pretty common practice to have compilation pipelines for Front End applications so it shouldn't be that bad.

- **Bonus Con**: Gatsby has become super slow, it is not directly related to Tailwind but it looks like it adds to the slowness, if you have any clues how to improve on this let me know.

## Conclusion

Tailwind Css is a solid solution for styling web applications at scale, it is flexible
and powerful, has decent tooling, little surprises and it is production ready,
I encourage you to give it a try.

Now let's go with a bonus just for you:

## Bonus: handling class names

> This is focused on React but the techniques can be applied to other UI frameworks.

It is not uncommon to have a bunch of classes applied to a single element, if coupled with a framework
such as React it is a good idea to abstract those elements into components but how do you handle
those long lists of space separated strings in a scalable way?

Let’s say we have a `Card` component:

```typescript
export default function Card(props: IProps): JSX.Element {
  return (
    <div className=“rounded-md border-1 border-black dark:border-white p-3 flex flex-col gap-3 bg-white dark:bg-black”>
      {props.children}
    </div>
  )
}

```

This works well because you are using the React composition model that we know and love to abstract styling, but
that list is still too long, and can become longer and what about if we have conditional styling?

### Template strings

You can use template strings:

```typescript
className={`
  class1
  class2
  ${props.className}
  ${props.disabled ? “opacity-50” : “”}
`}
```

You can also use a tag function to remove unnecessary newlines and undefined:

```typescript
className={oneline`
  class1
  class2
  ${props.className}
  ${props.disabled ? “opacity-50” : “”}
`}
```

Check my implementation of [oneline](https://github.com/franleplant/nosleepjavascript-blog/blob/develop/src/utils/strTag.ts)

This strategy works well and doesn’t break IDE intellisense.

### With `classNames` lib

```typescript
className={classNames(`class1 class2`, props.className, { “opacity-50”: props.disabled})}
```

This lib is awesome but the object notation breaks IDE intellisense.

There is a specialized variant of this lib called [tailwindcss-classnames][12], but I don’t love the interface.

### With `twin.macro` lib

```typescript
const Input = tw.input`
  ${tw`class1 class2`}
  ${(props) => props.hasBorder && tw`border-purple-500`}
`;
```

This is similar to the styled components approach, but I find it rather verbose and the IDE support is mysterious.

[10]: https://tailwindcss.com/
[11]: https://www.npmjs.com/package/classnames
[12]: https://www.npmjs.com/package/tailwindcss-classnames
[13]: https://github.com/ben-rogerson/twin.macro
[14]: https://www.npmjs.com/package/tailwind-styled-components
[20]: https://nosleepjavascript.com/package-react-components/#tldr-how-to-package-and-publish-front-end-libraries-in-2020
[21]: https://code.visualstudio.com/
[23]: https://ant.design/
[24]: https://angular.io/
[25]: https://postcss.org/
