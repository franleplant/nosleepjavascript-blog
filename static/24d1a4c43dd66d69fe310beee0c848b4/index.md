---
title: NoSleep Javascript 2020 in review and plans for 2021
date: "2021-01-02"
author: franleplant
description:
  "Let's talk about the amazing growth we've seen in 2020 and what
  plans we have for 2021. Thank you!"
tags:
  - year in review
  - plans for 2021
  - meta
  - Machine Learning
  - Artificial Intelligence
  - Rust
  - Python
  - React
  - Typescript
---

## TLDR

- 🎉 2020 was a great year, thank your sticking with me!
- On 2021 I want to cover even more topics in the blog:
  - [Rust][10] and [Wasm][11]: love the language and the intersection with the Javascript ecosystem.
  - [ML][12]/[AI][13]: there is so much stuff to do and to learn in this area.
  - Web Technologies: I want to keep covering the tools I use daily in production.
  - Soft Skills and Mental Health for developers: let's be healthy together.
- Let me know what topics are you interested in by [filling the survey](https://forms.gle/8ikNVUFXEb2mT7bS7).

## Table of Contents

```toc
# This code block gets replaced with the TOC
to-heading: 5
```

## Introduction

2020 was a _weird_ year to say the least. We were to stay in our houses
more than usual and that changed our lives.

Besides the bug that most of you are already familiar with, 2020 was a special
year for me because 3 out of 4 members of my family moved abroad. This was
planned for 2020 but the stay-at-home situation delayed it and we had extra opportunities
to spend time together.
It is not the end of the world, we are going to see each other
and there a lot of way we are still connected but it is a massive change from having
a walking-distance between each other. They are happy and so there's no point
in dwelling in much else, but it was definitively a big change.

Besides this small glimpse into my personal life it was a real good year for
**NoSleep Javascript**. The community around it increased substantially and people
have been real good to me, showing support and encouragement messages.
Considering this is a one-man operation it has had pretty good results.
I have also started to be more consistent with my writing
and I believe that I improved a lot in expressing my ideas in a clear and concise way although
I have a long way to go yet.
In fact this second year has ended with net positive income, nothing
life changing but it is still nice to see how this small operation
now is effectively having profits.

> It has been a great journey so far and I hope you stay for the ride
> with me. We have exiting plans for the future!

This post has two purposes:

1. A public statement of the plans for 2021.
2. A personal commitment to do more and never falter.

This post might also interest you if you yourself are building an internet business
like this one.

## A look back at 2020

The community has grown exponentially, we are still small but
at this pace we are going to become huge!.

This is the list of the most successful posts this year:

1. [Essential Docker for Javascript and Front End Developers](https://nosleepjavascript.com/docker-essentials-for-front-end-developers/)
2. [React is slow, what now?](https://nosleepjavascript.com/react-performance/)
3. [Bitbucket is developer hell](https://nosleepjavascript.com/bitbucket-sucks/)
4. [Secrets of a Tech Lead: Programming Principles](https://nosleepjavascript.com/programming-principles/)

If you haven't checked them out be sure to do that, they have valuable content.

## A look forward to 2021

Although I work professionally as a **Senior software developer**
specialised in the Javascript ecosystem _and_ as a **Tech Lead**,
I'm always looking elsewhere, in fact, most of the bigger lessons
I have learnt and which you might find in my posts are from actually
looking outside the Javascript ecosystem and bringing back the
more general knowledge back and becoming an overall better developer.

The plan is for next year to include some of those technologies
into the blog and hopefully we can **extrapolate universal
programming truths** into our day to day work and whatever technology
we use in them.

Let's cover the topics I am planning on covering next year:

## Rust

> I want to talk more about [Rust][10], teaching Rust to front end developers, talking about
> Wasm (Web Assembly) and simply writing more Rust just for fun.

I have been a long time fun of Rust and an early tinkerer of the language, even
before it reached v1 which was a very chaotic epoch.

Since then Rust has consolidated as a real world programming language with revolutionary
guarantees in a niche that has been dominated for a long time
by arguably old and sometimes outdated languages: C and C++.

**WARNING!** I don't have anything against C and C++, please don't take it personally, there are a lot of things
those languages have brought to the table and they are super valuable and they will probably
be for a long long time, BUT, they have widely accepted flaws like exposing themselves easily
to memory attacks and being highly unsafe by default, and they also have some pretty old-fashioned
idioms such as header files instead of regular modules. The build system and package ecosystem
is far from ideal in my humble opinion, one can say a lot of bad stuff about [NPM](https://www.npmjs.com/)
and [crates.io](https://crates.io/) but they
have provided a community standard to publish and share reusable packages across all environments, something
that up to this day is not trivial with C and C++. I know there are solutions, but none of them are standard like
NPM and crates.io are. Additionally, Rust's build system: [cargo](https://doc.rust-lang.org/cargo/),
is a standard tool that replaces all the configurations
you would otherwise need to, sometimes manually, dump into makefiles
and other configuration files of sort. Cargo is a modern solution
for this problem and makes the barrier of entry to Rust almost null in that respect.
Finally, Rust acknowledges
that in order to be productive programmers
need to high level constructs such as `map`, `Option`, mutability helpers, and so much more.

Rust has a lot of virtues, briefly:

- it is a low level language with high level APIs.
- it does a lot of help you make programs that are _safe_.
- the community is outstandingly good both with hard skills (technicals) and soft skills (management, communication, problem resolution).
- a holistic approach towards building a programming language: Rust understand that a programming language is so much more than the syntax and the compiler, it involves build systems, package repositories, installers, configuration management, good quality packages, etc.
- is statically typed.

Thanks to learning Rust early I have understood, probably the hard way, a lot about Statically Typed
languages, idioms, techniques, patterns, etc; which I extrapolated without much effort to Typescript
when I started using it professionally. Additionally I finally
understood the benefit of statically typed languages with Rust, the experience of getting
the compiler to help you find the problems with your program is a humbling and enlightening
that if you endure (sometimes it can be frustrating) it will teach you a lot.

In fact, Rust is the reason I am all in on [Typescript](https://www.typescriptlang.org/) and have been for the past couple of years even when
some of the Javascript community still has [Java](https://www.java.com/en/) PTSD
(and cargo cult to be honest) about what type systems look
and how they are used. To those still reluctant about Typescript I tell you:

> There is _so_ much more to Statically Typed languages than what Java has to offer.

**IMPORTANT:** I do not hate Java, in fact I respect it a lot, I have felt foreign when looking at production grade
Java code, because of its natural verbosity and because of common idioms used but my experience might be biased, so I do
keep and open mind and I do acknowledge that Java in 2020 is a completely different beast than what Java was 2 or 3 years ago.

### Web Assembly and Rust

Rust has one of the best supports for Web Assembly and it has a whole team dedicated to it.
Wasm can have a massive impact in the Javascript ecosystem, just think of it, in both Node.js
and front end applications we are using Javascript to build compilers, macro systems, linkers (webpack),
linters and a lot of code that usually is built with Statically Typed Compiled languages and one of the
main reasons for that is performance. Javascript is really fast and has gotten really fast in the last few years
but still there are things that it will be naturally slower than Statically Typed Compiled and build-time optimized
languages such as Rust so it is natural to think about slowly migrating stuff like
[Babel](https://babeljs.io/), Typescript,
[eslint](https://eslint.org/) and
[webpack](https://webpack.js.org/)
to Rust for example.

Imagine reducing the times it takes to compile for your large scale production application when using webpack? Isn't that
a big win?

Well, in any case Rust has lot of tooling (although a little bit immature last time I checked) to seamlessly integrate
Wasm code into Node.js, webpack, and front end applications in general, so once this tooling is mature I expect
the integration to be quite easy and the only real barrier will be Rust it self. So we might as well be ahead of
the curve and start getting really good with Rust!

> Rust has a great future ahead but learning it can be frustrating depending on your background,
> and I would love to help the community with that learning path since I myself have already
> been there and done that.

## Machine Learning and Artificial Intelligence

ML and AI are becoming widely used techniques to solve a wide variety of problems,
an although right now we see them in a lot of big companies as part of their main products
I expect that while the technology advances we are going to see more and more day to day
applications in customer support bots or a smarter searches and with things we currently
don't even imagine.

I do expect ML/AI to have even more impact and be life-changing in the near future as technology
evolves and we learn more about what is possible with them.

I have been reading two books this year and I am planning on finishing them and reading
more. A lot of the ML/AI ecosystem is based around [Python](https://www.python.org/)
and I really enjoy working with one of the most loved and used languages in the world,
so there's a bonus point there too. These are the books I am currently going through:

- [Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems](https://amzn.to/3lS4A1i)
- [Deep Learning with Python](https://amzn.to/2K4nAMK)

I would love to cover topics related to ML/AI in this blog and also to have an excuse
to learn more about them in the way.

## Soft skills and Mental health (for developers)

The idea of software developers being black boxed hermits that accept
coffee, pizza and requirements as inputs and they output working software
is an outdated one that I believe is detrimental to us developers.

On 2021 I want to break the spell and talk about Soft Skills and Mental Health for developers.

### Soft skills

Developers are far from hermits, although they do need to have a good chunk of their time
available for coding with deep concentration and focus they also need to communicate well
with others, not only other developers but superiors, underlings, people from other areas
such as HR, management, stakeholders, QA, graphics designers, etc.

This type of communication
requires a lot of soft skills to be efficient, effective and productive, so we, as developers
need to be socially capable, we need to be able to express ideas concisely to non technical people,
we need to understand how technical decisions impact the business goals and vice versa, we need to
be emotionally intelligent to understand other people and their swinging moods, we need to be empathetical
to other's emotions and stages in their lives.

> Developers can no longer be awkward geeky people, we need to be regular people with technical skills,
> we need to understand ourselves (see next section) and others, understand how social interactions flow
> and we can navigate this complicated space. Nothing too fancy, it is just another problem space we need
> to figure out which is something we do on a daily basis.

The main idea is to write about effective communication, [emotional intelligence](https://amzn.to/37OaEmm),
empathy and any other soft skills
required for developers while understanding that there are different people with different backgrounds that have
different experiences being socially able in the workplace.

I believe that in the end this will not only impact your work life but it will also impact your personal life like
it did to me.

### Mental health

If _soft skills_ refer to **how we handle ourselves with other people and their emotions**, Mental health
is all about **us and how we handle ourselves with and within ourselves**.

Developers sit down right in the junction of [neurosis](https://en.wikipedia.org/wiki/Neurosis)
(we are over thinkers),
[anxiety](https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961)
(am I going to be able to pull this off?) and
stress (we need this work finished by tomorrow) and this situation is a severe attack
to our mental health. Anxiety is a pervasive sickness in the modern world but combined with stress and
the dangerous neurosis can mutate into much worse symptoms like panic attacks and
elevated anxiety periods.

This is why before understanding other people
we need to understand ourselves and our emotions ([emotional intelligence](https://amzn.to/37OaEmm)),
we need to be **observers** of our own mind and have the clarity to auto regulate our selves,
we need to be able to say _"that's enough overthinking for today, tomorrow I will be able to solve it"_
and sleep with a quiet mind.

These things are not only problems of developers but I believe that since our primarily
task is to _think_ that we are particularly susceptible to these problems.

Fortunately there are a lot of both old and new tools to deal with these situations
and the society as a whole is much more comprehensive and understanding and open
about them than it used to be.

The core idea is to be able to help others with my own experiences with this subject,
with feeling sad, anxious, depressed, etc. and what tools I have used to deal with them,
and in the way acknowledging that you on the other side are not the only one with these problems.

One particular subject I am super excited to talk
about is [stoicism](https://en.wikipedia.org/wiki/Stoicism),
it is philosophy and has helped me a lot to cope with these
problems and I believe they can help other people too.

## Javascript and web technologies

On 2020 I have cover a lot of topics related to Javascript and web technologies,
mainly because that's what I do on a day to day basis and there are a lot of things
I need to fix and learn so there's a constant flow of information I can share
in the blog that comes out from my experiences in production grade applications.
On 2021 I want to keep my commitment with web technologies and provide free useful
tools to the community.
I'm also planning on launching paid courses, mentorship and consultancy products
to expand the reaches of this humble enterprise.

## Closing

🎉 THANK YOU! 🎉

Thank you so much for sticking with me and my project,
I couldn't be more happier and excited for the future.

Let me know in the reddit discussion what are you most excited about on 2021.

Or even better, [fill this survey](https://forms.gle/8ikNVUFXEb2mT7bS7)
and let me know what are you interested in
for 2021.

<hr/>

Like the content? Consider subscribing, buying me a coffee or even becoming a Patreon below.

[10]: https://www.rust-lang.org/
[11]: https://webassembly.org/
[12]: https://en.wikipedia.org/wiki/Machine_learning
[13]: https://en.wikipedia.org/wiki/Artificial_intelligence
