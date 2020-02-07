---
author: franleplant
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---


### Code is not business rules

One of the many problem with scrum and agile development
is that it encourages a lot of bad practices, one of them
is pseudo encoding business logic in stories and in oral
discussions (because people before processes bro),
which of course might be just enough to develop
the feature you want to build but what happens when you need
to rewrite that feature or when you need to migrate said feature
to new technologies? Bingo, you dont have the necessary
business knowledge to build them so you tell developers to 
look at old code and copy it. Guess what, that wont go
as planned because SOURCE CODE IS NOT THE SOURCE OF TRUTH FOR
BUSINESS LOGIC.

If there has been enough staff cycling out you will end up
with virtually no knowledge of your business rules and why is that?
because you use scrum a little bit too much instead of using
good old software development practices of 
- Gathering Requirements
- Analysing the problem
- Designing a proper solution (and of course analysing the technical feasibility)
- Implement
- And test

And of course have proper documentation all the way.

### Product owners don't write use cases

Business logic is the core of your business, it might be 
implemented in code but what happens if your code is lost, 
not understanable or simply is just too much code for someone to understand?

You must have your business logic expressed in proper documentation and
guess what? there are a diverse amount of tools you can use for this 
that have been battle tested across the ages:

- use cases: TODO short description
- flow diagrams: these are super important when dealing with complex interactions and changes of state in business entitites, like a lown approval, or a user audit, or a user requesting permission to build something in the city.
- ordered lists of steps! yes, you actually can go a long way by simply writting in detail what you want.




### Scrum masters and managers dont understand software development

Long meetings, meetings all day long, developers time estimates
as the ultimate source of truth, those things are more are a 
sinptom of a deeper truth: Managers dont understan the business they are in.

Developing software is a complex mix of highlihg technical and analtic
capabilities that require a lot of concentration. And if you sometime
spot a developer looking at wall or drinking coffee or anything that
is not "typing" guess what, they are probably thinking in the background
how to solve a coding problem for you.


Develiping software is a complex mix of high techincal and analytic capabilities and a certain
degree of crafmanship and art, you need to understand how that process works
in order for you to understand how developers think and make the most out of them.

Most developers like order so if you provide clear requirements they will 
give you minimal troubles.

Also, dont interrupt them with meetings. Try to reduce the amount of interrumptions
to the minimum since everytime you change the developers' mind context it takes
about 30 minutes to switch back to the original coding tasks (TODO ref).


### Groomin sessions are not Software analysis sessions

Grooming sessions are supposed to be a quick prioritization
and review of all the stories product owners, managers and Software Analysts
have created before.

If you encounter your team asking too many questions about 
what they need to do in each ticket then you are not doing your
job correctly.

Remember that the more unnecessary meetings developers are in
the less time they will have to build actual features.

### Software developers are not Software Analysts

There is a very importan role in software building which is
that of the Analyst. Analysts help you identifying your business logic
and documenting it in the proper ways so that it later can be 
referenced by you or developers. This will be the ultimate source of truth.

If you expect developers to do this then you probably will need to
pay them double salary and make them work 80 hs a week.

Architects are not software analyst. They are a core necesity of your
team because they will translate features and business logic into 
high level components and their interactions so that your product
is maintainable and scalable. They need to work togehter with Analysts and product owners.


### Dont blame developers for everything

Recognize that there is a hard disconeect between what managment 
wants to do and what is actually possible.

Recognize that you made up your business reqruiements as the
sprint went and that you added more because of reasons,
recognize that the requirementes weren't clear enough and that developers
needed to hunt for answers during sprint time.

Once you recognize your own fauls then you will realize 
that is not a problem of developers slacking off or not
being good enough but a problem of requirements and YOU.

Imagine commisioning a table to a woodworker.
In the middle of the build you tell the woodworker 
you want to add drawers to one side.
Constructively, decisions that could have been made to
accomodate those drawers more easily werent taken so
now adding those drawers is more complicated, but doable, but it
will take more time.
Now one week later you realize you want to blind 3 sides of the
table. Cycle goes on again, requirement changes, it will take longer to build.

And why is that? because you asked for a table and during the build
your realize you wanted a desk with drawers.

How much smoother the process could've been and how much faster if
you realized what you really wanted.


Im not suggesting business requirements to not change during the build,
but if you take your time and design what you want carefully you
can greatly minify those changes during the build process.


### Developers do not understand the business

It is important that you communicate to developers
what are your business priorities, constraints and
objectives. This will help them go one way or the other
while taking techincal deicssions.

Developers do tend to abstract a bit more thant they should
of the underlying business, and that is something developers
should improve up but you will need to help them
by providing the approparite communications.

Do you have constraints? do you have pression from investors?
a business deadline is comming? communicate!


### People before processes

What a bunch of lies. People before processes doesnt contemplate
any of the things we just review.

Processes are super important and is what large and small, old and new
companies are doing most of the time, creating, refining and deleting
processes to make their operations run smoother.

### Scrum does not mean you dont need to write documentation



------------------


Notes from scrum.org


https://www.scrum.org/resources/what-is-scrum


> Cross-functional teams have all competencies needed to accomplish the work without depending on others not part of the team.

This does not happen in real life medium to large companies.

The microservice you are going to need to modify in order to support the new
feature is owned by another team and they will block your progress
untill they like what you do, they agree with how you do it or until
they create the proper infrastructure to support your new changes.

Also, how do infrastructure work fit into this. Is it a user story?
can it be condensed into a single techincal story? how about the part
where architects and tech leads and senior developers need to get together
to DESIGN the fucking thing? will that be a tciket? a story? or something
that is not conivable since it does not have a tangible value delivery to the customer?

In this way scrum recognizces that everything is already invented and figured out
int he software industry and PO just need to briefly and without details
create post it tickets about the high level TODO things they want to provide to the
customer and developers who at this point are nothing but Magic Domestic Elves will
grab those posts it and convert them into money for the company.


Good old software development (and any technically challenge project whatsoever) is made by
several preplanning stages. Movies, good software, good platforms, complex buildings, regular houses,
boats, every major thing in engineering (you cannot say that your fucking CRUD adminsitrative app your
your fucking cunt customers is more complex than a freaking Plane or spaceship or a building) has
super clearly defined stages: planning, design and implementation (of course the specif might vary but
your get the point). And then WHY, I mean WHY software is so AGILE and fast
and modern? Aren't we just expecting magical thing from happening? Is this
engineering or are we just a couple of folcklore magical beings that can
appear things from nowwhere?

Why will the customer want to change things in the middle of the development process?
What happens if the customer that is paying for a building to be built sunddenly realises
in the middlew of the process that they want another floor? will using scrum actually
save civil engineeres, estructural engineers, arquitecs and contractos fromm having to
the redo the whole foundation of the building or simply saying no to the new feature?

Or are we really ignoring one fundamental thing? We need to know what we want to build inorder to
build the infrastrcture to actually build.

If your PO wants a nice house with 4 bedrooms and 3 bathrroms that is fine, and he can probably
move windows around during the process but inorder to build that house there an underlying
infreastrucuture planning, design and development that needs to be done in order to support your
fucking house. If you suddenly realise that in the middle of the construction you want
another entire floor on your house then you cannot expect a wishifully-thinking metodoloy to save
you from the tourlbes of rethinking your entire design.




### What POs, managers and scrum masteres need to understand about software

We software developers like to think there is a bit of magic in what we do
and of course you can agre to certain degree with that point but at core of it
all what we are doing is engineering and from that point you cannot
distance yourselfe too much from the goold old traditional engineering practices
humanity has been built around. Examples of these practices bein impelemtned
can be found in the most basic and unprofesional house building to the most profesional
architect, structural engineering supported house, complex multi story buildings,
complex highway roads, bridges that cross gigantic masses of water, ships that travel
the entire ocean couple of times a year and finally rocket ships that go into the fucking
space and back safely.

By not recognicing those goold old disciplines you are ignoring an important
part of how science and human knoledge work: by standing on the shoulder of giants..


Lets take a complex multy story building as an example of how software is built,
and please dont forget this ever again.


Buildings need to have proper foundations that will support in a structurally safe manner
all the stories it will have. Without a properly done foundation the building would collapse
and people will die.

So to accomplish a proper fooundation you will need planning and engineering to design it
BEFORE they can actually provide value to the customer. But hey, having a good office
that doesnt collapse to the ground when more people come to visit you is not markeatble broh.

Additionally and very much related to the foundations are all the core services
that make up for a habiltable building: water mains (in and out), electricity, internet,
heating and cooling, insulation, etc etc.

These things also require proper planing and design prior to impelemtnation, otherwise 
when more than x people take a shit the entire piping will collapse and shit might
hit the fan in the most literal sense possible.

These things are the foundaiton of the building and in software you have.... surprise... THE SAME!.

Before you can actually create those nice popups, and lists and buttons you need 
infrstratructre to support it. You need the foundations of your software to be in place.

A proper example of foundation is that you have real time constraints, or you will need to
be able to support spike in traffic in your site elastically and easily.
Well guess what? that needs to be planned and design before implementing features.
You want to deploy your software to the cloud (i..e aws), you need to plan and design,
otherwise you wont scale sufficiently or aws will charge you more than what you can pay.

Also, foundation might proper libraries and framework selections, but most of the time
a simple framework wont give you the proper foundation for your proper business case.


So now lets say that the PO of the building wants two more floors with humongos
pools in them (hey we are using scrum, we are agile, things can change broh) then 
imagine what would happen to your builders and engineers and achitects, you think
they will tell you "hey its fine, give one more sprint" or do you think they will
need to rethink the whole structure through so that your fucking pools wont
collapse the entire building. Or maybe they will tell you that is not possible at all.

Granted, software is a bit more fleixble in tha respect but I can guarantee
that if your requirements change too drastrically you will need time
so that your achitectural and tech leads and senior software developers to
regroup to rethink how those new two floors and pools impact your software 
and how they can mpdify the infra so that we can support them.

The problem is that all that work doesn't fit scrum. You cannot exactly
estimate how much time will desgning complex stuff will take you.
It wont be something self contained within your team (it will probably require
multiple people from multiple teams planning and designing) and it wont be
of any direct value to the customer so that you can demo and be super
happy you did a scrum sprint broh.

So what is the solution? Ditch scrum?
Maybe, i really dislike scrum because it alienates all the good old
techinques we have for dealing with complex problems (and modern enterprise software
is in that category easy as a cake) but I belive that there is middleground
where velocity and sprint commitement can be left aside while there is a
PROPER planning and design stage for your software.

Dont supose that starting from sprint one your team can start delivering value becuase
50% of the time at least that wont be the case. You need to invest time
in infra otherwise you wont be able to build software and you are alianating
thousands of years in experience.

So use scrum for regular features that dont need changes in the infra, and
avoid implementing too tighted up scrum for techincal tasks that require
pllaning designing or improving or maintaining infrastructure.


Oh, and about maintaining. If you have a complex enough sistem you have a very
high probability that you are owning a couple of pieces of software that
make up part of your infrastrucutre. These things are core pieces of sotware
that are used across all your app and that solve common problems and
make it easy to solve others.

If you neglec the existance of these things you should be fireed.
If you neglec that these core libraries require constant improvements, documentations
and maintaince then you should probably be fired too.

Understand what are your foundations, understand what are your core services and
overal understand how much you can stretch them, understand that they should require manitaince
and understand that if you cannot fit these things into quite little sprint sized
tickets then you are putting scrum over engineering and you are basically a glorified
TODO-book-keeper and the company probably does not need you.


### Sprint planing is not a proper place to do analysis and requirements

POs and Scrum Master with the help of Software ANalysts MUST get together
to create stories wtih proper definitions. Any clarification CAN be do
in sprint planing (but rememeber that pllaning is officially capped to 8 hours for
month long sprints so you need to be efficient).

Things expressed verbally cannot be used to hold anyone accountable.

YOu need to read and write! there is no escaping this. As a PO
yiur need to describe the features that you want with excrusitating 
details, it does not matter that you tell you developer what to do you 
need to write that down. QA is going to use that to test the feature.

POs can typically be helped by Software Analysts to do the grunt
work of specifying everyhing.

### The product backlog is a lie

https://www.scrum.org/resources/what-is-sprint-planning
https://www.scrum.org/resources/what-is-a-product-backlog

We need a product backlog but we also need a engineering backlog with techical
stuff need to be accomplished in order to get the foundation and infrastructure
ready for the upcomming features.


> It [Thenproduct backlog] is the single source of requirements for any changes to be made to the product.


The why the fuck most tickets dont have proper use case descriptions, wire frames, constraints,
flow diagrams, etc etc etc.


### Scrum is a glorified TODO list that is not reall fit for complex software development

Imagine prducing a million dollares movie with scrum

