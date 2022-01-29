---
title: "Introducing Carolus: decentralized, uncensorable and on-chain newspaper"
date: 2022-01-29
author: franleplant
description:
  "Introducing ibridge, a tiny, typesafe, promise-based library
  for bidirectional and secure iframe communication."
tags:
  - ethereum
  - typescript
  - javascript
  - polygon
---

For the past couple of weeks I have been playing around with the idea of news
that are stored completely on-chain to make them uneditable and uncensorable.

Carolus is the result of that experimentation and I expect it to be just one of many examples
of [web3][15] [dapps][16] that are non-financial applications.

At its core, Carolus is really simple: it is a place where journalists, archivers and amateurs
can publish news that won't be affected by the well known problems that
traditional and centralized media suffer.

The news piece is modeled as an [ERC-721][17] compliant NFT that can be [traded in OpenSea][20].
Out of the box, it serves as a way to monetize content but also as a way for collectors
to collect news that mean something for them and that they simply want to be the guardians of.

Creators pay a flat fee for minting (publishing) news. Those fees go to the **Carolus Treasury**.

Other models of storage are possible but the purest, more secure but most expensive is fully on-chain.
To avoid paying obscene fees I chose a [Layer2 scaling solution][18]: [Polygon][20], which is one of the most important
L2 currently and has a great future.

### What if the news are _objectively_ harmful?

> I won't dwell too much what this actually means in this post, let me know if you are interested in exploring this topic further.

Carolus lets the users vote up or down a given news piece.
If the ratio of dislikes to likes is more than 10 then the news can be censured by a moderator.

The exact parameters of this functionality will be something I would expect many variants will
exist and that a decent amount of exploration and experimentation can be made.
I choose a really simple model that would give power to the community.

In this beta version the moderator will be a wallet controlled by an individual (me) but
in future versions I see a [DAO][21] being formed that will both have moderation roles and will
decide what to do with the Treasury.

As this is still a beta product or an experiment even I am leaving an emergency mechanism to
remove _harmful_ content. I can only promise I will use it only to remove really bad things and never to
censure someones opinion. Eventually this kill switch could be removed altogether.

### Forking

In future iterations I plan to add a _forking_ functionality.
If the controlling moderator (individual or DAO) starts censoring more than its fair share,
it should be really straight forward to _fork_ (copy and create a new instance) the contract,
deploy a new front-end and avoid the censorship altogether.

This would include concrete instructions, scripts and general documentation to make this mechanism as easy as possible.

### Carolus Treasury

In this early beta project the treasury will be used to finance the development of Carolus,
if it becomes large enough I plan to release a more comprehensive strategy to use it for the common good.

### Why the name: Carolus?

[Johann Carolus][20] was the publisher of the first newspaper. Carolus is probably one of the first web3 newspaper.

### Closing

All the code is open source: [contract][12], [api][13] and [client][14].

[11]: https://opensea.io/assets/matic/0xcc20821468742eaa73e0283bde8f20d9b7c81ab8
[12]: https://github.com/franleplant/carolus_contracts
[13]: https://github.com/franleplant/carolus_api
[14]: https://github.com/franleplant/carolus_web
[15]: https://ethereum.org/en/developers/docs/web2-vs-web3/
[16]: https://ethereum.org/en/dapps/#what-are-dapps
[17]: https://eips.ethereum.org/EIPS/eip-721
[18]: https://ethereum.org/en/developers/docs/scaling/layer-2-rollups/
[19]: https://polygon.technology
[20]: https://en.wikipedia.org/wiki/Johann_Carolus
[21]: https://ethereum.org/en/dao/
