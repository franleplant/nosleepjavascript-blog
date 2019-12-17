---
title: Creat a blog with Gatsby.js
date: "2015-05-01T22:12:03.284Z"
description: "Create a blog with Gatsby.js in a few easy steps using React, Javascript, Github Pages and Github Actions"
---

## Introduction

In the post we are going to examine how we created this, the [nosleepjavascript.com](https://nosleepjavascript.com), blog
(the one that you are currently reading) with Javascript and React, Gatsby as the core framework,
Github Pages as a hosting solution and Github Actions to automatically deploy when pushing to a particular branch,
which is a rudimentary CD or Continuous Integration Solution.


## Boostraping a site with Gatsby

### What is Gatsby?

According to their [website](https://www.gatsbyjs.org/):

> Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

We wanted to do a simple Tech Blog without any fancy stuff and Blogs naturally
are pretty much static sites (i.e. they only need a backend that serves js, css, images and html static files),
so looked for a static site generator. I had good experiences with [Jekyll](https://jekyllrb.com/), so
it was our first consideration. Alternatively we have been hearing very good things about Gatsby so
we wanted to explore it, after inspecting the docs, inspecting the community activity, plugins,
and overal liveliness of the project we decided to give it a try and we were very happy with the results.

### Why Gatsby?

The things that we liked to most about Gatsby are
- themes API: it is jerarquical and allows composition and easily switch in and out of different themes, contrary to Jekyll that the theme is heavily coupled with the initial bootstrap that Jekyll does and switching between themes is not a trivial task.
- flexibility: one of things that amazed me and I am currently exploring (you will probably hear more about this in future blog posts) is that Gatsby is not only for static websites, it is pretty flexible and you can even create Server Side rendered full stack apps with it.


### Steps

We used the [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/) but take
a look at other [community provided starters](https://www.gatsbyjs.org/starters/?v=2) for blogs or other types of pages

```sh
# Install Gatsby cli
npm install -g gatsby-cli

# Create a new gatsby site using the starter-blog starter
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-blog

```

Check the output to see how to run the app but at this point you have a working blog.
Take a look around to see how to customize the content, relevant files
- `gatsby-config.js` to edit data about your site such as author, description, titles, etc
- `gatsby-config.js` to add your Google Analytics id
- `content/name-of-the-post/index.md` to see how to write posts in markdown
- add `import "prismjs/themes/prism-tomorrow.css"` to `gatsby-browser.js` to enable sintax highlighting of code blocks. This starter uses [prism.js](https://prismjs.com/) but it does not add the css theme by default. Check prism.js documentation to see other themes available.


And you are done! Told you! it is super fast and easy.



Useful links
- https://www.gatsbyjs.org/docs/quick-start/



## Host your site into githuib pages

## [optional] Buy a domain and use it



## Deploy automatically with Github Actions (CD)

- use this one to automaticlaly publis (talk about inspecting the code and good practices when using other peoples code)
https://github.com/enriikke/gatsby-gh-pages-action

Mention the fact that the CNAME file is super important for per-repo github pages and that the configuration in settings gets overwritten when deploying via this action (for some reason)

TODO talk about hwo to set it up

- Setup a github personal access token


https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line
- use it in your workflow https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets#creating-encrypted-secrets (names are important)
