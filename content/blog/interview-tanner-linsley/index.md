---
title: "Interview with React Query's creator: Tanner Linsley"
date: 2020-12-18
author: franleplant
description:
  "It is a pleasure to bring you a interview with Tanner Linsley,
  React Query creator, open source maintainer, dad, family man,
  religious man and so much more, let’s get to know him and see what he
  has to say about programming, open source and so much more."
tags:
  - react
  - react-query
  - redux
  - data-fetching
  - cache
  - react hooks
---

Welcome to the interview with React-Query's creator Tanner Linsley,
feel free to jump around the questions through the Table of Contents
below or grab a cup of coffee and read on.

## Table of Contents

```toc
to-heading: 3
```

## Introduction

A while back ago I was seeking for something to solve
data fetching pains that me and my team were facing
while building and maintaining about a million lines
of mostly React code.

The way we were managing data fetching was (and partially still is)
by using Redux and manually writing actions, reducers,
selectors, normalization, bookkeeping such as loading and error states
and when/how to trigger those requests, which up to this day is pretty
common way of doing data fetching with React.

The verbosity and lack of guarantees and abstractions
made the process painful, developers dreaded fetching
new data and the PR reviews dragged because everybody
has their own opinion of what an action and a reducer
should look like in theory.

We tried some other [Redux](https://github.com/amplitude/redux-query)
based solutions without
much success because the fundamental problem is that
Redux was not built to do data fetching, you can of
course use it successfully but you there's a lot of unfolded
complexity you need to manage mostly manually.
Granted, with [Redux-Toolkit](https://redux-toolkit.js.org/)
and [React hooks](https://reactjs.org/docs/hooks-intro.html)
things look better but many of
the mentioned problems still stand.

I have explored this in more details in a previous post:
[Stop using Redux for Data Fetching, use this instead](https://nosleepjavascript.com/redux-data-fetching-antipattern)

Since I didn’t find any existing solutions,
I started designing my own and these were
some of the core characteristics it had:

- No concept of the Redux state, actions and reducers, it is just a glorified smart structured Cache
- Data is stored by a user defined cache key
- Users can mutate the cache when performing HTTP mutations (i.e. PUT)
- No duplicated HTTP calls: components should be able to define their data dependencies and the abstraction should take care of de-duping them.
- Fetching new data should require minimal boilerplate
- Automatic bookkeeping: loading, errors, freshness of the data should all be handled automatically
- The interface should be similar to [Apollo Client](https://www.apollographql.com/docs/react/)

And what I have designed and was about to start coding
ended up already existing and being Tanner’s
[react-query](https://react-query.tanstack.com/),
a smart, small, simple, battle tested, typescript based (currently)
library of my dreams that was far beyond my original
design and far beyond what I’ve probably could have made by myself.

And that’s how I feel connected to Tanner,
I like the way he writes code and I share
a lot of the same values,
I like how he approaches open source and
how he always appears as a positive proactive
individual which is super fun to work with.

And here I bring you the interview with
[Tanner Linsley](https://github.com/tannerlinsley),
_react-query_ creator, open source maintainer,
dad, family man, religious man and so much more,
let’s get to know him:

![Tanner Linsley](https://avatars1.githubusercontent.com/u/5580297?s=500)

### For those who might not know you tell us about yourself

- How long have you been programming?

12 years

- Where are you from?

Utah

- What languages and tools have you been working with?

JS, React, HTML, CSS

- How did you learn to program?

I learned all on my own. Trial and error and lots of Google searches.

- Did you get a technical degree?

I partially completed degrees in Audio Engineering
and Web Design / Development from UVU in Utah,
but did not complete them before entering the workforce.

- What companies have you worked on?

I am one of three co-founders at [Nozzle.io](https://nozzle.io/),
which I have worked on for the last 7 years

### Do you have a formal education in computer science? Did you learn about algorithms and data structures? How important for developers do you think it is to cover the basics of computer science?

I do not, but I have invested the necessary
amount of effort over the years to understand
these very important concepts as I go.
I think what’s important is simply learning what
is necessary in the moment to accomplish the
task you have been given.
If that includes learning about several **algorithms
and data structures**, then great!
If that only means learning about one of them,
then that’s also fine. Just keep moving forward.

### How did you come up with the idea for react-query?

The pains that inspired [React Query](https://react-query.tanstack.com/)
were years in the making, even before hooks.
I was a heavy Redux user for a long time,
but when hooks came out, I knew they would
serve as a great API to finally ditch Redux
in favor of something less manual.
I came up with the initial inspiration for
React Query when I saw a library called
[Draqula](https://github.com/vadimdemedes/draqula) was released.
It was almost like a lightweight Apollo
and something clicked about its patterns and style.
I decided to draw from its patterns a bit and React Query was born.

### What tools or techniques would you like to explore next?

I would like to explore serverless technology, 3d rendering, and general framework design.

### What do you think about React?

React is fantastic. The only problem
I see around it right now is the unknown / uncertain
direction the core React team may be taking.
I really hope that the entire ecosystem will
be able to follow, but as of late,
[concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html)
has been proving to be a difficult constraint
for much of the ecosystem to understand and prepare for,
sometimes even resulting in rewrites of entire tools
to satisfy those constraints.
We’ll see what happens. At the time of writing,
[Suspense](https://reactjs.org/docs/concurrent-mode-suspense.html)
for data fetching is still not finalized, but I wish it would be.
The current APIs are just fine. I personally don’t want
to work on React, but with the current component API,
hooks, and suspense, I am pretty happy with where we’ve ended up.

### Who influenced the most your way of programming and problem solving? Did you have any mentors in your programming career?

My co founders, _Derek Perkins_ and _Joe Bergevin_
have had a profound impact on how I think,
design and reason about software engineering
and I dare say I’ve also returned the favor
as we’ve grown together.

The only other prominent mentor I had
early on in my career was the, now niche-famous,
[Kent C Dodds](https://kentcdodds.com/).
He helped me set up my first testing suite
in Angular (believe it or not) and I
watched him give his first lightning
talk at our local meetup (which is also
the very night I met my co founders).

### What piece of code has influenced the most ?

[Preact](https://preactjs.com/) and
[Svelte](https://svelte.dev/) are quite impressive,
[Big Query](https://cloud.google.com/bigquery) by Google is truly unbelievable,
[CrossFilter](https://square.github.io/crossfilter/) is still mind-blowing
even though no one really uses it any longer,
[Kubernetes](https://kubernetes.io/) is…. insane.

### I have covered my [programming principles](https://nosleepjavascript.com/programming-principles/) in the past, what are you programming principles?

- Ergonomic
- Simple
- Forgiving
- Customizable
- Flexible

### Do you think that code can have certain art-like traits?

It’s definitely an expression of creativity, but it’s more
like designing a custom tool. So in the same way
I admire the design of say the [Kreg Jig](https://www.kregtool.com)
(a woodworking tool), I can also admire the design
of a tool. Not because it is beautiful or clean,
but because of the new abilities it gives me.

### Do you find any parallels between programming and other craft-like activities outside software?

Wood working. I think both involve creative problem solving.

> franleplant's note: I have been planing on writing about the many
> parallels I see between woodworking and programming but
> I've never finished finding the right way to put it,
> in fact I have like 5 or 6 written and audio drafts of it,
> let me know if you are interested in my exploring this parallel
> in future posts.

### How does your day look like? How is your life-work balance?

Pre pandemic:

- Up at 5
- Train at 5:30
- Study and day prep
- At work at 6:30
- Startup (Nozzle) and interleaved OSS
- On the train at 4:30
- Home at 5:45
- Family Time
- Family asleep at 10
- Passion work until 11
- Sleep

Post Pandemic:

- Up at 7
- Breakfast, study and day prep
- Desk at 8
- Startup (Nozzle) and interleaved OSS
- Lunch around 12 with the family
- Stop work at 5
- Family Time
- Family asleep at 10
- Passion work until 12/1
- Sleep

I feel like I have a pretty awesome balance
because my family is happy, my work is doing well, and I feel fulfilled.

### I saw you are a proud member of “The Church of Jesus Christ of Latter-day Saints”, what can you tell us about that?

I was raised in a religious family and I am very
grateful for it. I was faced with my own decision
in my youth to either follow or reject what I had
grown up learning about and after losing my father
early on in life and finding peace through Christ
and the teachings of his gospel through the
[Church of Jesus Christ of Latter Day Saints](https://www.churchofjesuschrist.org/),
I decided I wanted to serve a full-time mission for
2 years and share that same gospel with others.
I served as official missionary and representative
of Christ, spending anywhere between 6 weeks and 6
months in various cities and towns across the
state of Santa Catarina in Brazil. It was life
changing and I was super grateful to be able to serve
the people there. I learned to love thousands of people
there as I would my family and aided them in coming to
know the gospel of Christ, developing faith in him,
repenting and witnessing a true change in their hearts
and countenance, being baptized and receiving the gift
of the Holy Ghost. I was even blessed to see many of
those individuals grow closer as families and eventually
be sealed for eternity as a heavenly family unit in one
of Christ’s holy temples. All of this strengthened my
personal testimony as well that the Bible and Book of Mormon
are inspired works of truth, that Christ lived,
was resurrected, and still guides his church today
through Prophets and Apostles, preparing the world for his second coming.

### What is faith to you? What does being religious mean to you?

Faith is the hope and belief of things that we cannot
or will not see, but feel are true. Faith is what
keeps me positive and helps me maintain my relationship
with Christ, in whom my faith is based. Being religious
to me simply means allowing God to prevail in your life.
If you have a desire to do the things he would have you do,
you are definitely being “religious”. It means continuously
repenting and trying to be better to ourselves,
our family, Christ and our Heavenly Father.

### How do your religious values and practices change the way you code, do open source and build software in general?

I believe in charity, the true love of Christ
and this helps me every day to give more
freely of my time to help others, to be
understanding and patient, even when others are not.

### How do you handle your mental health? How do you handle anxiety, overthinking, dreaming about code?

I recognize that it’s okay to burnout every now and then.
If you see it coming, you can prepare and recover more quickly.
I don’t tend to overthink, but I do stress about non-programming
things, mostly around my family’s general well-being and relationships.

### Do you exercise?

Nope. I’ll pay for that later, I’m 100% sure.

### What are the most important soft skills developers should have? (i.e. good oral / written communication, emotional intelligence such as empathy, team working, mentoring, learning, teaching, upwards high level communication, handling anxiety, meditation, etc)

Yes. 😂

### What is like to be a parent? How does that affect your programming?

It’s harder to find as much time as I used to, but it
forces me to prioritize more, learn faster, and ultimately
get the same amount or more done as I did before.
y children also serve as a wonderful inspiration
and motivation for doing my best.

### How do you feel about the massive impact your libraries have in so many companies that use them?

I’m happy that they are able to use them.
I wish I had something to show for it though.
I do have a few sponsors who have graciously
decided to do just that. Thank you
[sponsors](https://github.com/sponsors/tannerlinsley#sponsors)!
But it’s hard to see so many fortune 500
companies use your stuff and never even
really say thanks. I realize that’s the risk
you run with open source software, so I don’t beat myself up about it.

### What do you like about the open source community? How do you handle toxic members in our community?

The open source community is fun! I mostly enjoy talking
and interacting with other maintainers or people who are
equally as stressed or invested as I am. The other people
I love talking with are the genuine fans and helpers
who aren’t necessarily massive impact generators by themselves,
but through their comments and small contributions,
they collectively help so much. Toxic members are not
welcome in my projects or communities. I have no trouble
enforcing a code of conduct and bringing down the
hammer when action needs to be taken. It can be hard,
but I feel it’s important to do this with a loving
attitude as well and welcome those individuals
back when they have had a change of heart.

### How do you balance unpaid work and paid work?

I have a startup that sustains most of my
living expenses. It was hard to get there through.
We had zero-to-little money for a very long time,
but are now doing well. As long as it’s mutually
beneficial to my work, I spend a bit of time on
open source. It then powers our own software,
makes it better, markets our company (usually as a sponsor)
and also gives me more visibility, which I will ultimately
use to further my startups reach (or other projects in the future).

### Free space for Tanner, what would you like to say?

Become a [sponsor on Github](https://github.com/sponsors/tannerlinsley#sponsors)
or better yet **convince your boss/company to become a sponsor!**
If every user of my library donated $1 a month,
I could build so much more and it would ensure
that my libraries stay free and up to date forever.

Buy my [React Query Essentials](https://learn.tanstack.com/) course!

Tell your marketing/SEO team to use [Nozzle.io](https://nozzle.io/).
I’ll give them a personal trial and make it worth their while!

## Closing

Wow! What a treat! Thank you so much Tanner for spending time talking with
me, it is awesome to get to know someone that you have so much things in common
on the other side of the continent.

Make sure you support Tanner's work as well as this blog for more content like this,
and let me know if you'd like more interviews like this in future posts.
