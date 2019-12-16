---
title: Creat a blog with Gatsby.js
date: "2015-05-01T22:12:03.284Z"
description: "Create a blog with Gatsby.js in a few easy steps using React, Javascript, Github Pages and Github Actions"
---

## Introduction

In the post we are going to examine how we created this (nosleepjavascript.com)[https://nosleepjavascript.com] blog
(the one that you are currently reading) with Javascript and React, Gatsby as the core framework,
Github Pages as a hosting solution and Github Actions to automatically deploy when pushing to a particular branch,
(which is a rudimentary CD (Continuous Integration) Solution).


## Boostraping a site with Gatsby

why gatbsy? what is gaysby? point to the docs and to the starters and to its versatility


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
