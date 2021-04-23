---
title: How to create route namespaces with Express
date: "2020-08-07"
author: franleplant
description:
  "Let's quickly cover how to create namespaces in Express.js, something
  that is not so evident in the official docs and is farily common."
tags:
  - Javascript
  - Typescript
  - NodeJs
  - Express
  - Namespace
  - Router
---

This is going to be a quick post about solving the
great old question: _"how to create route namespaces with Express"_.

[Show me the answer](#the-complete-example)

This isn't at all an advanced technique but we have either very old
posts talking about how to do it the old way; or we have libraries to
do it or; we have the Express documentation which rather
_inexpressive_ if you pardon a pun.

First of all, the Express docs are purely API docs, they tend to not
cover too much real world scenarios or "recipes" as some call them.

This is specially hard on newcomers that might not have all the
necessary http, frameworks, nodejs, express idiosyncracy context
in their heads yet.

So, the closest thing we have to an answer in the Express docs are [here](https://expressjs.com/en/4x/api.html#app.use),
and say in a very tiny place:

> Since router and app implement the middleware interface, you can use them as you would any other middleware function.

And later goes to actually show the closest thing to an example that
you will see in the docs:

```javascript
function mw1(req, res, next) {
  next();
}
function mw2(req, res, next) {
  next();
}

var r1 = express.Router();
r1.get("/", function (req, res, next) {
  next();
});

var r2 = express.Router();
r2.get("/", function (req, res, next) {
  next();
});

var subApp = express();
subApp.get("/", function (req, res, next) {
  next();
});

app.use(mw1, [mw2, r1, r2], subApp);
```

As you can see, this is rather blunt and inexpressive and it is using
quite old javascript.

The answer is actually right here but you will never
find it just by googling: _"how to create namespaces in express"_ or
any other variant.

## The Answer

Although we've seen the answer in a very _expressive_ way in the
Express docs, here we present it a little bit more unpacked, explained and
with actual real world usage in mind.

One typical scenario where you would want namespacing is for example
when you create a Rest api that has all its rest sources under the `/api`.

So for example you would have

- `/api/dog/` -> get all dogs
- `/api/dog/123` -> get dog with id 123
- `/api/cat/` -> get all cats
- `/api/cat/123` -> get cat with id 123

This is nice way of structuring your application since you might have routes
that are not particularly Rest resources that might go some other place.

Or you might even be working on an app that also servers files and html routes,
which is very common when building monolithical apps or simply smaller apps that
don't require any other fancy micro-servicing.

### Enter `Router`

Express `Router` is great way of grouping related route handlers and
to break your app in smaller more manageable pieces.

In particular, the router is great to express a single Rest Resource,
i.e. a dog, a cat, a person, a document, etc.

A common pattern to express this is the following:

```typescript
function dogController(): Router {
  const router = Router();

  router.get("/dog", (req, res) => {
    res.send("get all dogs");
  });

  router.get("/dog/:dogId", (req, res) => {
    res.send(`get dog with id ${req.params.dogId}`);
  });

  return router;
}
```

Notice that this is function, and that is because you typically would want to pass
parameters when your app becomes larger, such as some configuration, contextual data,
shared methods, etc.

Right now this router isn't _mounted_ anywhere, which means that the express app
is not serving it, so to serve it you can do the following:

```typescript
app.use("/api", dogController());
```

At this point you will have the router mounted and if you
make the request you will get a response:

```bash
$ curl http://localhost:3000/api/dog
> get all dogs
```

So how about if you need to add another controller?

### How to create namespaces with Express

If you have followed here you will for sure
know the exact answer and it is the following

```typescript
app.use("/api", [dogController(), catController()]);
```

So, the end interface is rather nice, you can add
or remove routers inside this `api` namespace by
adding or removing controllers to the array (which
are middleware if you didn't know)

Let's test it out

```bash
$ curl http://localhost:3000/api/dog
> get all dogs

$ $ curl http://localhost:3000/api/dog/123
> get dog with id 123

$ curl http://localhost:3000/api/cat/123
> get cat with id 123

$ curl http://localhost:3000/api/cat
> get all cats

# Other routes still work
$ http://localhost:3000/
> Hello World!
```

## The complete example

How to create route namespaces in express TLDR:

```typescript
import express, { Router } from "express";

const app = express();
const port = 3000;

// Fake Rest Controller for Dog resource
function dogController(): Router {
  const router = Router();

  router.get("/dog", (req, res) => {
    res.send("get all dogs");
  });

  router.get("/dog/:dogId", (req, res) => {
    res.send(`get dog with id ${req.params.dogId}`);
  });

  return router;
}

// Fake Rest Controller for Cat resource
function catController(): Router {
  const router = Router();

  router.get("/cat", (req, res) => {
    res.send("get all cats");
  });

  router.get("/cat/:catId", (req, res) => {
    res.send(`get cat with id ${req.params.catId}`);
  });

  return router;
}

// Create the api namespace and assign
// any amount of routers
app.use("/api", [dogController(), catController()]);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(
    `Example app listening at http://localhost:${port}`
  )
);
```

Download the code [here](TODO REPO).

I hope this post will ease your way into the NodeJS / Express world
and will serve as reference in the future.
