---
title: "Secrets of a Tech Lead: Programming Principles"
date: "2020-11-27"
author: franleplant
description: "
  Let's cover the main programming principles I have developed. They act as a Technical Compass
  that help me navigate all the decision I have to make constantly; ranging from the high level architectural to the low
  level naming, function structures, etc.
"
tags:
  - Tech Lead
  - Architect
  - Principles
  - clarity
  - simplicity
  - consistency
  - reading code
---

Let's talk about one of the core guiding principles I use as a
developer and as a Tech Lead
when designing solutions and architectures, when programming
and when reviewing others code, which I find
myself doing more and more as I move forward in my career.

These sort of principles are of the family of [Ray Dalio's principles](https://amzn.to/33fhxf6)
but applied to programming, I might write a book about it eventually, who knows.

These have have a massive impact in my career as a programmer and have
enabled me to get a more holistic approach to designing software that
ultimately were one of the main reasons I was able to get a Tech Lead job.

With these principles in mind I have a **technical compass**
that helps me navigate all the decision making I need to do
all the time; ranging from the high level architectural to the low
level naming, function structures, etc.

So I present to you one of the most important principles guiding my work:

## Clarity then Simplicity then Consistency

Let's unpack it a little bit, every word counts.

Disclaimers:

1. The program first and foremost **needs to work**, needs to do what it was intended to,
   needs to serve its purpose, then and only then we can start worrying about these principles.
2. There is a great deal of **subjectivity** in these principles,
   we really don't want to forget about that, but, once you have worked in enough projects
   you start realizing that programs have a community and a culture around it, be that
   an **open source community** or the **tech culture of the company** inside which the software
   is developed. In this context these principles, such as **Clarity**, will
   have its own concrete meanings. It also is important to reflect on what it means
   to be clear for a given context and propose potential improvements if possible, which will
   be also highly subjective. The important conclusion is, yes, these things are subjective, but
   we do not develop software in a vacuum and so **they will have more concrete meanings in the
   context where we develop software.**

## Clarity

Programming can be thought of as a way of expressing ideas in a formal language,
in that sense we could even go as far as thinking **programming as a weird form of art
or even poetry**, there are always those pieces of code that touch our hearts, and
so long as we have the main goal of software in mind: solving problems, I believe
is fine to take this idea of beauty in.

Code is created with two main purposes:

1. to tell machines what do,
2. to communicate ideas with other people.

If we don't express our **ideas correctly** the machine will yield at us, and
if we don't express the **right ideas** then other forms of validations should yield at us i.e. unit tests.

The second part is the one where **Clarity** becomes important.

> **Code should be easy to understand by our team mates.**

Code should be as easy to understand as possible for our team mates
and humans in general, that's in fact the **main purpose of programming languages**,
to go closer to humans and abstract away the machine language.

How to improve **Clarity**:

- identify and use the main **concepts** in your domain i.e. `nodes`, `users`, `cars`, `contracts`, `unverifiedUser`.
- naming is important, take your time finding the right names.
- are you sure about that one liner? Maybe break it into multiple lines?
- read your code entirely after "finishing it" i.e. **review your own PRs**.
- identify hard to understand sections
- ask: how can I make them better?
- if you can then do that
- if you cannot then comment the complexity away

Sometimes some piece of code might be reflecting something inherently
difficult to understand, so there's no easy way out of that and so
you should add comments to those sections.

**Concepts are a fundamental idea in programming**, we never deal with
some variable or some function, we deal with **semantic concepts** and
operations that have strong meanings in the **domain** we are working.
A good program will use strong concepts and thus will have good
naming across the board. **Make sure you get the concepts right**.

Modern software development might involve millions of lines of code, across
multiple programming languages, covering complex business rules, we really
don't want to make this already complicated artifact anymore and so
**Clarity becomes a tool for managing complexity**.

An example, I see a lot of newbie programmers abuse the indexing operation in a tight chain.

Let's say we have a contrived data structure as follows:

```typescript
interface IUsersColors {
  [userId: number]: Array<[hex: string, name: string]>
}
```

In my experience, new programmers tend to do:

```typescript
// access the "i" favourite color hex
setColor(usersColors[userId][i][0]);
```

But i found the following more clear albeit longer.

```typescript
const selectedUserColors = usersColors[userId];
const color = selectedUserColors[i];
const colorHex = color[0];
setColor(colorHex);
```

This is my **subjective** judging of the code, perhaps
in your context and for you and your team mates the
first case is clearer. Not one example
is wrong, but the point is that given our context,
we should go for the clearest solution.

## Simplicity

Note how we say Clarity **then** Simplicity.
This means that **Clarity** is our first goal and our second
goal is **Simplicity** but by maximising **Simplicity** we should
never hurt **Clarity**.

**Simplicity** is related to the [KISS](https://en.wikipedia.org/wiki/KISS_principle) principle (Keep it simple stupid).
We should avoid adding more complexity to our code without good reasons.
Always **start with the simplest solution that solves the problem** and then add complexity
only and when needed.

Feel free to use your subjective judgement to look in the future and find a balance
between the current iteration's simplicity and what you will probably need in the future.

We must account for subjectivity,
context and experience but always keeping in mind the question:
**Can I make this solution simpler?**.

It is not going to hurt you, in fact,
if the answer is "no, because of reasons a, b and c" then you will feel more
comfortable and assertive about the code you are making.

To achieve **Simplicity**:

- Always start from a base case of the **simplest solution**, you might want to implement it or not.
- write code with **Simplicity** in mind, always choose the **simplest solution** and complicate when needed.
- combine the **Simplicity** mind set with your experience and find balance between the two.
- review the results: is this the simplest implementation?
- add fixes if necessary, document if the complexity cannot be controlled.

## Consistency

And finally we have **Consistency**.

We should never for the sake of **Consistency** sacrifice Clarity or Simplicity.
I have seen a lot of PRs where the reason for doing things in this
unclear or complicated way was simply because other parts of the codebase were
doing it like so. I completely disagree with this reasoning.

Code and tools and our understanding of them evolve constantly, that thing
you are trying to be consistent against might using some older idioms or tools
that have been superseded by others and that can be expressed clearer and simpler.

It is also unreasonable, even more with larger codebases, to expect an entire codebase
to move to these new idioms and tools at once, because that's not how software evolves,
we write software piece by piece, little by little, so differences between newer and older
parts are fine, track the old parts, add `TODO` and do them eventually.

**Consistency** is desired because **humans are good with familiar patterns** so
this contributes in how easy to navigate and understand your codebase is, for newcomers
and old timers alike.

## Conclusion

There are no magical recipes for achieving these goals
and the result of maximising these qualities might look
different depending on the team, tech culture, language, etc;
nevertheless we should strive to achieve some sort of success
maximising them. Why?

> **Because clear, simple and consistent code is easy to understand**

And if your codebase is easier to understand then:

- **we can spot errors and bugs more easy and fix them**
- **we can change or add new features with more ease**
- more generally, **we can maintain our codebase more easily**
- **faster and easier developer on-boarding**

And this all translates into **faster product delivery times** for your company
plus in the way we probably would've
create some pretty amazing and beautiful pieces of code. Everybody wins.

What are your principles regarding programming? What compass do
you use in your everyday decision making? Let me know!.

<hr/>

Like the content? Consider subscribing, buying me a coffee or even becoming a Patreon below.
