---
title: Data Fetching with Redux is anti pattern
date: "2020-11-11"
author: franleplant
description: "An introduction to react-query. Modern tools and technique have made data fetching with Redux obsolete and painful, let's cover one alternative."
tags:
  - TypeScript
  - Javascript
  - React
  - react-query
  - redux
  - redux-toolkit
  - data fetching
  - reactive data flow
seoFooter:
  - Redux sucks.
  - How to implement data fetching in modern react applications?
  - How to use `react-query`?
  - Why `react-query`?
---

For the longest time it has been an idiom in React applications to
perform data fetching through Redux, this approach has always
have problems in its efficiency and effectiveness but we just
got better ways of handling that. Let us together
explore what better alternatives the ecosystem has to offer.

Redux is a global state management system mostly associated with
React applications that is great for managing global app state and
the states transitions in a predictable way but when dealing with
application data requirements it really fails.

## The typical data fetching in Redux

```typescript:title=post.action.ts
import {
  LOADING_START,
  LOADING_END,
  FETCH_ERROR,
  UPDATE,
} from "./post.reducer";

export function loadingStart() {
  return { type: LOADING_START };
}

export function loadingEnd() {
  return { type: LOADING_END };
}

export function fetchError(error: string) {
  return { type: FETCH_ERROR, payload: string };
}

export function update(post: IPost) {
  return { type: FETCH_ERROR, payload: post };
}

// this requires redux-thunk
export function getPost(postId: number) {
  return async (dispatch) => {
    dispatch(loadingStart());
    try {
      const post = await api.getPost(postId);
      dispatch(update(post));
    } catch (err) {
      dispatch(fetchError(err.toString()));
    } finally {
      dispatch(loadingEnd());
    }
  };
}
```

```typescript:title=post.reducer.ts
export const LOADING_START = "posts/LOADING_START";
export const LOADING_END = "posts/LOADING_END";
export const FETCH_ERROR = "posts/FETCH_ERROR";
export const UPDATE = "posts/UPDATE";

export const initialState = {
  loading: false,
  error: "",
  data: {},
};

export interface IState {
  loading: boolean;
  error: string;
  data: IPost;
}

export default function postReducer(
  prevState: IPostState = initialState,
  action: IAction<any>
): IPostState {
  switch (action.type) {
    case LOADING_START: {
      return { ...prevState, loading: true };
    }
    case LOADING_END: {
      return { ...prevState, loading: false };
    }

    case FETCH_ERROR: {
      const error = action.payload;
      return { ...prevState, error };
    }

    case UPDATE: {
      const post = action.payload as IPost;
      const postId = post.id;

      return { ...prevState, data: post };
    }

    default: {
      return prevState;
    }
  }
}
```

```typescript:title=root.reducer.ts
import post from "./post.reducer";

export default combineReducers({ post });
```

Things you might be telling yourself:

- that's the wrong action semantics, structure or naming.
- that's the wrong file structure, Official Redux docs once upon a time opposed to the "ducks" approach but now they seem to [be strongly recommending it](https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks)
- you shouldn't use switch, you should use objects, or this other library.
- you should normalize or you shouldn't.
- the state shape is bad.
- you should use [immer](https://github.com/immerjs/immer) (which I love BTW) or similar.
- you should use [redux-toolkit](https://redux-toolkit.js.org).
- you should use [sagas](https://redux-saga.js.org/) (which is even more verbose and complex BTW).
- where are the selectors? you are such a newbie!.

This partially concedes my point: data fetching with Redux is too complicated,
there are too many decisions you and your team need to make, and even worse,
these decisions are not core architectural decisions, they are decisions that
happen in the most common of cases: developing a simple component that does data fetching,
so chances are you are not always going to be there to structure everything "correctly".

Additional problems you need to think and eventually solve:

- do we normalize? do we do it by hand or by using libraries? are they compatible with my backend?
- how do I enforce my team to write all the boilerplate consistently and correctly?
- what meta data do I need (loading, error, etc)? do I need to keep it manually?
- what happens if more than one component triggers the same data fetching
  action? Do I need to dedup http calls manually?
- do I need to make all my data fetching actions at the root of my app? (in big enough apps this causes a bad decoupling between the data requirements of your components and your components).
- what about if my app is too big and I want to more granularly define what
  data fetching requirements a medium level component needs to have?
- when does this fetched data expires? how do I clean it up?
- what happens when you want to keep multiple posts? how do I structure the state?

All these things and more illustrate the crazy amount of decisions, considerations and
code a developer needs to make in order to fetch a simple post.

**NOTE** Using [redux-toolkit](https://redux-toolkit.js.org/api/createAsyncThunk#examples)
is better but still verbose and you still need to
make a lot of those decisions (and what's happening behind the scenes is
what we just covered, just sugar coated)

Simple and common tasks should have simple solutions.

## The usage problem

Let's say that most intelligent developer writes
all the data fetching boilerplate, we still have a fundamental
problem which is: **the decoupling of the triggering of http calls
(the action) and the reading of the result (the state)**:

```typescript
function mapStateToProps(appState: IAppState) {
  // reading the result of the data being fetched,
  // but who asked for it? do I need to do it?
  // did someone already did it?
  const { data: post, loading, error } = appState.post;
  return { post, loading, error };
}

function mapDispatchToProps() {
  // this will be called and will trigger the http call,
  // let's hope that `MyComponent` does it and does it correctly,
  // i.e. in onComponentDidMount AND onComponentDidUpdate
  return { getPost: actions.getPost };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);
```

> **Decoupling things that are tightly coupled is as bad as tightly coupling things that shouldn't be**.

By using `redux` hooks it can, partially, get better.

This also relates with the concept of **reactive data flow** and **imperative data flow**.

Data fetching (when you retrieve data) is usually reactive in a React applications,
meaning that a prop will change, a component will render and an associated side effect
of fetching new data should be triggered. Mutations, like saving a form are typically
imperative. **Redux forces both data fetching and mutations to be imperative**.

## The library problem

Any library that relies on Redux has one more hard and potentially complex
dependency on apps that use them, if you rely on Redux to make your data fetching
then your library will need at least two interactions: hook into the app's Redux
(this might require the app to install Redux, or change some conflicting configurations,
like adding support for thunks or any other redux middleware the lib might depend on);
and the main interface (i.e. lib.fetchPost), so the composition and distribution
model is complicated by this fact.

## What is data fetching?

Let's take a step back and analyse what we really want
of our data fetching layer:

- dedup http calls; any "smart" component that needs data to be fetched should be able to declare it without fearing it might cause duplicated http calls.
- meta flags: loading, error, last fetched, etc.
- updating or invalidating the _state_ when necessary, example:
  - when data is too old
  - when you mutate the data in the server and you need to reflect that
- reactivity (when a prop changes new data will be fetched if necessary).
- medium term response storing, reading _and_ writing or updating.
- heavy abstraction, simplicity and a really easy to use interface.

When you think about it what you really want is a
**cache layer** for your http requests that will simply maintain
a key value store for your data, where the key will identify
the _resource_ and the value will be the resource plus its metadata:

```typescript

export const cache = {
  'posts/123': {
    data: {/* the post */}
    meta: {loading, error, lastFetched, keepAlive, etc}
  }
  'posts/456': {
    data: {/* the post */}
    meta: {loading, error, lastFetched, keepAlive, etc}
  }
  'users/barry@white.com': {
    data: {/* the user */}
    meta: {loading, error, lastFetched, keepAlive, etc}
  }
}
```

And this data structure will have the appropriate functionality on top of
it to

- fetch the data and store it the right key
- update other cache keys after a successful data fetch (i.e. after fetching multiple posts we update the individual post cache)
- update cache after a mutation (i.e. saving a post form)
- cache time: how long I want to keep this data?
- stale time: how long I will consider this data _fresh_?
- automatically managing meta flags.

So you stop thinking about

- state shape (it is just a key value store of responses)
- no normalization
- data fetching meta state like loading, error, etc
- actions
- reducers
- thunks
- imperative data fetching `onComponentDidMount`

## Is there something that already does this? Spoiler alert: YES!

Enter [react-query](https://react-query.tanstack.com/) et al.

There is one alternative built on top of Redux called [redux-query](https://amplitude.github.io/redux-query/)
I've used it extensively and although it is an improvement over pure Redux,
some of the core problems that we covered remained.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">removing redux after switching to react-query like <a href="https://t.co/JyDl8UMCHl">pic.twitter.com/JyDl8UMCHl</a></p>&mdash; @brumm (@funkensturm) <a href="https://twitter.com/funkensturm/status/1321760646803968002?ref_src=twsrc%5Etfw">October 29, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

`react-query` is a really nice new library that builds on the things
we have previously discussed, solves all the problems, is
relatively simple and easy to understand (if we you throw away the Redux and appState paradigm)
and will reduce the amount of code you need to write
for data fetching by an absurd amount, all the actions, reducers, connect,
mapStateToProps, mapDispatchToProps, onComponentDidMount get's replaced by this

```typescript
export function useGetPost(postId): QueryResult<IPost> {
  return userQuery<IPost>({
    queryKey: `posts/${postId}`,
    queryFn: api.getPost,
  });
}
```

and its usage

```typescript
export default function MyComponent({ postId }) {
  const { data: post, isLoading, error } = useGetPost(
    postId
  );
  //...
}
```

This covers what we did in Redux and more, as you can see it requires
a considerable less amount of code.

`redux-query` deals with a cache of responses instead of the Redux state,
but can do most of the same things if necessary i.e. updating the state, it just
have a different semantic and a much less verbose interface.

There are some new problems with react-query that mostly rise from its
reactive interface like dependent queries et al but if you know how to deal
with react you will know how to deal with that, and in my production experience
they tend to be the exception and not the rule.

## TLDR: try react-query

The programming world is an ever evolving technical landscape where
the community grows and learns new tips and tricks from experience,
Redux has a historical significance and it is still suitable for certain
scenarios but modern tools have provided better ways of doing some of the
things we typically used to do with Redux, data fetching is one of them.

This new data fetching paradigm is mostly possible because of this
crazy idea the react team had: react-hooks. I agree they are
_weird_ but the new things we can build with them and the composition
models they enable is really great, and I expect more awesome
and unexpected tools like react-query to come in the near future
as we develop our understanding of hooks.

Enjoyed the ride? Consider subscribing to our awesome newsletter
and become part of the family and consider donating and supporting my work.

Cheers!
