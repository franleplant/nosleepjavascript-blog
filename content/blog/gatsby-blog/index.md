---
title: Create a blog with Gatsby.js
date: "2019-12-23T22:12:03.284Z"
author: franleplant
description:
  "In this post we are going to cover the steps we took to create the nosleepjavascript.com blog
  in simple, easy, steps using the latest front end technologies: Gatsby.js (JAMstack), NodeJs, React,
  GraphQL, Javascript, GitHub Pages and GitHub Actions"
todo:
  - in the future it would be nice to add a section on to how to deploy to azure
tags:
  - gatsbyjs
  - javascript
  - react
---

## Introduction

In this post we are going to examine how we created this, the [nosleepjavascript.com](https://nosleepjavascript.com), blog
(the one that you are currently reading) with Javascript and React, Gatsby as the core framework,
GitHub Pages as a hosting solution and GitHub Actions to automatically deploy when pushing to a particular branch,
which is a rudimentary CD or Continuous Delivery Solution.

## Prerequisites

- [NodeJs](https://nodejs.org/en/) 12 (Erbium) or higher
- a text editor like [Vim](https://www.vim.org/) or an IDE like [Visual Studio Code](https://code.visualstudio.com/)

## Bootstrapping a site with Gatsby

### What is Gatsby?

According to their [website](https://www.gatsbyjs.org/):

> Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

We wanted to do a simple Tech Blog without any fancy stuff and Blogs naturally
are pretty much static sites (i.e. they only need a backend that serves js, css, images and html static files),
so we looked for a static site generator.

I had good experiences with [Jekyll](https://jekyllrb.com/) in the past,
so it was the first option we considered but we wanted to inspect the
ecosystem and see whether there were some other options available.

Enter Gatsby: we have been hearing very good things about Gatsby.js so
we wanted to explore it.

I usually check a couple of important aspects of open source software before
even beginning exploring it and Gatsby checked all the boxes:

- excellent documentation
- active community
- wide solutions to common problems (starters, plugins, posts, etc)
- it is a very active project

We performed some initial spikes and compared the time it took
to create a somewhat complete Blog with Gatsby and Jekyll and both
took us about the same time: 15 minutes.

A _complete_ Blog in this context included the following capabilities:

- write posts in markdown
- out of the box Google Analytics integration
- out of the box SEO good practices (metas, titles, etc)

We finally settled in favor of Gatsby because

- it uses modern and familiar technology: Javascript, React, GraphQL, etc
- the plugin and theme API is much better than Jekyll's
- it seemed very powerful and we wanted to explore more of it in the future

### Why Gatsby?

The things that we liked to most about Gatsby are

- **themes API**: it is hierarchical and allows composition and easily switching in and out of different themes, contrary to Jekyll, that heavily couples the theme with the initial files skeleton and switching between themes is not at all trivial.
- **flexibility**: one of things that amazed us and that we are currently exploring (you will probably hear more about this in future blog posts) is that Gatsby is not only for static websites, it is pretty flexible and you can even create full fledged apps with it (without runtime server side rendering and some other considerations).
- **development tools**: the whole development workflow is very nicely polished and the GraphiQL explorer of the entire site's data is a very nice quality of life improvement for developers.

## Install Gatsby

We used a Gatsby _starter_ called [gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)
but you might be interested in other starters that are [provided by the community](https://www.gatsbyjs.org/starters/?v=2)

```bash
# Install Gatsby cli
npm install -g gatsby-cli

# Create a new gatsby site using the starter-blog starter
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-blog

```

Check the output to see how to run the app but at this point you have a working blog.

These are the most relevant files:

- `gatsby-config.js` to edit data about your site such as author, description, titles, etc
- `gatsby-config.js` to add your Google Analytics ID
- `content/name-of-the-post/index.md` to see how to write posts in Markdown
- add `import "prismjs/themes/prism-tomorrow.css"` to `gatsby-browser.js` to enable **syntax highlighting** of code blocks. This starter uses [prism.js](https://prismjs.com/) but it does not add the css theme by default. Check prism.js documentation to see other themes available.

And you are done! Told you! It is super fast and easy.

Useful links

- https://www.gatsbyjs.org/docs/quick-start/

## Host your site in [GitHub Pages](https://pages.github.com/)

GitHub pages is a static page hosting solution, if you are a software developer
this hosting solution is pretty near to our daily roaming places so that is why we chose it.

There are tons of alternatives but if you already host your page's code in GitHub
then this will be pretty easy to setup.

Follow the instructions on [the website](https://pages.github.com/) to enable GitHub pages.

These are the extra steps we took for this blog.

### 1 make `develop` your default branch (only for _project site_)

Since this blog qualifies as a _project site_ (per repo) instead of a _user or organization site_
we need to have the following repo branch configuration:

- `develop`: where our Gatsby code lives
- `master`: where our Gatsby-generated static files for our website are stored

These generated static files will be the ones that GitHub pages will deploy and show.

Keep in mind that you will be managing two code bases, one is your Gatsby site, the code that you will
be interacting with as a developer and then we have the generated static site code that will be the one
that we serve.
Think of these two code bases as the source code and the compiled target code in traditional
compiled programming languages such as C/C++ or Rust.

### 2 Adjust the `package.json` deploy script

It should look like this:

```json
"deploy": "gatsby build --prefix-paths && gh-pages -d public -b master"
```

- `--prefix-paths` is only useful if you are going to use the default GitHub domain: `username.github.io/reponame`. Remove it if you are making your site accessible from some `domain.com`
- `gh-pages` is a helper node package that you need to install: `npm install --dev gh-pages`
- `-b master` specifies to `gh-pages` package that you want to deploy to the `master` branch

### 3 Adjust your `pathPrefix`

IMPORTANT! Only do this if you are using the default GitHub domain. If you are using a custom domain,
like `myblog.com` you should probably leave it unset, or if you want your blog to live in a custom path
of your custom domain like `myblog.com/custompath` then adjust accordingly.

Go to `gatsby-config.js` and set the top level property

```javascript
pathPrefix: reponame
```

### 4 deploy!

```bash

# make sure you commit and push your changes to develop
git commit ...
git push origin develop

# deploy!
npm run deploy
```

Now if you go to `username.github.io/reponame` you should be able to navigate your site!

Congratulations! Your site is live!

## [optional] Buy a domain and use it

We used `GoDaddy` but we have no affiliations with them and there are plenty of
domain name providers. Choose the right one for you, buy your domain and then adjust DNS accordingly.

### 1 Setup your DNS

Most of the domain providers will let you set up the DNS records for your site. We are going to use
that to redirect to your GitHub page, set up the following records in your DNS managing tool.

Read the official [instructions](https://help.github.com/en/github/working-with-github-pages/about-custom-domains-and-github-pages).

But here is the gist:

- **for apex domain**: create an 4 `A` records, each with one of these IPs

```bash
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

- **for `www.`**: create a `CNAME` record with a key of `www` and a value of `username.github.io`

You may have both without a problem.

### 2 Setup you CNAME in GitHub

If you are using `npm run deploy` to deploy you app then go to your repo's settings,
scroll to the bottom and add the custom domain in the **Custom Domain** input.
You should add your naked or apex domain, without the `www`.

If you are using GitHub actions (more on this later) then you need to add
this exact file to your source code in the `develop` branch,
it should be named exactly `CNAME` and it should contain your domain as the only line of text.

CNAME

```bash
myblog.com
```

Depending on your domain provider these changes in the DNS records might take
from a couple of minutes to a couple of days (in our case it was pretty fast with GoDaddy).

Checkout the `dig` linux/unix command to diagnose DNS updates (probably will do a blog post about this)

## Deploy automatically with GitHub Actions (CD)

[GitHub Actions](https://help.github.com/en/actions/automating-your-workflow-with-github-actions) is an automation
service provided by GitHub with free tiers and quick access if you host your code in GitHub.
You may use other automation tools for this but the steps will definitely vary greatly.

A bit of a glossary:

- actions: a list of steps to perform a reusable task, it accepts parameters (yes, the service is called "GitHub actions" and one of the unit of abstractions inside the service are also called "actions").
- Workflow: an automation that will executed by GitHub when some event that you define happens (i.e. push to a branch). It will run a number of steps that might be actions or simple bash commands

### 1 Create a Workflow

Create the Workflow file in your `develop` branch at `.github/workflows/deploy.yml`
You can call it whatever you like as long as it is inside that directory.

Add this to the file contents

```yml
name: Gatsby Publish

on:
  push:
    branches:
      - develop

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1
      - uses: enriikke/gatsby-gh-pages-action@v2
        with:
          access-token: ${{ secrets.ACCESS_TOKEN }}
          deploy-branch: master
```

You may create this via the GitHub actions UI in your repo's GitHub page.

Notice we are using two actions, one is a standard action provided
by GitHub to download the repo's code in the
automation runner (think of it as a virtual machine) and
the other one [`gatsby-gh-pages`](https://github.com/enriikke/gatsby-gh-pages-action) is a third party provided one.

I inspected the code of the latter and it seemed OK but I always recommend checking third party
code before using it to avoid any potential security attacks.
In this case it is even more important because this action will have
access to an `ACCESS_TOKEN` that we will be creating in the next step
and that gives the script access to push to your repo.

TLDR: be careful to whom you give this sort of permissions to.

Please note that if you are doing this step you must have added the CNAME file to your source
as explained in the section above.

### 2 Set up an access token

You may have noticed this line in your Workflow:

```yml
access-token: ${{ secrets.ACCESS_TOKEN }}
```

This is telling GitHub actions to read a variable called `ACCESS_TOKEN` from your repo's secrets
and pass it as a parameter named `access-token` to the `enriikke/gatsby-gh-pages-action@v2` action.

This will give the action permissions to push to your master branch to deploy your code.

Follow the following instructions to set up your token. Please note that the name
is important so be sure to name it `ACCESS_TOKEN` or if you want a different
name make sure you change the name you use in your Workflow. This is just a variable,
so treat it like so.

- [create a token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)
- [use it in your Workflow](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-and-using-encrypted-secrets#creating-encrypted-secrets)

## Closing

At this point you will have a proper Gatsby blog deployed to the cloud.

Lets put a list of things you probably want to take care before you really
consider this blog production-ready.

- setup google analytics id to analyse traffic
- setup HTTPS for free via settings in your GitHub repo
- register your site in [google search console](https://stackoverflow.com/questions/49073043/get-github-pages-site-found-in-google-search-results) to improve SEO
- add proper meta data to improve your SEO
- generate real content to improve SEO
- start writing posts!
