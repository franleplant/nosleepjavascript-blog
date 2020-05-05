---
title: How to write CHANGELOGs
date: 2020-05-20
author: franleplant
description:
  "Whether you are working on an open source library or an internal private library you
should master the art of CHANGELOG. This is a fundamental not-code part maintaining
libraries and enables consumers to understand what they can expect when moving
from version to version."
tags:
  - Open Source
  - NodeJS
  - library
  - NPM
  - Javascript
  - Typescript
  - package
  - private npm registry
---

Whether you are working on an open source library or an internal private library you
should master the art of _CHANGELOG_.

This is a fundamental not-coding part of maintaining
libraries and enables consumers to understand what they can expect when moving
from version to version.

This is a great resource to share with your team mates inside your company so
hopefully you can all have a common ground when maintaining internal libraries.

## TLDR: How to write a CHANGELOG

Keep in mind:

- your primary audience are _humans that consume your library_, think of them when writing the CHANGELOG.
- it is sorted by last entry first (ascending order)
- each entry has a date and a version number
- follow Semver
- each entry should answer:
  - what was added, changed, deprecated, removed, fixed, etc
  - is there any breaking changes?
  - Nice to have: any dependencies updates (dependencies are becoming more and more complicated so documenting any important changes here might give your consumers clues about any unexpected behaviours)

[Keep a CHANGELOG](https://keepachangelog.com/en/0.3.0/) is a great standard you can follow,
make sure to read their docs thoroughly but here is an example following their suggested
format.

Have in mind that this is a template, not all subsections `###` need to be added.
`Component X` refers to software component, probably identify it by its directory path
or by its name or by any non-abiguous id that is obvious to consumers.
`**BREAKING**` needs to be added to any changes introduced that are not backwards compatible,
make sure to follow Semver (see next section).

```markdown:title=CHANGELOG.md
## [Unrelease]

All changes that will be added in the next version

## [1.0.0] - 2020-05-04

### Added

- New feature A in component B
- ...

### Changed

- **BREAKING** Component C now does thing D
- ...

### Removed

- **BREAKING** Component E has been removed

### Depreacted

- Component F has been depreacted and will be removed in next major release

### Fixed

- Component G now handles scenario X correctly by doing thing Y

### Security

- Security vulnerability in Component H has been fixed (Probably add more details.)
```

## Real wolrd scenarios

- [React](https://github.com/facebook/react/blob/master/CHANGELOG.md)
- [Moment.js](https://github.com/olivierlacan/metaself/blob/master/bower_components/momentjs/CHANGELOG.md)
- [Jest](https://github.com/facebook/jest/blob/master/CHANGELOG.md)

## Follow [Semver](https://semver.org/)

Unless you have very strong reasons and opinions for not
following Semver I suggest you follow it. It is a great
standard tool used across a variety of ecosystems with
clear semantics and documentation.

From https://semver.org

```markdown
Given a version number MAJOR.MINOR.PATCH, increment the:

MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards compatible manner, and
PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.
```

The combination of properly implemented Semver and properly
implemented CHANGELOG is a very powerful solution for maintaing
libraries.

## Closing

For mid to large sized companies it is very common to
maintain internal libraries (i.e. npm packages for Javascript
applications), so it is of the outmost importance that
we manage them correctly since, although the audience is reduced,
they behave very close to the Open Source model.

Most of the things we go through this post have been observed
from the Open Source world, which brings me to a bonus conclusion:
**_You can use the Open Source model as a role model for your company's internal ecosystem_**

You can explore this concept in the following recommended book:

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=franleplant-20&language=en_US&marketplace=amazon&region=US&placement=B0026OR3LM&asins=B0026OR3LM&linkId=a31f250867360780f8710bb9d8475b67&show_border=true&link_opens_in_new_window=true"></iframe>

<div id="amzn-assoc-ad-388ed262-d0bf-4cf6-8458-5b5d84d8a3cd"></div><script async src="https://z-na.associates-amazon.com/onetag/v2?MarketPlace=US&instanceId=388ed262-d0bf-4cf6-8458-5b5d84d8a3cd"></script>
