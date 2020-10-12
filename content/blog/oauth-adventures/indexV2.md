- Using OpenId Connect to implement Single Sign On across multiple applications
- OpenId Connect as an authentication provider in a Micro Service Architecture
- OpenId Connect Identity provider for a Single Sign On experience across multiple apps.
- Using JWT as self contained sessions in a microservice architecture

* Introduction
* talk about the core concepts of OAuth2 / OpenId Connect
  - nice diagram ilustrations
* talk about why this content might be useful
  - if you want to use a third party identity provider for your apps
  - if you have a microservice architecture and the identity provider implements OpenId
  - if you have to use a central identity provider in a multy company integrated architecture
* cover the objectives of the practical excercise
  - show the complete sequence diagram of all the back and forth there is to stablish the final auth session
* go over the code, maybe show gifs or images, show the architecture, show how we use familiar concepts from passport and the rest of the world.
* links to the complementary material.

TODO talk about certified toolking
TODO talk about security

TODO add that each post has a metaFooter like those murky pages that add a bunch of "keywords"
at the end for better SEO

## Introduction

Let's build the basic boilerplate for an OpenId Connect based Authentication mechanism
for our Node.js / Typescript apps that supports SSO (Single Sign On experience) out of the box
and that will fit very well with a microservice architecture with no statefulness added.

This sort of setup is great for microservice architectures because

- it provides a clear authentication (and authorization) interfaces based on industries best practices
- it works well with self contained auth tokens that can be used for communications across microservices
- it requires no extra stateful layers (such as session databases)
- it can be easily expanded to make up a Single Sign on experience across multiple apps and even across companies.

## So what is OpenId Connect?

> OpenId Connect (a.k.a oidc) is an _interoperable authentication protocol_ based on the OAuth 2.0 family of specifications.
> [src][14]

The line between OpenId and OAuth is blurry in practice and in learning material in the web the concepts
are sometimes a mix and match of both.

I like to think of OpenId and OAuth as a set of specifications that
define standard APIs for Authentication and Authorization (respectively actually).

> OpenID Connect lets developers authenticate their users across websites and
> apps without having to own and manage password files. For the app builder,
> it provides a secure verifiable, answer to the question:
> “What is the identity of the person currently using the browser or native app that is connected to me?”
> [src][14]

This has enabled 3rd party Authentication providers and the always present "Log In with X"
you see around the web, such Auth providers include Google (the one we use in the example code),
Auth0, Microsoft, Okta, among many others. [See certified providers here][15]

Additionally, OpenId Connect can be used in enterprise settings like shared Auth and Identity provider
across many apps (think about Microsoft active directory, or Okta's service)
providing a Single Sign On experience; and also as a way of structuring a microservice
architecture with multiple "clients" (OAuth lingo for applications that interact with Auth Servers).

If you want to go down the rabbit hole and learn more check these resources out

- [Okta's OAuth and OpenId in plain english][13]
- [Okta's Ilustrated Guide to Oauth and OpenId Connect][10]
- [IEEE OAuth 2.0 RFC][12] (it is dense but has all the details)

Here is a nice ilustration of one of the most common ways of Authenticating with
OAuth 2.0 and OpenId Connect

IMAGE TODO

> Source: heavily inspired by this [video][13]

## That's fine, but why should I care?

OAuth 2.0 and oidc have become ever present in the modern application development landscape and
although the tooling is really good and hides a lot of details chances are that you will still require
a decent high level understanding of what you are doing.

This applies both to already existing applications and to the practice of designing and creating new
applications with modern architectures such as microservice oriented one.

I will try to find the sweetspot between comprehensive and high level coverage, let's hope
that I can achieve that.

## Show me the code!

Let's build a simple application that uses OAuth 2.0 and oidc. The idea is to show

- how to use 3rd party Auth and Identity providers
- how to integrate those mechanisms with something familar to the web platform: session cookies!
- how to easily manage sessions in the Request-Response web app cycle (no libs here!)
- how the session can be structured to be self contained for a stateless session management
- security implications
- how this application can be used to achieve SSO (single sign on experience across multiple apps)

You can check the full code [here][todo].

### A note on tooling

I have found a nice certified NodeJs library called [openid-client][16], it is a nice library with
decent Typescript support that makes it very easy to integrate Identity providers.

Another really cool thing about OpenId Connect is the concept of [Discovery][17] which
basically means that although there are a bunch of parameters involved in setting up a proper
OAuth / OpenId connect flow like multiple urls, encyrption algorithms, public keys to verify tokens, etc;
you really just need to use one url and, if the client library you are using supports it, the client will
use this Discovery mechanism to look for a [Discovery Document][18] that contains all the necessary parameters
and you are good to go!. `openid-client` supports this!.

### Step 1: What are we building?

We are going to use a top-down approach, so first we are going to cover how the app
works and the "dev-user" side of things and in later steps we are going to cover
the "lib" side of things where we implement the proper express middleware, session management,
cookie storage, etc.

The app is really simple, it has two content routes

- `/` or the home where we show the "login" button.
- `/private` were we display some information about the currently logged in user. If there is no user logged in we simply display an error.

IMAGES or GIFS TODO

There are three additional routes that have to do with the OAuth flow
that we will cover later.

TODO Maybe show the code in `index.ts` ?

### Step 2: Log In

- later we will show the entire auth flow with all the redirects
- for now we want to set up the login so that it uses a 3rd party Identity provider, in this case: Google.
- show images or gifs of use logging in
- show code for
  - issuer and client creation
  - /auth/login, /auth/callback and what we are doing
  - talk about tokens
- at this point we are logged in and we can see the user identity self contained in the tokenSet we got from Google
- what happens if we refresh? we are no longer logged in ===> segway to the next step

### Step 3: Persistent Session

- there are several ways of handling sessios but in all cases it all boils down to persisting a session across requests and identifyng requests with one or cero sessions.
- sessions are most commonly persisted in the form of a long lived cookie in the browser
- sessions cookie content might be a session id that is mapped to the session object in a database server side (stateful solution)
- or the content might be the entire session object (stateless), this is a simpler approac that will work for us and that has its merits in the microservice architecture.
- talk about what we are going to stor ein the cookie and why
- talk about when we write and when we read
- talk about when we serialize and when we deserialize
- talk about refreshing tokens

* show persistent session across refreshes
* show the code

### Step 4: putting it all together

Show the `auth` dir code and how we package it in a set of nice midldewares
similar to what passport.js does.

### Bonus: the complete sequence diagram of oidc authentication

Most of the time you will see this sequence diagram simplified, but I wanted
to show you in full details all the steps and http redirects there are inside this
transactios, most of the time you won't need to worry about these but I think
it is a nice excercise to have it detailed fully like this:

TODO IMAGE

- [10]: https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc
- [11]: https://developers.google.com/identity/protocols/oauth2/openid-connect
- [12]: https://tools.ietf.org/html/rfc6749
- [13]: https://www.youtube.com/watch?v=996OiexHze0
- [14]: https://openid.net/connect/faq/
- [15]: https://openid.net/certification/
- [16]: https://github.com/panva/node-openid-client
- [17]: https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata
- [18]: https://developers.google.com/identity/protocols/oauth2/openid-connect#discovery
