---
title: TODO
date: "2019-12-26T22:12:03.284Z"
author: franleplant
description: "TODO"
tags:
  - TODO
---

React Hooks in Depth

Roadmap (check presentation)

- why hooks? what is the problem they want to fix?
- useState
- useRef
- useEffect
- useCallback
- useMemo
- Building examples
  - useIsMounted
  - usePrevious
  - useTimeout `useTimeout(callback, timeout)`
  - useSetTimeout `useSetTimeout(): (callback, timeout) => id`
  - useDeepCompareEffect: analysis
  - algo con useContext

Rules of building hooks

Hooks are functions so 1) let's design (or guess) the inputs and outputs

Hooks use other hooks, the more important ones I think are useEffect and useState

What's the state you are trying to keep?
Will you need to keep values that wont trigger re renders if changed?

useEffect

At least you need to consider that the useEffect callbkac will run
twice, after the component mounts (first render) and after the component unmounts (it is removed from the dom).

If you need to run the callback when other values change then make sure to add
those to your list of deps. Make sure you understand when this callback will be run by react.

Make sure you undertand the cleanup implications, understand the render i, effect i, effect cleanup i-1 sequence
that react naturally follows.

Think in terms of reactive data flow, this function will be called at least once (first render) and the cleanup
will run once (unmount) and then it will be called everytime the deps change.

Instead of doing everything into a single useEffect, break everything into various useEffect
calls, this will let you break things into reusable hooks or simply grouping effects
by semantic value. This is actually one of the main beneffits of useEffect, that instead
of throwing all side effects in a single function (i.e. componentDidUpdate) you can group
them semantically and break them appart, understanding the relationship of the parts more easily.

use the `key` trick to spawn a new component life cycle for important props instead of trying to
manage that via `useEffect`, understand that changing the `key` is a way of forcing react to
remove the previous instance (fiber) and create a new one, or kill the previous component instance and spawn
a fresh new one. The cannonical case is the `entityId` prop, often components are associated with entities, let
say `<User id={123} />`, and the User component will fetch data and all that. There's no reason
to fiddle around with useEffect cleanup and state of the already fetched user when the id changes and
all that, instead simply use the `key` associated with the userId and every time that id changes then a new
lifecycle of that component will be spawn starting fresh.

Rules of dependencies

- functions: if your dep is a function you will most of the time want to make it a stable callback via `useCallback` or store it in a ref
- refs do not need to be added to deps, if you do then they wont trigger a re render when the content changes
- use eslint plugin react-hooks, 99% of the time you want no warnings
- it is common for deps to be either state or hook arguments.
- computed values should be computed outside the useEffect, try to reduce to the minimum the deps you have
- avoid having complex objects as deps, instead listen to the most likely few attributes you're going to use by local aliasing
- most of the time you can get away with regular ref comparison that useEffect does on deps, in the remaining fue cases you can use use-deep-compare-effect. Make sure to read the code.

Framework for building hooks

Hooks are a way to interact with the underlying component instance (fiber)
that follows the react component lifecycle.

They also let declare side effects that will happen at the different stages
of that lifetime.

With this in mind, answering these questions might help
you build your custom hook you need

How do you want to interact with the component instacd?

1. If you want to store values across renders then `useRef` (equivalent to `this.something`)

- i.e. you want to store values across renders, such as the previous value of a prop

2. you want to run code i.e. side effects and different stages of the component lifecycle then `useEffect`

- i.e. when component mounts, when component unmounts, when component updates, etc
- i.e. side effects might be data fetching, in general i/o and also cleanup
- interacting with anything that is not react/jsx/element based should be considered a side effect
- run code _after_ the render stage (book keeping, logging, etc)

3. you want to run code after rendering but only if some prop or state changed then `useEffect` + dependencies
4. if you want to abstract state keeping logic then `useState` or `useReducer`, state are values that when changed will triger a component re render.

- i.e. store compound form fields state

All these can be composed together to make complex stuff.

You can basically ask this question enough times to build any hook,
with a top-down design approach, first ask what you want to do at the highest
level, get an answer, build, and ask again about a finer detail until you get the answer.

`useRef` lets you store values in the component instance, how is this different
from referencing clousure values from your component function definition?
Well, you first need to understand the difference between a component instance and
a component definition, which is similar to an instance vs class, and so, useRef
is equivalent to `this.someValue = 123`.

Example.

How do you want to interact with the component instance?

I want to store the previous value of a prop so that I can compare the previous prop
with the current prop value. => `useRef`

```typescript
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef()
  ref.current = value
  return ref.current
}
```

Got it, but now I want to update the ref value only
_after_ rendering so that the current render call
have access to both previous and current props. => `useEffect`

```typescript
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
```

Got it, but now I also want to update the ref value _only_ when
the value is different => `useEffect` + dependencies!

```typescript
function usePrevious<T>(value: T): T | undefined {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
```

How do you want to interact with the component instance?

I want to store the `isMounted` boolean across renders => `useRef`.

```typescript
function useIsMounted() {
  const isMountedRef = useRef(false)

  return isMountedRef
}
```

Got it, but I want to update that value only _after_ the component first renders (mount) and
I also want to update that value to false after the component unmounts => `useEffect` !

```typescript
function useIsMounted() {
  const isMountedRef = useRef(false)

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
    }
  }, [])

  return isMountedRef
}
```

TODO break down `useEffect` into two categories

- run code when the component first renders / mount and when it unmounts = `useEffect` + dep = []
- run code after every render => `useEffect`
- run code when values change => `useEffect` + deps

How do you want to interact with the component instance?

I want to clearTimeout (run code) after the component is unmounted => `useEffect` + dep = []

How do you want to interact with the component instance?

TODO talk about useEffect dependencies, or maybe simple show the good example I already made
