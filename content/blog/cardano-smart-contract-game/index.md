---
title: Rock-paper-scissors game built in Cardano smart contracts
date: 2021-08-10
author: franleplant
description: "
  A quick high level overview of how you can write a state machine based smart contract
  in the upcoming Cardano's Plutus platform for Smart Contracts or Smart Transactions.
"
tags:
  - haskell
  - cardano
  - plutus
  - blockchain
  - smart contracts
  - smart transactions
  - game
  - state machines
  - plutus pioneer program
---

I've taken part of the second cohort of the [Plutus Pioneer Program](https://testnets.cardano.org/en/plutus-pioneer-program/) where one can
learn how to write Smart Contracts in [Cardano](https://cardano.org/) by using [Plutus](https://github.com/input-output-hk/plutus), set for main chain release in later 2021.

Cardano's version of Smart Contract is pretty "weird" coming from [Ethereum's](https://ethereum.org/en/) land,
and I plan to write about it later but it does provide some interesting abstractions that let
you express common patterns rather easily, in particular we are going to be covering
how you can model your DApp as a state machine and how can you express said model in Plutus
pretty easily.

Cardano's Smart Contracts are written in a Haskell library called Plutus, so put up your
functional programming hat and let's our hands dirty.

Note: at the time of writing there still some wrinkles in Cardano's Smart Contract platform, so
if you are not part of the Plutus Pioneer Program you might have some difficulties running this,
but hopefully this will be a nice showcase of how Cardano enables Smart Contracts.
Also, State Machines are just a higher level abstraction to write Smart Contracts in Cardano but
not at all the only way, so you are not limited to them.

## Quick intro to Plutus Concepts

Plutus Smart Contracts should be called _Smart Transactions_ because that is all you can really do with it on-chain.
You take a trivial input called the `Redeemer` to create a Transaction (Tx) that is going to be spending
UTxO (unspent transaction outputs) sitting at a `validator` script that might contain coins and Native Tokens plus
a trivial custom Data called the `Datum`. As a Smart Contract developer you define the `validator` script to allow or
deny someone else (the user of said Smart Contract) from _consuming_ UTxOs sitting at the script output.

Surprisingly this model allows pretty much all what you would expect from a Smart Contract platform, it is just modeled
differently and does comes with trade-offs. But it is similar to what `functional programming` brings to the table in terms
of predictability, testability and simpler interfaces comparing it to imperative or object oriented programming.

## Rock Paper Scissors

We are going write the Rock Paper Scissors game but in the blockchain, I eventually will
like to really deploy it and add a nice UI on top of it.

The model we are going to use makes the first player commit to a play but without telling exactly the
play by using a hash, then the second player plays, and finally the first player reveals and the "stake"
or "bet" is distributed. There are also play deadlines and reveal deadlines to make the contract safe.

Here is a complete state diagram of our game model.
The transitions are labeled with the `Redeemer`, the payload, constraints and checks.
The state are composed of `Datum` which holds trivial data plus the staked / bet value.

![State transition function](./states.jpg)

## On-chain state: `Datum`

As we said before, the `Datum` will be a trivial piece of data we are going to store `on-chain`.
In this particular case we are going to use it to store the current state of our state machine plus
the choices made by players.

`FinalState` will contain no `Datum` and no `value` (coins and Native Tokens)

```haskell

data GameDatum =
      -- at first we only store the hash of the player1's choice
      State0 ByteString
      -- then we store the hash of the player1's choice plus the player2's choice
    | State1 ByteString            GameChoice.GameChoice
      -- when resolving draws we store both choices unhashed
    | State2 GameChoice.GameChoice GameChoice.GameChoice
      -- the final state stores nothing
    | StateFinal
    deriving Prelude.Show
```

[GameDatum.hs](https://github.com/franleplant/plutus-pioneer-program-fork/blob/rock-paper-scissors/code/week07/src/RPS/GameDatum.hs)

## Transaction input: `Redeemer`

```haskell
data GameRedeemer =
        Player2Play       GameChoice.GameChoice
      | Player2NoRevealClaim
      | Player1RevealWin  ByteString GameChoice.GameChoice
      | Player1RevealDraw ByteString GameChoice.GameChoice
      | Player2ClaimDraw
      | Player1NoPlayClaim
    deriving Prelude.Show
```

These are the actions players can take to move the game state around.

[GameRedeemer.hs](https://github.com/franleplant/plutus-pioneer-program-fork/blob/rock-paper-scissors/code/week07/src/RPS/GameRedeemer.hs)

## On-chain validator: State Machine

This is the abstraction on top of a regular validator script that Plutus provides in order
to model the common case of a State Machine.

This is one of the arms of the transition function:

```haskell

-- this is the arm of a bigger case scenario
-- in here we pattern match State0 and the Player2Play redeemer,
-- which means that this is the transition from the State0
-- to a State1 where both player played but player1 hasn't revealed
-- their choice yet.
(State0 player1ChoiceHash, GameRedeemer.Player2Play player2Choice, staked)
  | lovelaces staked == Game.stake game ->
     let constraints = Constraints.mustBeSignedBy (Game.player2 game) <>
                       Constraints.mustValidateIn (to $ Game.playDeadline game)
         datum       = State1 player1ChoiceHash player2Choice
         stake       = (lovelaceValueOf $ 2 * Game.stake game)
      in Just (constraints , State datum stake)

```

`constraints` are a Plutus primitive that lets you express checks for the incoming transaction,
have in mind that this validator runs whenever some trivial address is trying to consume one of its
UTxOs, so in order to spend a UTxO the validator needs to agree with said action.

In this case we are only allowing this particular state change to happen if the transaction
trying to be applied is signed by player2 and it is done before the `playDeadline`.

We return the next State defined in `datum` and we duplicate the `stake` amount of Ada
because player2 needs to `stake` or `bet` in order to participate.

Additional checks can be done by implementing a `check` function, in some cases we use it
to check that the player claiming to be the winner is actually the winner.

Check the full file:

[Validator.hs](https://github.com/franleplant/plutus-pioneer-program-fork/blob/rock-paper-scissors/code/week07/src/RPS/Validator.hs)

## Off-chain code

Plutus is heavy on the Off-chain code, but it is safe to do so because the important constraints should
always be implemented on the `validators`.

The off-chain code, also written in Haskell and that will be later allowed to be run in the browser simply
allows two users to play this game. The first player _instantiates_ the contract by playing secretly and
adding a stake.

Player2 plays by finding an open game and playing and staking.

When the deadlines are passed a winner is decided and the reward (staked) is claimed.

Nothing illegal should be allowed to happen because our on-chain code (validator) should only allow
certain valid transactions to happen and nothing else.

## Outro

[Check the full code here](https://github.com/franleplant/plutus-pioneer-program-fork/tree/rock-paper-scissors/code/week07/src)

Cardano and Plutus are really fun and interesting and there is a lot of things coming their way
that make me super excited about.

I'm anxious about actually deploying this dummy game to the main net and add a nice UI on top of it.
