---
title: Intro to game development with Typescript
date: "2019-12-26T22:12:03.284Z"
author: nacho
description: "We can extend static sites by creating a simple page view counter that is processed in a serverless manner, and for free. Microsoft Azure provides Functions as a flagship service to do this. Let's explore building it on Visual Studio."
tags:
  - gamedev
  - WebGL
  - PixiJS
  - TypeScript
---

## Introduction

If you are like me and are looking into getting out of Google's ecosystem, chances are that you switched (or are thinking on switching) from Chrome to another browser. In doing so, you will be getting rid of one of the cheekiest features in any browser: The [dinosaur game](https://elgoog.im/t-rex/). 

I thought we could take this chance to learn a little bit about web-based game development and create a small clone of the game. 

You can take a play the [finished game here](https://ignacioamigo.github.io/dinogame/bin/index.html) and [review the code here](https://github.com/IgnacioAmigo/dinogame). Keep in mind that the code is much more commented on this article since it's meant to be as explicit and educating as possible.

Let's dive in!

## Scope

It's very easy to overshoot when scoping any piece of software, especially when you can clearly see many ways in which your software can be expanded which is the case for pretty much any kind of game (power-ups, sound effects, types of entities, etc.). In these kinds of contexts, (over-)engineering the code to be prepared for future implementations seems like the correct way to go.

In this case, however, we have a pretty clear idea of what we want our game to look like: It's a simple infinite runner, where a couple of obstacles spawn from time to time and the score is directly based on how much time we can succesfully avoid them.

It will be hard, but let's try to keep the code and program simple and pragmatic. There's value in making the code work more systematically but we are looking into low-friction implementation since we want this to work as an introduction to a couple of ideas and technologies. Furthermore, since we are learning some of these technologies, I'll try to be as explicit as possible while exploring some of their defining features (in general though, I would recommend diving deeper to each of the concepts).

## Tech requirements

Keeping the scope in mind, let's try to deduce and compress what we need from a technology perspective:

- We want the game to run on the browser, which pretty much inevitably means we are going to use either Javascript, or something that ends up turning into Javascript. 
- We have to do game-specific tasks such as render images and process input. Luckily the browser gives us good support for both of them through things like WebGL and Javascript's input system respectively. 
- We would also like it to be as responsive as possible since it makes for a better user experience.

Note that we don't really  need brazing fast graphic drawing for this since the game will not render thousands of objects at once, so using WebGL is probably overkill. However, it's a good way to get into the topic and so we'll take the chance to do it that way. WebGL is fairly complicated to work with from scratch, so after doing a bit of research I have decided we can use PixiJS to render stuff a pretty simple set of Javascript libraries for a 2D renderer that runs over WebGL (which in turn means we are using hardware acceleration to render stuff). We can also go a step further and try to use it with Typescript, to get that sweet, sweet type-checking.

## Starting out

In the world of web development, it's common 
We are going to use a starter template, which will solve some of these issues for us. Specifically, the starter is the following: https://github.com/llorenspujol/parcel-pixijs-quickstarter. It includes Parcel, PixiJS and TypeScript. PixiJS started shipping with Type information since version 5, which is the one being included in the starter template. This means we don't have to import extra packages to be able to type-check PixiJS code.

Note that the only real requirement for this is Node and NPM.

### Project setup

Let's go ahead and clone the template repo:

```
git clone --depth 1 https://github.com/llorenspujol/parcel-pixijs-quickstarter.git DinoGame
```
Immediately, on our **DinoGame** folder we'll have a starting project app that combines TypeScript and PixiJS (and already includes the type information), bundled with Parcel which also provides some nifty features such as hot module reloading. At this point it's a good idea to run `
npm install` to install all the package dependencies that are defined as standard node dependencies.

We can actually go ahead and run the application by doing `npm run start`, which kicks off the build process and hosts the app on `https://localhost:1234/`. You'll see a cute animation of a character that looks like Bomberman.

Let's review the code a little bit. The two TypeScript files that are important are the following: `main.ts`, on the root directory, and `src\app.ts` 

`main.ts` is a simple file that imports from `app.ts` and creates a GameApp object by passing an HTML element, a number for screen width, and one for screen height. I want to make a low-res kind of game so I'll drop down the resolution to *300x75*:

```ts
import {GameApp} from "./app/app";
const myGame = new GameApp(document.body,  300, 75);
 ```

Finally, we have `/assets/loader.js`, which is where the creator of the template left some code that loads the game assets. Let's modify it to suit our needs:

```ts
import ghost from './images/ghost/*.png';
import cloud from './images/cloud/*.png';
import obstacle1 from './images/obstacle1/*.png';
import obstacle2 from './images/obstacle2/*.png';
import * as PIXI from 'pixi.js';

const spriteNames = {
    ghost: Object.values(ghost),
    obstacleGrave: Object.values(obstacle1),
    obstaclePumpkin: Object.values(obstacle2),
    cloud: Object.values(cloud),
};

export function GetSprite(name) {
    return new PIXI.AnimatedSprite(spriteNames[name].map(path => PIXI.Texture.from(path)))
}
```

We are now able to call `GetSprite()` from `app.ts` with one of the four values (specifically, the keys of `spriteNames`). The code essentially gets the files from each of the subdirectories and creates a texture from them. It's mostly an implementation detail and you can forget about it as long as you recall that the loading happens on that file. 

We could do something more strict/expandable here but for now this will work well for us, and is a low amount of code to maintain. 

**Note**: The code above assumes you have your assets in the specified folders! I'd suggest copying them from the repository.

## Game Code

Once the assets are out of the way, we can focus our efforts on the game code. Recall that this resides in `src\app.ts`.

```ts
export class GameApp {

    private app: PIXI.Application;
    constructor(parent: HTMLElement, width: number, height: number) {

        this.app = new PIXI.Application({width, height, backgroundColor : 0x000000});
        
        // init Pixi loader
        let loader = new PIXI.Loader();

        // Add user player assets
        console.log('Player to load', playerFrames);
        Object.keys(playerFrames).forEach(key => {
            loader.add(playerFrames[key]);
        });

        // Load assets
        loader.load(this.onAssetsLoaded.bind(this));
    }
}
```

The constructor simply creates a new `PIXI.Application` and sets the `app` field. After that, it creates a [`PIXI.Loader`](https://pixijs.download/dev/docs/PIXI.Loader.html) which is used to load assets (there's one by default so it's not really necessary to create one), and loads some files.

If you run the game after changing the resolution, you'll see it looks a little bit weird. As I said, I want to create a low-res game with a pixelated look, so for our first modifications we'll set some fields in the `PIXI.Application` object that we created. 

This part is not very fun or interesting to discuss but needs to be done, so feel free to skip it or read without much attention. In short, I'm setting a white background (`0xFFFFFF` in hex), setting the scaling resolution to 3 (which makes it so that the game is low resolution but scaled on our browser), and telling PixiJS how we want the scaled pixels to look like. I also went ahead and removed a portion of code that loads the default assets so that we can start out clean:

```ts
export class GameApp {

    private app: PIXI.Application;
    constructor(parent: HTMLElement, width: number, height: number) {

        this.app = new PIXI.Application({width, height, backgroundColor : 0xFFFFFF, antialias: false, resolution: 3 });
        
        // this scaling mode makes it so that scaled pixels are the same as the nearest neighbor, making it blocky as we want it
        PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST; 
    }
}
```

## The game loop

We have completed the setup of the game, so it's time to start writing the game loop. The game loop is, at a high level, the main flow control tool of most modern games. It usually looks something like this in abstract terms (order is really not very relevant):

```ts
InitialSetup()

// game loop:
while (true)
{
    ProcessInputs()
    UpdateWorld()
    RenderWorld()
}
```
Notice that since we are using specific tools to make this (the browser, PixiJS) we won't really implement all steps here but it's important to keep in mind that we usually want to handle them in some way or another.

Each iteration of this loop is usually called a frame, and most games run at 30 or 60 FPS (or frames per second). This means a single frame should take around 33 or 16 miliseconds respectively. 

PixiJS handles setting the framerate to be the same as our screen sync rate, so we don't have to worry much about it. As we'll see, we can handle simulating our game in variable framerate by knowing how much time passed between the previous frame and the current one. This does not mean it's really the most appropriate solution (in fact, a lot of times you'll want to [fix your frametime](https://gafferongames.com/post/fix_your_timestep/)).

## Input

This is the first step of the high-level game loop I described above. How will we handle this? Luckily for us, Javascript/the browser has a pretty robust input system of which we can take advantage of to know when the user presses a key so we won't have to put much effort for this to work.

Let's say we want our player to jump with the *Spacebar* key. We can implement this easily by having a `PressedSpace` boolean value that we reset at the end of every frame, once we updated our world (so it is not `true` forever). 

## Rendering concepts

Before diving into the fun part (the gameplay code!), let's see how we will handle the rendering part of our game, which is PixiJS's main function.
When we create the main object (of class [`PIXI.Application`](https://pixijs.download/dev/docs/PIXI.Application.html)), we'll have access to an object called the [`stage`](https://pixijs.download/dev/docs/PIXI.Application.html#stage) (of class [`PIXI.Container`](https://pixijs.download/dev/docs/PIXI.Container.html)), which is where we can tell Pixi what objects we want to have drawn. You can think of it as a list (or more generally, a collection) of objects to display. After loading an image, we can do this with a single line of code:

```ts
var sprite = new PIXI.Sprite();
Stage.addChild(obstacle.sprite);
```

You can learn more about it on PixiJS's documentation articles (I'd recommend at least glossing over them since it always helps to be familiarized with official documentation).

Any object (text, lines, sprites) can be displayed this way. Since our use is pretty limited, there's not really much more to say about this system, but it has a lot more useful functions which I recommend exploring.

### Note about coordinates

PixiJS uses a coordinate system that comprises the 2 usual suspects: The X coordinate, and the Y coordinate. However, it is important to keep in mind that the (0,0) coordinate is on the **top left**, and **the X coordinate increases to the right**, whereas **the Y component increases as we go down on the screen**. This is the most common coordinate system in game development tools so we'll leave it as it is, but as you can imagine there are things you can do to translate and modify the system as desired.

## Main gameplay loop

We've seen what the gameplay loop looks like in general terms, but how do we implement the main update function (ie: `UpdateWorld()`)? The answer is pretty simple, the `PIXI.Application` object that we created contains a field called `ticker` of type [`PIXI.Ticker`](https://pixijs.download/dev/docs/PIXI.Ticker.html), which lets us register different tickers that will run on each animation frame (for example, 60 times per second). After its execution, the frame is rendered (that is,the objects we set on the `stage`). 

This rendering process can be done at hand by [getting the renderer object and calling `render()`](https://pixijs.download/dev/docs/PIXI.Ticker.html#.shared), but we will avoid this and let PixiJS do it automatically after running the ticker. This way, we are essentially coupling the `UpdateWorld()` and `RenderWorld()` of our abstract game loop, which will work just fine for our needs.

Let's create a set of static methods and fields where we will group our game logic in our `GameApp` class. We know we want to know if the player is in a game over state, and what score they are achieving, so we'll define fields for those values. 

Regarding methods, for now we'll have one method for setup and one for the world updates, which we will implement through the PixiJS ticker:

```ts
export class GameApp {
    static GameOver: boolean = false; 
    static PressedSpace: boolean = false; // whether the player pressed space
    static Score: number = 0;

    constructor(parent: HTMLElement, width: number, height: number) {
        // code we added in the previous section goes here
        
        // register the event for key presses (PixiJS does not handle input, so we do it through the browser)
        window.onkeydown = (ev: KeyboardEvent): any => {
            GameApp.PressedSpace = (ev.key == " ");
        }

        Game.SetupGame();

        // this is the ticker that runs once per frame, let's call our Update() function 
        this.app.ticker.add((delta) => {
            Game.Update(delta);
        });
    }
    
    static SetupGame() 
    {
        // initial setup of the game state 
    }

    static Update(delta: number) 
    {
        // simulate game, update entities and world

        // frame is ending, so let's set PressedSpace back to false so that it is the default on the next frame
        GameApp.PressedSpace = false;
    }
```

The [`delta`](https://pixijs.download/dev/docs/PIXI.Ticker.html#deltaTime) parameter is passed on to the ticker and is how much time (**in milliseconds**) passed between the previous frame and the current one, so that we can use it to simulate our entities. It will be explained better in the next section so don't worry for now.

## Creating the character

We now have a little skeleton of code to fill in. Let's start by drawing the character whose assets we loaded previously.

PixiJS has two classes called [`PIXI.Sprite`](https://pixijs.download/dev/docs/PIXI.Sprite.html) and [`PIXI.AnimatedSprite`](https://pixijs.download/dev/docs/PIXI.AnimatedSprite.html) to draw either static sprites (i.e: images) or animations, respectively. So let us create a Player class that contains an AnimatedSprite that we can draw on screen:

```ts
class Player  {
    sprite: PIXI.AnimatedSprite;

    public constructor() 
    {
        this.sprite = GetSprite("ghost");
        this.sprite.x = 5;
        this.sprite.y = Game.GroundPosition;
        this.sprite.animationSpeed = 0.05;
        this.sprite.play();
        Game.Stage.addChild(this.sprite);
    }
}
```

We can now create a `Player` object and immediately see the character on screen animating. If we go a little bit further, we can probably imagine that we need to update the object every frame, so we can go ahead and create an `Update()` method that handles the character jumping (recall that we were saving whether the player had pressed Space). Since we will be updating the player from `GameApp.Update(delta)` it makes sense that the *Update* method for our character takes this as an argument as well. 

We know we want our character to jump with Spacebar, so we are actually at the point where we can implement this as well. I'll be defining a couple of fields on the `Player` class for this:

- `Airborne`: Boolean value that determines whether the customer is in the air. We need this to know if we have to accelerate the character downwards, and whether the character can jump.
- `VerticalSpeed`: Gravity accelerates our character downward, which in turn means it increases the vertical speed linearly (i.e: a specific amount per frame/time unit).

### Updating the world with `delta`

As mentioned before, the `delta` parameter that we are getting from the ticker is and passing on to our `Update()` method contains, in miliseconds, how much time passed between the previous frame and this one. Why is that value useful to us? Well, if we don't know how much time passed between one frame and the next one, we can't proportionally simulate the world. Usually, if we fix the framerate, we can simulate for a specific amount of frametime (so, if we want our game to run at 60 FPS, we would divide 1000 ms by 60 frames, which gives us 16.6 ms/frame), but in reality we can't rely on that being the real time that passed between two frames (there is a lot of variance introduced by the OS, the browser, the user, etc.). 

This way, if we want a value to increase by a rate of `X per second` depending on how much time passed, we need to adjust for how much time passed in the frame. If half a second passed between a frame and the next one, the amount by which we increase would be equal to `0.5 seconds` times `X per second`. This is the pattern that we will use to increment values that are tied to time (for example: user score, player speed, etc.).

Keeping all this in mind, you might already get the sense of what the update code is going to look like, but to spell it out: If our character not airborne and the player pressed space, let's set the VerticalSpeed to a negative value so our little character goes up. If the character is airborne, we need to accelerate it downward by adding up a constant value to the vertical speed. To make sure he doesn't go downward eternally, let's check against a `GroundPosition` (defined on `GameApp` since it will depend on the view's height) so that we know when we are not airborne anymore (and when we can set the speed to 0). Finally, let's make our character move by changing the sprite's Y position:

```ts
public Update(delta: number) 
    {
        if (this.sprite.y >= GameApp.GroundPosition) 
        {
            // if downward acceleration brought us to the ground, stop and set airborne to false
            this.sprite.y = GameApp.GroundPosition;
            this.verticalSpeed = 0;
            this.airborne = false;
        }
        
        if (this.airborne) 
        {
            // if we are in the air, accelerate downward by increasing the velocity by a constant value
            this.verticalSpeed += delta* 1/3; 
        }

        if (GameApp.PressedSpace && !this.airborne) 
        {
            // jump!
            this.airborne = true;
            this.verticalSpeed = -5;
        }

        // remember the delta update! 
        // the position will change in accordance to how much time passed and the character's speed
        this.sprite.y += this.verticalSpeed * delta;     
    }
```
So far, we can create a `Player` object on `GameApp.SetupGame()` and have it update on the `GameApp.Update()` method. The character will stand on the bottom left side of the window and jump when we press Spacebar as it animates slowly. You might be wondering when we are going to make the character move: The answer is we don't! We'll move obstacles towards the character.

## Obstacles

We have a character that jumps, so a good next point to explore is obstacles that scroll horizontally to the left. We want to have an arbitrary number of obstacles coming at the player, leaving some space for it to react accordingly. 

Since we are doing scrolling obstacles, we can also make our code so that it includes aesthetic objects such as clouds. We can differentiate those with objects that the character can bump into by having a boolean member called `solid`. We can even make them scroll a little bit slower so that we have some sort of [parallax scrolling](https://en.wikipedia.org/wiki/Parallax_scrolling). For this, let's define a base scroll speed on `GameApp` and subtract one from it if the world object is not solid.
Lastly, let's add a modifier to the speed of the obstacles so that they move a little bit faster as the score increases:

```ts

export class GameApp {
    static ScrollSpeed : number = 3;
    ...
}

class ScrollingObject {
    sprite: PIXI.Sprite; 
    solid = true;

    public constructor(spriteName: string, isSolid: boolean) {
        // todo explain 
        this.sprite =  GetSprite(spriteName);
        this.sprite.y = GameApp.Width;
        this.sprite.x = GameApp.GroundPosition;

        this.sprite.anchor.set(0, 1);
        this.solid = isSolid;
    }

    public Update(delta:number) {
        var baseScrollSpeed = (this.solid) ? GameApp.ScrollSpeed : GameApp.ScrollSpeed-1;

        // modifier for speed depending on score so that it gets more difficult
        var scrollSpeed = baseScrollSpeed + Math.min(GameApp.Score/15.0 , 1);

        // move to the left, watch out!
        this.sprite.x -= delta * (scrollSpeed);
    }
}
```

Right now we can create multiple obstacle objects and have them update on the main game loop. We mentioned before that we wanted to prepare our game for an arbitrary number of objects, how can we achieve this? One way would be to create a list of `WorldObject`s and insert there all the objects that we want. 

At this point, however, we actually have 2 types of objects that interact with the world: `Player` and `ScrollingObject`. But it makes sense for us to coalesce all instances in one list of objects to loop over. If we were to go in an [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) direction, we could create a class hierarchy that perhaps could make both our classes inherit from a common one that had all the shared functionality and data. Another good approach would be to create an interface that enforced the methods/fields that they both share. However, since we are using TypeScript and it has a [very powerful type system](https://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types), we can try to implement one of the lesser pragmatic options by creating a Union type and an alias for it. Remember, we are trying to go for low friction solutions for our little project.

So let's go ahead and implement all this on our `GameApp` class.:

```ts
// creating an alias for our Union type that we can use
type WorldObjects = Player | ScrollingObject;

export class GameApp {
    public app: PIXI.Application;
   
    static PressedSpace : boolean = false;
    static Stage: PIXI.Container;
    static ActiveEntities: Array<WorldObjects> = new Array<WorldObjects>(); 
    static GameOver: boolean = false; 
    static ScrollSpeed : number = 3;
    
    static GroundPosition : number = 0; // ground position, given by screen height
    static Width : number = 0; // width of game screen, given by screen width

    // score of current run
    static Score : number = 0;

    // max score achieved in session
    static MaxScore : number = 0;
    
    // next score in which we should place an obstacle
    static ScoreNextObstacle : number = 0;
}

```

Objects whose types are of this Union type (`Player | ScrollingObject`) have accessible members that are defined both on our Player and on ScrollingObject types. As seen above, I created a new static member called `ActiveEntities` which is an array of `WorldObject`s. We now have to change `GameApp.Update()` to loop over this array. 

But before that, you might have noticed as well that I created a couple more variables for tracking score stuff. This will allow us to do a couple of things:

- Keep score for the current run
- Save the maximum score achieved in a session
- Know when the next obstacle should spawn (each time we create one, we set the score at which the next one should appear)

To keep the code simple for now, everytime we spawn an obstacle we'll spawn a cloud for aesthetics. There's no real reason why we couldn't add a more random element to these decorations later, but for now this will keep the code easier to study/describe.

Keeping that in mind, let's see what our current game update looks like:

```ts
    static Update(delta: number) {

        // if we haven't lost yet let's update everything, otherwise wait for spacebar press to restart game
        if (!this.GameOver)
        {
            // loop over object list
            for(var i = 0; i < GameApp.ActiveEntities.length; i++)
            { 
                // update entity
                var currentEntity = GameApp.ActiveEntities[i]; 
                currentEntity.Update(delta,GameApp.ActiveEntities);
            } 

            // current score update! 
            this.Score += delta * 1 / 6;
            
            // update the max score if necessary
            if (this.Score > this.MaxScore) { this.MaxScore = this.Score; }
            
            if (GameApp.ShouldPlaceWorldObject()) 
            {
                GameApp.AddObject(Math.random() < 0.75 ? "obstacleGrave" : "obstaclePumpkin", true);
                GameApp.AddObject("cloud", false);
                this.ScoreNextObstacle += this.GetScoreNextObstacle();
            }
        } 
        else 
        {
            if (GameApp.PressedSpace) 
            { 
                this.SetupGame();
            }
        }

        GameApp.PressedSpace = false;
    }
```

There's some code I defined there which has not been written out yet, however it felt like something that could be deferred, since meaning can be extracted out of what you can read above anyway.

Let's see how we can go ahead and define the implementation of the definitions written above.

### ShouldPlaceWorldObject()

This one's an easy one. We said we had `ScoreNextObstacle` defined for us to know when it was time to spawn a new obstacle, so let's define the check:

```ts
    static ShouldPlaceWorldObject(): boolean 
    {
        return (this.Score >=  this.ScoreNextObstacle);
    }
```
### GetScoreNextObstacle()

In the scoping section, we mentioned briefly that we wanted the game to spawn obstacles *from time to time* (if you played Chrome's dinosaur game, you know they appear randomly). There's a level of uncertainty in that statement that we can resolve by getting random values for the next time for an object to appear:

```ts
    static GetScoreNextObstacle(): number 
    {
        // let's have a minimum distance so objects don't appear next to each other
        let minimumDistance = 25;
        // we can define a level of difficulty to make it harder as we go on (limit is 5)
        let difficulty = Math.min(this.Score / 100, 5);
        // define the random value based on values above
        return (Math.random() * 10 - (difficulty * 4)) + minimumDistance;
    } 
```
### AddObject()

Since we are using this method to generalize adding decorations (i.e: non-solid objects) and obstacles, we let the caller decide which height (or Y position) it should be spawned at, but the X position should always be set as the game's width (at the right limit of the screen). 
The other thing we need to keep in mind is that if we want the object to update, we need to add it to the list of `ActiveEntities` so that the game keeps track of it (and to PixiJS's Stage object).

So the method would look something like this: 

```ts
    private static AddObject(spriteName: keyof Sprites, height: number, isSolid: boolean) {
        let obstacle = new ScrollingObject(spriteName, GameApp.Width, height, isSolid);
        GameApp.ActiveEntities.push(obstacle);
        GameApp.Stage.addChild(obstacle.sprite);
    }
```

## Collisions

We are at the point where our game feels pretty playable, we can run it and jump over objects. A "small" problem that you might have noticed, however, is that we cannot really bump into objects and lose the game, so we'll have to find a solution for that. 

Our sprites are loaded as 2D textures that fit inside a box which has a specific width and height. PixiJS gives us access to these values (and the current X and Y positions) through a rectangle structure, accessible through `PIXI.Sprite.getBounds()`. Imagine we have 2 rectangles of which we know these 4 values (i.e: X position, Y position, width and height), how can we tell if they are overlapping/colliding? One way of answering is by inversion (*When do they **not** collide?*): 

- If the the first rectangle's X position starts after the second rectangle's X extension ends, then they are definitely not colliding because of the orthogonal properties of the X and Y axes. 
    - This also applies the other way around (if the second rectangle's X position starts after the first one's X extension ends they don't collide)
- If the the first rectangle's Y position starts after the second rectangle's Y extension ends, the same applies.
    - And the other way around.

Since we know when they are **not** colliding, we can negate that and get the result.

**The above can be a little confusing**, so looking at code might help. Let's define a `CollidesWidth()` method on our `Player` class. Each of the four lines in the return statement is each of the cases stated above:

```ts
    private CollidesWith(otherSprite: PIXI.Sprite) 
    {
        // player's rectangle
        var ab = this.sprite.getBounds();

        // sprite we are checking against
        var bb = otherSprite.getBounds();
        
        return  !(ab.x > bb.x + bb.width || 
                ab.x + ab.width < bb.x || 
                ab.y + ab.height < bb.y ||
                ab.y > bb.y + bb.height);
    }
```

Since we have a way of checking for 1:1 collisions on `Player`, we'll need to modify the `Update()` method to check if it's colliding against any of all the solid `ActiveEntities`.

Let's add this at the end of the method:

```ts
 for(var i = 0; i < activeEntities.length; i++)
        { 
            var entity = activeEntities[i];
            if (entity.solid && this.CollidesWith(entity.sprite)) 
            {
                GameApp.GameOver = true;
            }
        }   
```

## Finishing touches

We are saving what the max and current score are, but we have not been displaying it so far. Luckily it's pretty easy to such thing in PixiJS. All we need to do is define a [`PIXI.Text`](https://pixijs.download/dev/docs/PIXI.Text.html) object, add it to the stage and adjust it as we need. Let's do it on our `GameApp` class:

```ts
export class GameApp {

    static ScoreText: PIXI.Text =  new PIXI.Text('Score: ', {fontSize:5 ,fill: '#aaff', align: 'center', stroke: '#aaaaaa', strokeThickness: 0 });

    [....]

    this.app.ticker.add((delta) => {
            GameApp.Update(delta);

            // if we didn't lose, display score and max score, otherwise show a "game over" prompt
            if (!GameApp.GameOver)
            {
                GameApp.ScoreText.text = "Score: " + (Math.ceil(GameApp.Score)) + " - Max Score: " + Math.ceil(GameApp.MaxScore) ;
            } 
            else 
            {
                GameApp.ScoreText.text = "Game over! You scored " + (Math.ceil(GameApp.Score)) +  ". Max Score: " + Math.ceil(GameApp.MaxScore)  + ". Press spacebar to restart.";
            }
        });
}
```

There are some other finishing touches and optimizations that I added to the code, feel free to review them on the repo (and ask away if you think I can help!). 

## Closing

Since it involves many subsystems, there are many, many ways to approach game development in general, and we only just barely scraped the surface of it. 

Hopefully this served as a good starting point which you can build upon. TypeScript and PixiJS are both very useful tools that made this very easy, but keep in mind that they are very powerful. There are a number of optimizations and features in terms of code and runtime that could be done and I would suggest exploring to improve your craft: Improve assets loading code by adding compile-time checks (such as for assets names), add different kinds of obstacles, make the character fall faster if the player presses the down arrow ke, recycle/pool objects so that there aren't many allocations, the possibilities are endless! 