---
title: Using Azure Functions to create a page view counter
date: "2019-12-26T22:12:03.284Z"
author: nacho
description:
  "We can extend static sites by creating a simple page view counter that is processed in a serverless manner, and for free. Microsoft Azure provides *Functions* as a flagship service to do this. Let's explore building it on Visual Studio"
tags:
  - azure functions
  - storage
  - .NET
  - cloud
  - serverless
---

## Introduction

Since we are using [Gatsby](https://www.gatsbyjs.org/) to build this site as a set of static files, there are some common functionalities that you might find in dynamic sites which you will naturally be missing. However, this does not mean they cannot be implemented in some way.

As a way of testing the development of a small, simple feature and some Azure offerings, we decided to try to build a page view counter for our blog posts.

## Scope

The scope of this small experiment will be to build a small service that maintains the state of how many times a specific blog post (or in general, a page) was viewed. Since in our case we are building the site statically, we will be calling the service from the frontend.

## Tech requirements

 Azure provides [multiple compute solutions](https://docs.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-overview), each with its own use cases. Considering the scope, [Azure Functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview) sounds like a good offering. Function apps are serverless execution contexts where we can run a piece of code (the Functions themselves) in a stateless way. 

 Since this compute platform is stateless, it means we'll need to have a separate way of storing how many times each page was visited. Most of the full-fledged DB offerings will probably be overkill for this, so using something like [Azure Storage Tables](https://azure.microsoft.com/en-us/services/storage/tables/) sounds like a good idea. The light, no-schema, and cheap service is good for key-value storage, which is exactly what we need.

Considering the above, what we will be using is the following:

- An Azure account/subscription (the [free one](https://azure.microsoft.com/en-us/free/) will be more than enough).
- Azure Storage Account, to use the tables service. 
- Azure Functions App, to deploy our function into.
- An IDE (for this, I will be using .NET Core C# on the free version of  [Visual Studio]((https://azure.microsoft.com/downloads/) ), but there are [several offerings](https://docs.microsoft.com/en-us/azure/azure-functions/supported-languages) that Azure Functions support)
- The [Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2) for Azure Functions. It comes with Visual Studio if you include the **Azure development** workload when installing it.

## Capacity

These Azure services all have their own pricing plans, but as mentioned in the above section, we will be fine using the free subscription offering for the experiment. You can see which products are free and in which capacity [here](https://azure.microsoft.com/en-us/free/search#new-products). 

You can see that this plan includes 1,000,000 function requests per month, which is a good amount in terms of capacity. You can upgrade later if needed, but in general, it's a cheap plan and a good way to start. 

## Building the service

### Using Azure Functions

Azure Functions is a way of executing code in a [serverless](https://azure.microsoft.com/solutions/serverless/) manner. In a way, it lets us only worry about the code that we want to execute instead of how the code is executed:

> Azure Functions is a solution for easily running small pieces of code, or "functions," in the cloud. You can write just the code you need for the problem at hand, without worrying about a whole application or the infrastructure to run it. Functions can make development even more productive, and you can use your development language of choice, such as C#, Java, JavaScript, PowerShell, and Python. Pay only for the time your code runs and trust Azure to scale as needed.

It's similar to what AWS offers with Lambdas. Thinking about it in terms of abstractions, we can put Functions-as-a-Service a layer above Platform-as-a-service (which, in turn, finds itself above Infrastructure-as-a-Service).

There are some things we need to define before writing code for our own function, but they will be explained as we go along with the creation of the project in Visual Studio. 

Note that you can also create the Azure Function before deploying any actual code into it on the Azure portal (or several other ways like PowerShell, Azure CLI, REST API, etc.), but it makes sense to abstract from that considering the fact that we know that the project templates that come with Visual Studio (or the core tools in general) handle everything we need to deploy our code correctly into our own Azure account.

To start, we open Visual Studio and create a new project. In the Create a new project dialog box, search for functions, choose the Azure Functions template, and select Next. I'm creating the project with the name *PageViewCounter*. 

Here is where we need to define some concepts related to functions:

- There's a drop-down that contains the technologies that will host our functions. As mentioned previously, we will use *Azure Functions v2 (.NET Core)*.
- Functions also provide automatic ways of triggering our code, some of which communicate with other Azure Services (Queues triggers, IoT Triggers, Blob Triggers, etc.). We'll use the [**HTTP trigger**](https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-http-webhook?tabs=csharp) as we want our function to trigger whenever we enter a page.
- Authorization level: Anonymous. We don't need fancy ways of doing authentication for this so we'll leave it at that for simplicity.
 
 After creating the project, we are received with boilerplate code that does some simple processing of a request; where if the HTTP request contains a name parameter, the response will be a greeting, and otherwise the request will fail with an error message:


```csharp
    [FunctionName("Function1")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        log.LogInformation("C# HTTP trigger function processed a request.");
        string name = req.Query["name"];
        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        dynamic data = JsonConvert.DeserializeObject(requestBody);
        name = name ?? data?.name;
        return name != null
            ? (ActionResult)new OkObjectResult($"Hello, {name}")
            : new BadRequestObjectResult("Please pass a name on the query string or in the request body");
    } 
```

From here we can also see that some of the settings that we chose when creating the project defined the attribute of the **Run()** method (which is the main code we want to run).

There are some other files in the project that we'll look into later.

If we build and run the project, a console window opens up and gives us some information about our locally-hosted service:

```bash
Application started. Press Ctrl+C to shut down.

Http Functions:

        Function1: [GET,POST] http://localhost:7071/api/Function1
```

If we enter that URL into a browser (or even make a request to it with *curl*) without a name parameter, it will ask us to pass a parameter name. If we do so (for instance, by entering *http://localhost:7071/api/Function1?name=nacho*), it will say hello pertinently.

We can go ahead and make our first changes to this. We should start by naming the function something more specific. For this we can change the [*FunctionName()*] attribute. I will name it *GetPageViewCount*. We would also like it to respond only to **POST** requests, so I will remove the *GET* parameter in the [*HttpTrigger()*] attribute. Lastly, we can change our code to return 0 as text for now. This is what it will look like:

```csharp
[FunctionName("GetPageViewCount")]
    public static async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Anonymous, "post", Route = null)] HttpRequest req,
        ILogger log)
    {
        string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
        dynamic data = JsonConvert.DeserializeObject(requestBody);
        return (ActionResult)new OkObjectResult("0");
    } 
```

If we wanted, we could go ahead and publish our project by doing a right-click on the Project and selecting **Publish**. Here is another thing we need to define about our service: How the pricing will be performed. The easiest way, especially if we are using the free Azure account, is to use a Consumption plan, which will give us **1 million** free requests. There are some disadvantages compared to the other 2 plans (Premium and App Services):

- Premium hosting has nice to have features such as perpetual warm instances (as to avoid cold starts which will make our code start with a bit of latency). However, latency is not something we care about in this case.
- App Service hosting makes our code run on App Service VMs, which makes it optimal if you are using that service already.

Lastly, when publishing to a consumption plan, it asks us for the following:

- Name: The name of the plan.
- Subscription: After authenticating with your account, your free sub will appear here.
- Resource group: Just a way to group resources in Azure. All resources need to be deployed into one. You will need to create a new one if you didn't already
- Location: The datacenter in which you want your Function to run.
- Azure Storage: The plan needs to store metadata and for this, they use a storage account. You will need to create one.

Notice that the last field is an Azure Storage Account. This is convenient for us because as we said, we will be using Storage tables and this saves us the creation of one. Let's create the Storage Account and proceed with the publishing. A Storage Account name must be unique because it creates public endpoints through which you can access the service (e.g. *https://your-storage-name.table.core.windows.net*). You are charged by the data egress and ingress, so you can create as many as you want.

You can also access the [Azure Portal](https://portal.azure.com/), log in and see the resource group with the resources you just created!

### Using Azure Storage

Azure Storage encompasses many services such as Blobs, Tables, Queues, Files, etc. In our case, we mentioned we will use Tables because of the easy key-value storage. We can think of a page URL as the key, and the times it was counted as the value that we want to retrieve.

At this point, we want to install the Azure Storage Tables NuGet package (or the equivalent for the language you want). We are actually going to use the [Cosmos DB Tables API](https://docs.microsoft.com/en-us/azure/cosmos-db/tutorial-develop-table-dotnet#install-the-required-nuget-package), since it includes the API for accessing storage tables.
Let's add the reference to it:

```csharp
using Microsoft.Azure.Cosmos.Table;
```

Since we already created our account, we can easily access the Tables service through our code. What we need for this is the following:

- The **connection string**: This is an authentication key that you can get [from the portal](https://docs.microsoft.com/en-us/azure/cosmos-db/tutorial-develop-table-dotnet#install-the-required-nuget-package).
- A **Value** (view count) to store and retrieve in the tables through a **Key** (URL).
- Code that connects and access the tables through the API package that we installed.

Let us review how tables store entities work.

### Table Entities

The simple way to store entities is to create a class that inherits from `TableEntity`. What this means is that the class will need to have two Properties: A `PartitionKey` and a `RowKey` . Both keys, combined, form the **Key** through which we will **uniquely identify our entity**. However, separated they serve a different purpose:

-  The `PartitionKey` defines the partition in which the service will store the entity: 
>Tables are partitioned to support load balancing across storage nodes. A table's entities are organized by partition. A partition is a consecutive range of entities possessing the same partition key value. The partition key is a unique identifier for the partition within a given table, specified by the PartitionKey property. 

-  The `RowKey` is a unique identifier for an entity within a given partition.

  Since the `PartitionKey` is used for load balancing, it's important that it's not hardcoded. For this, we can use the URL of the page in which we are counting the views. The `RowKey` can be hardcoded, because we are already changing the key through the use of the URL in the `PartitionKey`. Eventually we could have different `RowKey` for different scenarios, but for now it will stay as a hardcoded value. You can read more [here](https://docs.microsoft.com/en-us/rest/api/storageservices/understanding-the-table-service-data-model).

  After that, the entity can have whatever fields we want. Since we are storing the values, this is how our class will look:
```csharp
  public class ViewCount : TableEntity
    {
        public ViewCount(string URL)
        {
            //the partition key for load-balancing and identification
            this.PartitionKey = URL; 
            
            // hardcoded for identification
            this.RowKey = "visits"; 
            
            // the value we want to store
            Count = 0; 
        }

        public int Count { get; set; }

        public ViewCount()
        {
            Count = 0;
        }
    }
```
### Changing our function to connect to Storage

We now have the entity that we want to store and retrieve, so we need to connect to Storage and do precisely that. Table entities are stored in Tables which are identified with a name, so we can choose it and connect to it through a `CloudTable` object. In general, the logic is as follows:

1. Connect to the Storage Account through the connection string.
1. Create a table client through which we do transactions (inserts, updates, etc.).
1. Get the table through its name. 
1. Execute transactions on the table.

Here are the first 3 steps in code:

```csharp
    const string tableName = "viewcountertable";
    
    var storageAccount = CloudStorageAccount.Parse($"{yourStorageAccountConnectionString}");
    var tableClient = storageAccount.CreateCloudTableClient();
    CloudTable table = tableClient.GetTableReference(tableName);
    
    // we can let our code create the table if needed
    await table.CreateIfNotExistsAsync(); 
```

We can now do transactions to the table! Let's get the URL parameter from the body first:

```csharp
    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    dynamic data = JsonConvert.DeserializeObject(requestBody);
    string pageViewURL = data?.URL;
```

And now, we can use `URL` to create a `ViewCount` object that uses it as a key. The logic should be easy to follow but here's a high-level overview:

1. Try to retrieve the `ViewCount` object for the URL.
1. If it doesn't exist, create a new `ViewCount` object (with count 0 by default) for that URL.
1. Increase the view count on that object by 1.
1. Store the updated entity.
1. Return the view count to the function caller.

Here's what the code looks like:

```csharp
    // try to retrieve count for the URL
     var retrievedResult = table.Execute(TableOperation.Retrieve<ViewCount>(pageViewURL, "visits")); 
     
     // wait for the operation and get the result into a ViewCount object 
     var pageViewCount = (ViewCount) retrievedResult.Result; 

     // if the entity didn't exist, create a new one with count 0
     pageViewCount = pageViewCount ?? new ViewCount(pageViewURL);

     // augment the view count by one 
     pageViewCount.Count++; 
     
     // insert or replace the entity with the new count
     table.Execute(TableOperation.InsertOrReplace(pageViewCount)); 
     
     // return the view count 
     return (ActionResult)new OkObjectResult(pageViewCount.Count.ToString()); 
```

Let's also make sure we return an error code if we don't give a "URL" identifier to the function before trying to retrieve an entity:

```csharp
  if (pageViewURL == null)
  {
    return (ActionResult)new StatusCodeResult(503);
  }
```
The function is now ready! Let's make sure it works by running it locally and performing POST requests that have a "URL" parameter in the body.

### Deploying and implementation

We are now ready to deploy the Azure Function. Something that you might want to make sure of, is that you do not usually want to keep any connection string in code, so we will be getting it through the [App Settings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings#settings):

```csharp
  // we will have a StorageConnectionString field in the app settings (local.settings.json files) where we store the storage account connection string
  var storageAccountConnectionString = Environment.GetEnvironmentVariable("StorageConnectionString");
```
The App Settings can be changed in the Azure Portal at runtime.  

Lastly, you can implement this on any page by creating a small script that calls into this function and gets the result:
```js
const url = 'https://pageviewcounterblog.azurewebsites.net/api/GetViewCounter/';
const data = {URL: 'this-blog-post-URL'};

const response = await fetch(url, {
  method: 'POST', 
  body: JSON.stringify(data), 
  headers: {
    'Content-Type': 'application/json'
  }
})
const body = await response.json()
console.log('Success:', JSON.stringify(response))
```

Notice that this way, anyone that has access to the function endpoint can call into it. Securing the function goes beyond the scope of this post, especially because this is called in the frontend (whereas you would likely prefer to call this from the backend to authenticate properly and easily). However, something you can do pretty simply is to [add CORS policies](https://www.c-sharpcorner.com/article/handling-cors-in-azure-function/) to the function in order to have it be a little more restrictive.

## Closing

Right now you should have a working Azure Function that connects to Azure Storage Table and stores the amount of times that a certain page was visited. And this was all for free (except if you exceed the million requests per month, but you can probably handle paying at that point)! 

This was meant to be a simple experiment that served as a good introduction to some Azure services, and to certain concepts related to computing in general. Plus, it shows a simple way in which you could extend your static sites through serverless computing.  

Feel free to review the code here: https://github.com/IgnacioAmigo/PageViewCounterBlog.