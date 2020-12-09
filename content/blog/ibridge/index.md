---
title: "Make iframes Great Again: introducing ibridge"
date: 2020-12-11
author: franleplant
description:
  "Introducing ibridge, a tiny, typesafe, promise-based library
  for bidirectional and secure iframe communication."
tags:
  - ibridge
  - typescript
  - javascript
  - iframe
  - postMessage
  - event emitter
  - Emittery
  - jsdom
---

## TLDR

- I forked [postmate][12] and called it `ibrige`.
- It uses [Typescript][15] and has cool features regarding type safety.
- I improved the semantics of `iparent.get`.
- I made the code simpler.
- I made both `ibridge.Parent` and `ibrige.Child` be Event Emitters for better composition.
- It has worked super fine!.

## Introduction

I have recently published [ibridge][10], a tiny, typesafe, promise-based library
for bidirectional and secure [iframe][17] communication.

- [npm][10]
- [repo][11]

## What is `ibridge`

`ibridge` let's you

- retrieve data from the child to the parent.
- implement complex communication flows between parent and child iframes.
- pre stablish a communication flow via a simple **handshake** _protocol_.

## How it works

![ibridge high level flow diagram](./TODO.svg)

- `ibridge` is an abstraction on top of [postMessage][16].
- Exposes `ibridge.Parent` and `ibridge.Child`, used by the parent and child document respectively.
- In here we call their instances `iparent` and `ichild` respectively.
- Both `Parent` and `Child` are **event emitters** implemented via [Emittery][13].
- Security is handled entirely by native [CSP headers][18].
- At the initial phase it performs a **handshake** in which the Parent sends a special message to the child and waits for a special response.

### Remote function calls from `Parent` to `Child` (the most common flow)

`Child` is able to define a `Model` which is made off all the functions that
**live in the Child** that can be called remotely by the `Parent`.

`Model` can be a trivially deeply nested object, and each Model function
can by sync or async, returning a resolved or rejected `Promise` that will be
automatically sent back to the `Parent` without any surprises. Return
values and arguments can be anything that can serializable, plus, return
values can be any `Promise` to a serializable value. Let's see an example:

```typescript
try {
  const resolvedValue = await iparent.get(
    "blog.analytics.getPageViews",
    "page1",
    "page2"
  );
} catch (rejectedValue) {
  // handle errors
}
```

Internally this means an event flow like the following

**1)** parent to child

```typescript
sendToChild({
  type: "GET",
  modelPath: "blog.analytics.getPageViews",
  arguments: ["page1", "page2"],
});
```

**2)** child to parent

```typescript
try {
  const value = await model.blog.analytics.getPageViews(
    "page1",
    "page2"
  );
  sendToParent({
    type: "GET-RESOLVE",
    value,
  });
} catch (error) {
  sendToParent({
    type: "GET-REJECT",
    error,
  });
}
```

This makes for a pretty standard and easy to understand model,
this thing that seems so intuitive was one of the main reasons
I departed from the original implementation in [postmate][12], more on this later.

If it feels natural or even dumb then I have succeeded.

### Free form communication

`ibrigde` also lets you build more complex bidirectional flows via high level events

```typescript
// Send events to the child
iparent.emitToChild("ping", { value: "i am father" });

// listen to events from the child
iparent.on("pong", (msg) => console.log(msg));
```

```typescript
// listen to events from the parent
ichild.on("ping", (msg) => {
  // send message to the parent
  ichild.emitToParent("pong", { value: "i am child" });
});
```

Internally `ibridge` has a single event listener for [postMessage][16] in both
the `Parent` and the `Child` that will listen to valid `ibridge` messages
and dispatch them as [Emittery][13] events. This allows you to use higher level
event emitters abstractions such as `once`, `off`, `onAny`, etc.

Fun fact, `ibridge` uses also `Emittery` for the handshake mechanism.

## Why `ibridge` was created

I have been designing and implementing an `sdk` to provide
consumers (other companies and services) to use our platform
(let's call it **Platform A**) from outside our own controlled domains.

For different circumstances and limitations I can't really state publicly
we ended up choosing an iframe based solution so that consumers (parent document)
could interact through high level abstract APIs with our platform (child document).

This is similar to what other providers already do like Patreon (see link at the bottom),
Twitter embedded tweets (see tweet below), etc.
This bypasses certain cross domain limitations by using an embedded document.

<blockquote class="twitter-tweet">
  <p lang="en" dir="ltr">React is slow, what now? <a href="https://t.co/y8cfBxFrEY">https://t.co/y8cfBxFrEY</a></p>
  &mdash; franleplant (@franleplant)
  <a href="https://twitter.com/franleplant/status/1334960068392005638?ref_src=twsrc%5Etfw">December 4, 2020</a>
</blockquote>

> **DANGER ALERT** iframes are a delicate topic since there are a lot of security
> concerns present. Make sure you allow your page to be rendered inside an iframe
> by controlling the `Content-Security-Policy` HTTP header. Read [more in MDN][18],
> and be sure to understand how the browser security model works related to iframes fully
> before launching to production.

Since most of the work in building such `sdk` lies on building a good
higher level communication protocol between `parent` and `child` we started
by using an already existing solution called [postmate][12], and it worked
well until it didn't anymore. We tried hacking around it
but in the end the implementation was far too noisy because of some
core problems in `postmate`, that's why I decided to fork it.

## Why `postmate` was not enough

I created [an issue][19] in postmate's repo to see if we can unify efforts eventually.

These are the problems I found with postmate that made me fork it:

### Wrong semantics for `iparent.get`

Postmate doesn't have a good semantics for `.get`, in fact, if you call a child model
through postmate's `.get` and that model throws then you won't receive a failing promise in the
parent, in fact that's one of the main things we had to hack around internally and other's have opened
[issues and hacked around too](https://github.com/dollarshaveclub/postmate/issues/94).

One of our main use cases, and when you think about it, it's probably the main use case for a lot of
users; was and is to remotely call functions that live in the child and get the resolved or rejected values
with that same semantics in the Parent so we can report back to the parent's consumer.

> `ibridge` gives better semantics to `.get` by making it a deconstructed remote function call that handles
> return values and errors thrown in ways that feel natural, hiding the underlying mechanisms completely.

### Wrong semantics and name for `iparent.call`

On first read one might think that `iparent.call` is the main way of remote calling model functions
in the child from the parent but is actually not, it just a way of **calling model functions
just for the side effects**.

This makes no sense, we already can cover that with `.get`, if the consumer doesn't care
about the model's return function then it simply can be omitted. This is exactly how
we handle function calls in regular programs. If we do not care about their return value
we just call them for their side effects with the same mechanism we call them when we do care
about their return values _or errors_.

Another use case for `.call` can be simply **emitting events** to the child, but it doesn't have
a good name to reflect that and being strictly related to child model functions not always
fits the flow users have in mind.

> `ibrige` doesn't have `.call` and instead you simply can `iparent.emitToParent` and we also provide
> the opposite: `ichild.emitToChild` and everything is abstracted by relying on `Emittery` as much as possible.

### The Model implementation is just too simplistic

We very early found ourselves hoping to be able to call deeply nested Model functions
but found that postmate only accepted model keys, this means that
you need to collapse all your model functions into a single shallow object.

This is too simplistic and prevents users from building more complex
model structures.

```typescript
iparent.get("blogPostsGetPageViews", ...args);

// child model
const model = {
  blogPostsGetPageViews: () => {
    /*...*/
  },
};
```

> `ibridge` allows `.get` to accept a lodash's `path` to the model, by relying on [lodash.get][20].

```typescript
iparent.get("blog.posts.getPageViews", ...args);

// child model
const model = {
  blog: {
    posts: {
      getPageViews: () => {
        /*...*/
      },
    },
  },
};
```

### Model context

Another thing we find ourselves wanting was the capability of providing a simple
Model context that could be accessible to all model functions should they need to.

With Postmate you need to roll out your own implementation, but there's a really easy
way of providing a simple context implementation without letting the user roll
out their own implementation.

> `ibridge` provides an easy way of passing `context` to all Model functions.

```typescript
function myModel(this: IContext) {
  // accessible via this
  return context.doSomething();
}
```

### Typescript

Additionally `ibridge` uses Typescript, this let us express certain things
such as that the `Child` is generic for `TModel` and `TContext` and so
you can have better validations in terms of type safety.

Additionally I am a big fan of Typescript and the guarantees it provides so
I basically do nothing without Typescript.

## Closing

Postmate is a great library that was in need for a little bit of love.
I am open to unifying efforts with the Postmate team so that we can
have a single version of this library with all the benefits that `ibridge`
brings to the table.

I will also try to give `ibridge` more support, if you are interested
in helping me maintain it let me know!

<hr/>

Like the content? Consider subscribing, buying me a coffee or even becoming a Patreon below.

[10]: https://www.npmjs.com/package/ibridge
[11]: https://github.com/franleplant/ibridge
[12]: https://github.com/dollarshaveclub/postmate
[13]: https://www.npmjs.com/package/emittery
[14]: https://www.npmjs.com/package/debug
[15]: https://www.typescriptlang.org/
[16]: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
[17]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
[18]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
[19]: https://github.com/dollarshaveclub/postmate/issues/211
[20]: https://lodash.com/docs/4.17.15#get
