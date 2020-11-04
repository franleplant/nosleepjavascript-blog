---
title: How to support multiple authors in Gatsby.js
date: 2020-04-27
author: franleplant
description:
  "Gatsby Starter Blog doesn't support multiple authors by default. Let's fix that!
  And in the Journey we will uncover how to use the file system as source of dynamic data"
tags:
  - GatsbyJs
  - Javascript
  - react
  - filesystem
  - yaml
  - blog
  - GraphQL
---

## Introduction

[gatsby-starter-blog][7] comes with out of the box support for a single author blog.
But what happens when you want to support multiple authors writing in your blog?

Gatsby actually makes it very easy to do so but for people getting started with Gatsby
it might be a bit of challenge putting all the parts together.

This post hopes to show how to solve this problem holistically.

This blog is actually a real life implementation of the multi author blog. Check our [source][3]!

## Setting multiple author support

The highest level interface that authors writing posts will use will
still be the [frontmatter][8] yaml on top of each post's markdown file.

By specifying an _author id_, we are going to be able
to retrieve the rest of the author data we have stored in our codebase.

```markdown:title=content/blog/my-post/index.md
---
title: My Post!
author: author1
---
```

For this to work we need to setup Gatsby to:

1. use the filesystem as a valid source of data. In this case we used `src/data` but it can be anything you like.
2. use a yaml transformer because we will store our authors data inside a yaml but you could use JSON or any other format.
3. map frontmatter's `author` attribute to `src/data/author.yaml`.

```javascript:title=gatsby-config.js
module.exports = {
  plugins: [
    ...otherPlugins,

    // 1. use src/data as a data source
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    // 2. enable yaml support
    `gatsby-transformer-yaml`,
  ],
  mapping: {
    // 3. map author to author.yaml
    "MarkdownRemark.frontmatter.author": `AuthorYaml`,
  },
};
```

You will probably need to install the necessary dependencies: `yarn add gatsby-source-filesystem gatsby-transformer-yaml`.

[Check Gatsby config docs](https://www.gatsbyjs.org/docs/gatsby-config/#plugins)

**Important:** frontmatter's `author` will need to match an `id` attribute in your `author.yaml`, since that is
what the mapping uses as a sort of primary key.

Now lets show how the `author.yaml` looks.

```yaml:title=src/data/author.yaml
- id: author1
  bio: I am Author 1
  profilepicture: ../../content/assets/author1.png
- id: author2
  bio: I am Author 2
  profilepicture: ../../content/assets/author2.png
```

At this point Gatsby will automatically provide the entire
Author data via the GraphQL interface,
in your post template.

Notice that it will return the data for the author you
specified in the post's frontmatter, and of course, each
post can have a different author.

Let's check how the post template can use the `author` data now:

```javascript:title=src/templates/blog-post.js
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author {
          id
          bio
          profilepicture {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
```

Inside your post component you will be able to access all author data:

```javascript:title=src/templates/blog-post.js
export default function BlogPostTemplate(props) {
  const {
    id,
    bio,
    profilepicture,
  } = props.data.markdownRemark.frontmatter.author;

  //...
}
```

### Bonus: Author profile picture

If you look at the previous snippets you will notice we used the `profilepicture` to
support author's profile pictures. Notice how in the GraphQL query that we showed before we used the
`childImageSharp` query to enable image optimization, something that the Gatbsy Starter blog
does by default in the mono-author mode.

By using this `childImageSharp` and any of the other queries of [gatsby-image][9] you can
transform dynamically loaded images via the expected GraphQL interface with ease.

## How to use all authors

We've only covered the automagical way of mapping a frontmatter
attribute to a filesystem database i.e. `author.yaml`.

But what happens when you want all the authors, lets say for a list of
authors in your page or a shared [about](https://nosleepjavascript.com/about/) page?

Gatsby also has you covered with this by using the plugins we setup before.
Gatsby will automatically provide a way of reading the entire `author.yaml` as follows:

```javascript:title=src/pages/about.js
export const pageQuery = graphql`
    allAuthorYaml {
      nodes {
        id
        bio
      }
    }
  }
`;
```

Notice how `author.yaml` is mapped to `allAuthorYaml`, that name transformation
is significant and you should be carefully with it.

If unsure you can always go to the GraphQL explored that Gatsby provides by
default and play around with the available queries.

At this point your page component will be provided with an array of authors:

```javascript:title=src/pages/about.js
export default function About(props) {
  // this is an array of authors
  const authors = props.allAuthorYaml.nodes;

  //...
}
```

### Bonus: Run-Time multi author support through GraphQL

Notice that this setup also enables you do an ad-hoc manual implementation
of the multi-author support.
I will probably not recommend it for this use case but it is a possibility if you
encounter a use case that might benefit from it. Notice that by using this you don't need
to statically know the author id like we did in the `blog-post.js` before, you can
do it entirely dynamically by simply passing react props.

```javascript:title=src/pages/Author.js
export default function Author(props) {
  const authorId = props.author;
  const authors = props.allAuthorYaml.nodes;

  // manually search for the selected author
  const myAuthor = authors.find((a) => a.id === authorId);

  return <p>Author Bio: {myAuthor.bio}</p>;
}

export const query = graphql`
    allAuthorYaml {
      nodes {
        id
        bio
      }
    }
  }
`;
```

And you can use it like:

```javascript
<Author author="author1" />
```

This can be extrapolated to a lot of other use cases.

### Bonus: Run-Time multi author support through importing files

And if everything else fails you can always simply import the yaml (or any other format) directly
from your components and display the data however you like.

The main drawback is that you don't have some useful image transformations
and some other GraphQL-only APIs but there might be very good use cases for this approach
aside from supporting multiple authors:

```javascript:title=src/components/Author.js
import authors from "../data/author.yaml";

export default function Author(props) {
  const authorId = props.author;

  // manually search for the selected author
  const myAuthor = authors.find((a) => a.id === authorId);

  return <p>Author Bio: {myAuthor.bio}</p>;
}
```

## Closing

I hope that I have eased the entry barrier for a multi author blog with Gatbsy,
and taught some extra techniques in the way.

</br>

[1]: https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types
[2]: https://github.com/gatsbyjs/gatsby-starter-blog
[3]: https://github.com/franleplant/nosleepjavascript-blog
[4]: https://www.gatsbyjs.org/packages/gatsby-transformer-yaml/
[5]: https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
[6]: https://github.com/franleplant/nosleepjavascript-blog
[7]: https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/
[8]: https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
[9]: https://www.gatsbyjs.org/packages/gatsby-image/

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
