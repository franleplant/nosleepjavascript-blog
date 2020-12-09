---
title: Jest makes unit testing fun again
date: 2020-11-04
author: franleplant
description: "Why I love Jest and why you should consider it for your next project."
tags:
  - jest
  - typescript
  - javascript
  - unit testing
  - mock
  - Node.js
  - mocha
  - React.js
  - jsdom
---

![jest](./img.jpg)

<div style="text-align: center; margin-bottom: 40px;">
<span>Photo by <a href="https://unsplash.com/@fernanddecanne">Fernand De Canne</a> on <a href="https://unsplash.com/s/photos/clown">Unsplash</a></span>
</div>

## Why I love Jest and why should consider it for your next project.

Jest is a full-blown, batteries included, ready to rock, testing framework that
has similarities with mocha and other testing frameworks but with a much
more integrated experience, making it very easy to have a production
ready unit test setup out of the box with very little effort.

Let's cover some of the things I love about Jest,
if you are interested in my unit testing mindset and philosophy
and an illustrative story check it at the [end of this article](#bonus-my-unit-test-mind-set).

## 1. Less verbose than similar frameworks

- Simple tests can be terse
- Assertion library is always available

```typescript
test("my function", () => {
  expect(myFunction(args)).toBe(true);
});
```

- You can omit a top level describe when using the BDD interface

```typescript
beforeEach(() => {...})

it('should do something', () => {...})
```

Tests should be expressive but abstract, the less code
the better, Jest helps with this.

In a lot of cases, if you structure your code a certain way,
using one or two `test` per unit will be more than enough.

## 3. Jest replaces sinon for the most part

- need to mock / spy / stub pieces of code? use the global `jest.fn()`

```typescript
test("jest mocks", () => {
  const mockSpyStub = jest.fn();

  mockSpyStub("jest is love");

  expect(mockSpyStub).toHaveBeenCalledWith("jest is love");
});
```

Check the [docs](https://jestjs.io/docs/en/mock-functions)

## 3: Jest comes with an assertion library

- Comes already installed, integrated and globally available in all tests
- Covers a wide range of assertions / matchers.
- Good typescript support
- Perfect integration with Jest mocks / stubs / spys `jest.fn()`j
- Nice diff reporting tool

Check all the [included assertions here][11].

## 4. Jest comes with code coverage integration

- Uses [instanbul](https://istanbul.js.org/) under the hood
- Flip a simple switch to enable it with little extra config
- Good [official documentation](https://jestjs.io/docs/en/cli.html#--coverageboolean)
- Ready to rock

> _Note_ Actually I just checked mocha's official documentation and it
> redirects to Wallaby.js which is great but it is a paid tool, instead
> of linking to `nyc` (instanbul) and how to integrate with that.

## 5. Jest has out of the box module mocking

Jest has an awesome module mocking story:

- Out of the box support with little config
- Works with CommonJS and native ES6 modules
- Works well with local modules and `node_modules`
- Simple and terse interface
- Enables well known practices of unit testing and mocking thoroughly.
- Enables effective, efficient and terse unit tests of complex pieces of code.

> Little implementation detail: Jest achieves
> this partially by running tests inside an isolated [Nodejs vm](https://nodejs.org/api/vm.html)
> which gives jest complete control of the test environment.

Let's cover some really useful patterns I have been using a lot lately:

- es6 modules: default export mock

```typescript
import myLib from "my-lib";

// now myLib is a mock
jest.mock("my-lib");
// configure a mock return value, you
(myLib as jest.Mock).mockImplementation(() => "test value");
```

- es6 modules: member mock

```typescript
import { member } from "my-lib";

// now myLib is a mock
jest.mock("my-lib");

// configure a mock return value, you
(member as jest.Mock).mockImplementation(
  () => "test value"
);
```

There are [libs](https://github.com/jhnns/rewire)
out there that provide similar strategies but
they often fall short, or do not support ES6 modules,
or are simply too complicated because they
do not have the level of control over how the code is being run
like Jest does.

Check the official [docs](https://jestjs.io/docs/en/es6-class-mocks).

## 6. Jest has first class support for Babel and Typescript

Easy to integrate with [Typescript](https://www.typescriptlang.org/)
either by using [Babel](https://babeljs.io/)
or by using [ts-jest](https://github.com/kulshekhar/ts-jest).

If your codebase already uses typescript through Babel
then jest will automatically use that config and you won't
need to do anything else.

## 7. Jest test runner interface is awesome

Watch mode, interactive mode, filtering, Jest has you covered.

Read more [here](https://jestjs.io/docs/en/cli).

This is a really nice trick I use a lot to focus
only on particular tests at a time: reg exp filtering

```sh
# runs all the tests
jest

# runs only the tests that fit this patterns
jest pattern
jest myFunction
jest myFunc*
```

Something similar can be done in the interactive watch mode.

## Bonus: My unit test mind set

- test in the most simple and minimalistic way
- do real unit tests, mocking everything else
- test only the high impact code

In most of the cases I don't see the value of being obsessed
with 100% coverage, because sometimes testing two
error handling lines inside a unhappy path branch might require
a whole lot of code.

There are cases where a 100% coverage might be adequate
or needed but in most high level business apps there's really
no need and the cost of keeping the coverage to 100% is really high.
In most cases I try to implement a Pareto approach, do the
minimum thing with the highest impact which typically translates
into 80% code coverage and ignoring glue code files.

Unit tests files is still code that you need to maintain so it should
be treated as close to regular code as possible and it should be as simple
and as readable and maintainable as possible.

### Story time: how not to unit test

Some random day I was cursing at my screen and my partner
asked me why I was so mad and since she's not a technical person
I came up with this analogy on the fly to explain what was the problem
and also how I would solve it.
I believe this illustrates really well my unit test mindset:

Let's say we are building a wall lamp that would typically be used inside your house.
The guys who tested this lamp (unit testing) did the unthinkable: they
build a testing house, with foundations, wall framing, ceiling, windows, doors, hardwood floors,
water pipes, heating system, insulation and a working power grid; they then proceeded
to install the lamp that they were testing, and finally flipped the right wall switch to see if
it worked.

How I would have done it differently? I would just reveal the contacts and give them
power by the simplest possible means (without risking my life), like for example:
wiring them to a circuit with power!

My partner hugged me and left feeling sorry for me.

The point of this story is to emphasize that we need to have a clear
mind set when unit testing our code, we need to ensure that we are testing an isolated unit,
that we are testing it in the simplest way that can provide the verifications we
look for, nothing more.

Which brings up my coding mindset: **clarity then simplicity then consistency**
which I will most likely be talking about in a follow up post.

So remember: **do not build a house around the lamp you want to test, simply connect it
to a cable with power and be done with it.**

## Closing

As you can see, there's a lot to love about Jest.

Jest can be considered a composition of a bunch of libraries into a
nice tight package that works out of the box:

[jest](https://mochajs.org/) =
[mocha](https://mochajs.org/) +
[chai](https://www.chaijs.com/) +
[power-assert](https://github.com/power-assert-js/power-assert) +
[sinon](https://sinonjs.org/) +
[rewire](https://github.com/jhnns/rewire) +
[instanbul](https://istanbul.js.org/) +
more

I encourage you to consider it for your next project, it works well for
Nodejs and Browser projects, it works well with plain old Javascript or ES6+ or Typescript,
and it has really nice integrations with [React.js](https://reactjs.org/).

Liked the content? Consider supporting us below.

Want to know more? Consider joining our mailing list below.

[10]: https://jestjs.io
[11]: https://jestjs.io/docs/en/expect
