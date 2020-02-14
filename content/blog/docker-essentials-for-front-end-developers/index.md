---
title: Essential Docker for Front End Developers
date: "2020-03-01"
author: franleplant
description:
  "In this post we are going to cover the steps we took to create the nosleepjavascript.com blog
  in simple, easy, steps using the latest front end technologies: Gatsby.js (JAMstack), NodeJs, React,
  GraphQL, Javascript, GitHub Pages and GitHub Actions"
tags:
  - Docker
  - Javascript
  - front end developers
  - NodeJs
  - Express
---


- What is docker?

> Docker is an open platform for developing, shipping, and running applications.
> [source][1]


Docker lets you encapsulate your application along with all the
system dependencies into a single executable
that can be shipped predictably into servers or clusters; or
as development environment for other developers using different
Operating Systems.

If you are familiar with Virtual Machines (such as [Virtual Box][2]) or [Vagrant][3]
then you should feel confortable enough with Docker.

With Docker you can easily create something very similar to a headless virtual machine.
You can install system dependencies, configure networks and ports, setup databases,
fetch your code and start your app with simple configuration files (Images).

Today is very common for IaaS and PaaS providers to provide first
class support for Docker Containers.
Examples of these providers are Google Cloud Compute,
Microsoft Azure and Amazon AWS among others.
You can use Kubernetes to manage a cluster composed of docens
of Docker Containers in these providers and scale easily
so long as you can afford it.


Lets take a simple Nodejs / Front End application, what does it need to run?

- nodejs, npm, yarn to be installed (system dependency)
- gcc and the required native dependencies to install native node.js dependencies (such as `node-sass`)
- any other system configuration such as npm/yarn repositories, OS networks, users, groups, etc
- any other system optimizations such as removing any OS components not needed for running your app.
- build/run steps such as
  - fetching your app's code
  - installing dependencies (i.e. via `yarn install` or `npm install`)
  - building (if necessary)
  - starting your app


Docker lets you express all these necessary steps that make
up a single deliverable application.

The way you express these necessary steps is a `Dockerfile`
and the result of _building_ your `Dockerfile`
is an `Image` that can be instantiated and executed, this executable
is called a `Container`.


## What is an image?

> An image is a read-only template with instructions for creating a Docker container.
> [source][1]

You use a `Dockerfile` to define an `Image`.

Your `Dockerfile` is an ordered list of steps necessary to
run your app. Each line will generate an intermediate `Image` that
Docker will cache for performance reasons, so the order of your
steps is important.

This is a rather minimal but typical `Dockerfile` for a NodeJs app:

```Dockerfile
# This is our base community provided image,
# with some minimal distribution of linux
# that comes with NodeJs v10 already installed
FROM node:12

# Use this directory _inside_ your Docker container
# as the base directory of all the next actions
WORKDIR /usr/src/app

# Copy your app's code from the host to the Container.
# this assumes a typical setup in which the Dockerfile
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
# if this executable fails then the whole Container will exit.
CMD [ "node", "server.js" ]
```

Notice how we install dependencies before copying the App's code, this assumes
that the dependencies will change less frequently that the App code so Docker might
be able to use the already cached intermediate `Image` up to that point.



Building images means process the list of instructions and sort of "render" the final image
so that it is ready to be instanciated into a running container.

**IMPORTANT**: `Images` are just instructions, when you run them you turn them into `Containers`



## What is a container?

> A container is a runnable instance of an image.

After you have your final `Image` you can then instanciate and run that
image, this executable is called a `Container` and it is treated
by your host OS as just another process.

Take a moment to think the big leap of the final statement,
this means that by using Docker you have encapsulated an
entire Operating System (OS), dependencies, configurations,
startup commands, etc into a single runnable process in your 
host Operating System.



## Image vs Container: an analogy

You can think of an `Image` as a tradditional Object Oriented Programming (OOP) Class,
and a `Container` as an instance.
You can have multiple running istances of an image
(that is usually how you scale your app inside a cluster), with
slightly different parameters (Environment Variables mostly).

`Images` can inherit from other `images` to compose them in useful and meaningful ways.

## Essential commands


These all assume you have docker installed in your system (Linux or Macos)

### Building

Build your docker image (from a Dockerfile in the current directory)
```bash
docker build .
# equivalent to
docker build ./Dockerfile

```

use tags!
```bash
docker build -t mySuperApp .
```

force docker to re build (you changed something in the dockerfile)
```bash
docker build --no-cache .
```

All these at the end output the docker image id which is something you can use when 
instanciating them into contianers, but using a tag is a much more human friendly way.

### Run

```bash

docker run $IMAGE_ID

docker run $TAG
```



### Debugging


Ssh into a container, VERY USEFUL FOR DEBUGGIN


// spawns a new container and replaces de entry point with bash and ssh into it, this
is what you want for debugging
```bash
docker run -ti $IMAGEID_OR_TAG bash
```

Run a container with your local machine (host)'s app directory as a file system to
edit your container's files in your host machine with your acustomed IDEs or text editors
```bash
docker run -ti -v $PWD:your-container-workdir $IMAGEID_OR_TAG bash
```

$PWD is your process workiding directory or the directory you are currently located in your shell instance,
your container workdir should be the workdir your set in your Docekrfile (where all your app files will live)

Ssh into an already running container, useful for debugging your Dockerfile or your app running inside a container
```bash
docker exec -ti $CONTAINER_ID /bin/bash
```


### Managing

What are the current running containres?
```bash
docker ps
```

Kill a running container (grab the container id from the above output)
```bash
docker kill $CONTAINER_ID
```

Check container logs
```bash
docker logs $CONTAINER_ID
```

Inspect a container (Docker debug information about volumnes, networks, ports, etc about a given container)
(get container ip address)
```bash
docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $CONTAINER_ID
```

Check the [docs][4] for a more complete coverage.








[1]: https://docs.docker.com/engine/docker-overview/
[2]: https://www.virtualbox.org
[3]: https://www.vagrantup.com
[4]: https://docs.docker.com/engine/reference/commandline/inspect/
[5]: https://en.wikipedia.org/wiki/Infrastructure_as_a_service
[6]: https://en.wikipedia.org/wiki/Platform_as_a_service
[7]: https://cloud.google.com/compute
[8]: https://azure.microsoft.com/en-us/
[9]: https://aws.amazon.com
