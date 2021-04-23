# Adventures with OAuth2 and OpenId

- how to use an OpenId auth provider in a microservice architecture?
- how OpenId connect works?
- how to integrate OpenId auth with browser authentications
- from zero to hero OAuth / OpenId
- using openid connect to integrate authn with microfrontend apps.
- implementing SSO via openId
- understanding OpenId Connect by building an app
- Implementing SSO with Google OpenId Connect
- with the flow diagram in place I can generate excercies with "hidden" answers

  - how would you implement a redirection to the original page in myapp.com/whatever?
  - what about security considerations?

    https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc
    https://developers.google.com/identity/protocols/oauth2/openid-connect#python

At my day job we are integrating with an identify and authentication provider
that implements the OAuth2 and OpenId standars and these are some of the things I learned
in the way.

The OAuth2 official IEEE spec is detailed but dense and hard to navigate.

https://tools.ietf.org/html/rfc6749

Is a fantastic document with detailed explanations of the low level details of
OAuth2 (NOT and its OpenId Addition) but as a first introduction it tends to be
not beginer friendly.

Once you are more familiar with the basic concepts you will be able to use it
as an ultimate reference. It is still hard to search over but with due patience you will find
the answer.

It is best to start with higher level overviews.
This one in particular is a pretty decent and quick one.

https://www.youtube.com/watch?v=996OiexHze0

Learn high level concepts first, it might be all you need.

Learning the key high level concepts is important and might be
enough if you Identity provider uses familiar and standard tooling
and your target platform (i.e. nodejs, Java, etc) has good library support.

Let's go over the key concepts here:

OAuth2 is a protocol (a set of conventions that at this point are encoded into frameworks)
for Authorization (does the user X has access to resource Y?).

Together with the OpenId addition, they support Authorization (who is this user?).

- allowing the "Signup with Google" in your website (there are a lot of open id providers such as twitter, facebook, github, microsfot, etc).
- maintain a standard api for identity providers inside a private microservice mesh (like we do in my company).
- allowing 3rd party applications (clients in OAuth lingo) to access user owned resources in other systems (such as google profile, facebook friends, twitter feed, etc).
- allowing 3rd party apps to agregate data and / or provide custom functionality on top of resources owned by other sites (resource servers in OAauth lingo).

If you ever used a custom twitter client then that used OAauth2 and OpenId to

- ensure your twitter identity
- to tell twitter you allow this other client to access your personal information such as followers, following, feeds, messages, etc.

This is a good segway to talk about roles.

Let's follow with the Twitter Client example.

- resource owner: User (you). The resources in this case will be followers, following, feeds, private messages, profile, etc.
- resource server: Twitter, where are those resources stored/kept.
- client: the Custom Twitter Client, any 3rd party app that wants to access resources by the resource owner.
- authorization server: Twitter, this is the server that stores and validates the user's identity and manages authorization for the resources. When using Oauth2 + OpenId then this server also provides authentication.

Notice how in this simple-ish example the Resource Server and the Authorization Server are the same server, but in practice
they might be different.

Note on authroization vs authentication. This is a rather confusing aspect of OAuth2 + OpenId, so let me try to
give you the rule of thumb of how I store this in my mind:

> the authorization server is really the auth server because it can provide both the Identity validation of the user
> and also issue resource authorizations for particular sets of resources according to what the user permits.

At this point is fine, at a high level, to think that the Auth Server has the two main responsabilitie sof

- providing identity authentication mechanism (username / password) for 3rd parties
- providing user-to-client authorization over particular resources (i.e. private messages and profile, the user might authorize the client to access neither, one or both depending on different setup factors).

Also, note that you might use OAuth2 + OpenId only for the authentication part, this
is in fact how we are using this internally. We rely on these standard tools and interfaces
to provide a centralized and shared authentication provider for a variety of internal products
that need to interact.

Of course, in this internal case, you could replace all these fancy things with your own
custom adhoc authentication mechanism but it is not a bad idea to rely on the industries best
practices and tooling for speed of delivery and robustness.

There are a variety of "flows" to accomplish these goals, for now we are going to cover
the typical web apps use (this does not apply to serverless apps though). Mobile apps also use
the PCKE flow.

So the main flow we are going to cover is the "Authorization Code" flow.

Client (my super twietter client)

---> wants to authenticate User X
---> redirects to Twitter OAuth url (TODO)

Twitter Open Id

-> asks user/password
-> redirects to Client/callback with authorizatio_code=abc

Client/callback authorization_code=abc

--> reads authorization_code and Backchannel exchanges it with Twitter for a proper Access_Token and Refresh Token.
--> store session cookies related to those tokens (i.e. jwt)
--> done!

Notice that there are actually a minimum of two http redirects in this flow
via `302 ...`. TODO node code.
The first one goes form the client to the twitter auth page and the second one goes from
the twitter auth page to the client callback.

But what happens if the auth mechanism happend while the user was trying to access
a protected resource and was http redirected to the login page? then you guesse!
more http redirects.

Here is a very standard flow

1- unauthemticated user access mytwitterclient.com/twit/123
2- the client redirects to mytwitterclient/login?back=/twit/123
3- client stores the `back` param somehow, like in a cookie.
4- client redirects to `twitter.com/oauth/authorize?callback=mytwitterclient.com/login/callback` TODO
5- user enters username/password (happy path)
6- twitter redirects to `mytwitterclient.com/login/callbac?authorization_code=abc`
7- client exchanges auth code for auth tokens, stores them in a session, sets a cookie.
8- client redirects back to `mytwitterclient.com/twit/123`

Wow! that was a long one! As you can see there are actually 4 redirects that can typically happen
in a full blown open ide connect integration. These things are simple so you shoudn;t be afraid of them.

TODO show simple code.

Why do we need the authorization code?

The authorization_code acts like a temporary short lived key to tell a given
client that the user has authenticated correctly.
That key, along with the client crendentials and some other validation params
will be exchanged for the proper access tokens through a server to server communication,
called the `back channel` in oatuh ling. This back channel is thought like secure since
there are client authentication and further validations.

So why just not just return the access tokens in the callback?

TODO investigate

Using openid-client nodejs lib

Show pre convered concepts in the lib's code.

So at this point you have a pretty fundamental understanding of how this auth flow works,
be sure to read the official RFC and Okta's docs for more details.

If you want to hear more from me please subscribe to my newsletter.
