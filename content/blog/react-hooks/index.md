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
