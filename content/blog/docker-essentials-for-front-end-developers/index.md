---
title: Essential Docker for Front End Developers
date: "2020-03-10"
author: franleplant
description: "Docker has become a widely used
  technology and chances are you are going to have to deal with it eventually, at least superficially, in your Front End
  career. Let's cover the basic concepts and day to day useful commands you will likely use when dealing with Docker."
tags:
  - Docker
  - Dockerfile
  - Javascript
  - front end developers
  - NodeJs
  - Express
  - Cloud Computing
  - Clusters
  - Kubernetes
  - AWS
  - Azure
  - Google Compute Engine
---

Jump to the [commands sections](#essential-commands)

## What is docker?

> Docker is an open platform for developing, shipping, and running applications.
>
> [source][1]

[Docker][14] lets you encapsulate your application along with all its
system dependencies into a single executable
that can be shipped predictably into servers or clusters; or
as development environment for other developers using different
Operating Systems.

If you are familiar with Virtual Machines (such as [Virtual Box][2]) or [Vagrant][3]
then you should feel comfortable enough with Docker.

With Docker you can easily create something very similar to a headless virtual machine.
You can install system dependencies, configure networks and ports, setup databases,
fetch your code and start your app with a simple configuration file i.e. _Dockerfile_.

Today it's very common for [IaaS][5] and [PaaS][6] providers to provide first
class support for Docker containers.
Examples of these providers are [Google Cloud Compute Engine][7],
[Microsoft Azure][8] and [Amazon AWS][9] among others.
You can use [Kubernetes][15] to manage a cluster composed of docens
of Docker containers in these providers and scale easily
so long as you can afford it.

Lets take a simple Nodejs / Front End application, what does it need to run?

- System Dependencies:
  - An adequate linux distribution.
  - [NodeJs][10], [NPM][11], [Yarn][12].
  - [gcc][13] and the required native dependencies to install native NodeJs dependencies (such as `node-sass`).
- System configurations:
  - npm/yarn repositories.
  - OS networks, users, groups, etc.
  - System optimizations such as removing any OS components not needed for running your app.
- build/run steps:
  - fetching your app's code
  - installing dependencies (i.e. via `yarn install` or `npm install`)
  - building (if necessary)
  - starting your app

We will a cover an example of this later.

Docker lets you express all these necessary steps that make
up a single deliverable application.

The way you express these necessary steps is a **Dockerfile**
and the result of _building_ your _Dockerfile_
is an **Image** that can be instantiated and executed, this executable
is called a **Container**.

## What is an image?

> An image is a read-only template with instructions for creating a Docker container.
>
> [source][1]

You use a _Dockerfile_ to define an _image_.

Your _Dockerfile_ is an ordered list of steps necessary to
run your app. Each line will generate an intermediate _image_ that
Docker will cache for performance reasons, so the order of your
steps is important.

This is a rather minimal but typical _Dockerfile_ for a NodeJs app:

```Dockerfile
# This is our base community provided image,
# with some minimal distribution of linux
# that comes with NodeJs v10 (and npm) already installed
FROM node:12

# Use this directory _inside_ your Docker container
# as the base directory of all the next actions
WORKDIR /usr/src/app

# Copy your app's code from the host (your computer) to the container.
# This assumes a typical setup in which the Dockerfile
# is in the root of your project
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your App's source files
COPY . .

# Tell Docker that your app will be working in the port 8080
# so we should open it up to the outside
EXPOSE 8080

# Run your app.
# CMD signals Docker that this is the thing that we want to run,
# if this executable fails then the whole container will exit.
CMD [ "node", "server.js" ]
```

Notice how we install dependencies before copying the App's code, this assumes
that the dependencies will change less frequently that the App code so Docker might
be able to use the already cached intermediate _image_ up to that point.

Building _images_ means processing the list of instructions and sort of _render_ the final _image_
so that it is ready to be instantiated into a running _container_.

**IMPORTANT**: **Images** are just instructions, when you run them you turn them into **Containers**.

## What is a container?

> A container is a runnable instance of an image.
>
> [source][1]

After you built your final _image_ you can then instantiate it into an executable,
this executable is called a _container_ and it is treated
by your host OS as just another process.

Take a moment to think about the big leap of the final statement,
this means that by using Docker you have encapsulated an
entire Operating System (OS), dependencies, configurations,
startup commands, etc into a single runnable process in your
host Operating System. Nice, right?

## Image vs Container: an analogy

You can think of an _image_ as a traditional Object Oriented Programming (OOP) Class,
and a _container_ as an instance.
You can have multiple running instances of an image
(that is usually how you scale your app inside a cluster), with
slightly different parameters (Environment Variables mostly).

`Images` can inherit from other `images` to compose them in useful and meaningful ways.

## Docker repositories (Docker Hub)

> Docker Hub repositories allow you share container images with your team, customers, or the Docker community at large.
>
> [source][16]

Docker Hub is an analogue solution to things such as NPM to distribute NodeJs packages,
[Cargo][20] to distribute [Rust][19] crates (pieces of code), [Maven][21] to distribute [Java][22] Jars (pieces of code), etc.

Docker hub also has the concept of [registry][17] similar to NPM where you can use
the default Docker hub registry or your company's own.
The default [Docker hub registry][18] is where most of the base images, such as NodeJs,
Nginx, Java, etc live.

In the `Dockerfile` we dissected before, the first line is `FROM node:12` and
tells docker to use the base image `node:12` (NodeJs version 12) that is stored
in a Docker hub registry, by default it will use Docker's registry.

The first time you try to build this image you will notice that Docker
downloads the base image and store it in cache.

We cover the basic commands in the next section.

## Essential commands

This assumes you have docker installed in your system (Linux or Macos)

### Building

Build your docker image (from a _Dockerfile_ in the current directory).
Docker will output the `Image Id` if everything goes well. This will be used
to instantiate the _image_ later.

```bash
docker build .
# equivalent to
docker build ./Dockerfile
```

</br>

Use `tags` to easily reference the built image, this replaced the need to use `Image Id`

```bash
docker build -t mySuperApp .
```

</br>

Force docker to re-build your `image`. Typically this is used when you changed something
in your Dockerfile, or the base image has changed.

```bash
docker build --no-cache .
```

</br>

Check the built images in your system

```bash
docker image ls
```

</br>

All the build commands output the docker `Image id` which is something you can use when
instantiating them into `containers`, but using a `tag` is a much more human friendly way.

### Docker hub

Push your most recently built image to docker hub using the tag as identifier.
Tags can have a complex form to keep track of versions and such.
Some common patterns are:

- `name-of-my-app:LATEST`: the latest version of your app, will keep changing as new versions come.
- `name-of-my-app:VERSION`: a given version of your app.
- `nodejs:10`: the base NodeJs v10 image.

```bash
docker push $TAG
```

</br>

### Running

Instantiate an `image` either by `Image Id` or by `tag`

```bash

docker run $IMAGE_ID

docker run $TAG
```

</br>

### Debugging

These commands are very useful for debugging your container, image or
Application.

Instantiate the `image` into a `container` and replace the `CMD` in the _Dockerfile_ for
an interactive shell you can play around with. This is particularly useful when your app
fails to start, you can ssh into the container and manually start the app or make some debugging.

```bash
docker run -ti $IMAGEID_OR_TAG bash
```

</br>

Run a `container` that uses your host's (your machine) App directory and files.
This allows you to use your regular development tools such as IDEs or Text Editors
to edit your `container`'s files in place. This is particularly useful when debugging
your App running inside a container.
`$PWD` is your process working directory or the directory you are currently located in your shell instance,
in this case we assume is your App's root directory.
Your container `WORKDIR` should be the one you set in your _Dockerfile_.

```bash
docker run -ti -v $PWD:your-container-workdir $IMAGEID_OR_TAG bash
```

</br>

SSH into an already running container.
Useful for debugging a partially running `container` or `app` or
for tweaking some details of your `container` or `app`.
Most of the time I use the previous ones since I find them more useful.

```bash
docker exec -ti $CONTAINER_ID /bin/bash
```

</br>

### Managing

What are the current running `containers`?

```bash
docker ps
```

</br>

Kill a running `container` (get the `$CONTAINER_ID` from the above output).

```bash
docker kill $CONTAINER_ID
```

</br>

Check a `container`'s logs.

```bash
docker logs $CONTAINER_ID
```

</br>

Inspect a `container` (debug information about volumes, networks, ports, etc about a given container).
In this case we get the `container`'s IP Address.

```bash
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $CONTAINER_ID
```

</br>

Check the [docs][4] for a more complete coverage.

## Closing

This is the basic knowledge I think every Front End developer should have as a minimum,
given the fact that Docker has such a wide adoption. The commands are commands I use
on a daily basis in my day job.

Even if you are not a Front End developer but simply new to this technology I think
you will be able to take value (and pride) from learning the basics.

There is a lot to learn about Docker and you can base your whole career specializing
on Docker and its parent discipline: DevOps.

[1]: https://docs.docker.com/engine/docker-overview/
[2]: https://www.virtualbox.org
[3]: https://www.vagrantup.com
[4]: https://docs.docker.com/engine/reference/commandline/inspect/
[5]: https://en.wikipedia.org/wiki/Infrastructure_as_a_service
[6]: https://en.wikipedia.org/wiki/Platform_as_a_service
[7]: https://cloud.google.com/compute
[8]: https://azure.microsoft.com/en-us/
[9]: https://aws.amazon.com
[10]: https://nodejs.org/en/
[11]: https://www.npmjs.com/
[12]: https://yarnpkg.com/
[13]: https://gcc.gnu.org/
[14]: https://www.docker.com/
[15]: https://kubernetes.io/
[16]: https://docs.docker.com/docker-hub/repos/
[17]: https://docs.docker.com/registry/deploying/
[18]: https://www.docker.com/products/docker-hub
[19]: https://www.rust-lang.org/
[20]: https://doc.rust-lang.org/cargo/
[21]: https://maven.apache.org/
[22]: https://en.wikipedia.org/wiki/Java_(software_platform)
