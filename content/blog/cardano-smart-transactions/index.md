---
title: Cardano will never have smart contracts
date: 2021-08-31
author: franleplant
description: "
  Let's talk about the upcoming Cardano Alonzo hard fork and what we are going to see in the future
"
tags:
  - cardano
  - smart contracts
  - smart transactions
  - plutus
  - blockchain
---

[Cardano’s][10] take on [DApps][13] is substantially different from that
of [Ethereum][14], the top DApp platform today, and by taking this
route Cardano achieves better correctness guaranties that aim
to prevent costly bugs and exploits.

Cardano will never have smart contracts, instead it will have
**Smart Transactions**, which is a much more accurate name
for its DApp platform in my opinion.

Cardano uses the [EUTxO][11] model which stands for **Extended Unspent Transaction Output**.
This might ring a bell because the [UTxO][12] model is what [Bitcoin][15] pioneered and to a point
_extended_ in order to allow Bitcoin’s limited scripting capabilities.
But Cardano takes it all the way and by _extending_ the UTxO model, it achieves
full blown DApp platform status.

## EUTxO

The UTxO model, at a high level, is composed of **transactions**
and **unspent transaction outputs**.

Transactions or **tx** consume unspent outputs from previous transactions
and produce new unspent outputs, starting from the genesis transaction.

![utxo diagram](./utxo.jpg)

TODO INSERT DRAWING

- Alice and Bob are just convenient aliases for their cryptographic Public Keys.
- **C** means some coin.
- There are no fees in this simple example.
- Any address, i.e. Alice, may have multiple utxos.

All utxos for a given account make up the available balance of said account.
And all the spent outputs are the spending history of that account.
When Alice sends Bob _5 coins_ she simply consumes one utxo of 5 coins in her account
and produce a new utxo of 5 coins in Bob’s account through a transaction.

To know the full balance of a given account you would need to query the blockchain
for every utxo for that account or _sitting at that account_.

From this simple explanation you can have a better understanding on why Bitcoin
transaction regularly have "change", because if Alice has only a utxo with 10 coins
and wants to send 5 coins to Bob then that _entire_ utxo will be consumed by a transaction
and two new utxos will be created, one for Bob with 5 coins and second one with Alice's _change_:
5 coins.

The **EUTxO** model only adds a couple of things to enable DApps:

### Datum

Utxos can contain a `Datum` which is an arbitrary piece of data that is stored on-chain.
This is typically used as part of your DApp's state.
Let's say your DApp is a Price Oracle, then where would you store price feeds?
You guessed it: in the `Datum`.

### Script addresses

Special script addresses are allowed. They behave pretty much like a regular address and
can receive and spend utxos. The script itself is a `Validator` function written in Haskell and
[Plutus][18] that runs on-chain every time someone tries to _spend_ utxos sitting at the script address.
This is the main on-chain logic in Cardano's DApps, it is the closest to a Ethereum's smart contract
but it is radically different in scope and functionality.

Scripts act as pure functions that receive the transaction where the utxo spending is happening,
the `Redeemer` (explained next) and the entire utxo that someone is trying to spend which contains
any coins and Native Tokens balances together with a `Datum` if any.

Scripts don't have access to anything else, they cannot create transactions, only validate them, they
cannot call other things on chain. These are the main differences with Ethereum's Smart Contracts.

> Side note: Native Tokens are any custom made token that Cardano treats as Ada, this abstracts away
> the contracts needed to deploy these tokens (i.e. look at the [ERC20][16] standard contract) and reduces the
> fees for operating with these tokens to the ground (compared to what a [USDC][17] transaction can cost
> in Ethereum's mainnet).

### Reedemer

The `Redeemer` is an arbitrary piece of data you can pass to the validator when creating a transaction
that spends utxos from that validator, it is a way of parametrizing the validator to allow things such as
state machines and different actions being performed in a DApp.

## Full blown DApps platform

With all these _extensions_ Cardano achieves a full blown DApp platform with
similar capabilities to Ethereum and others but with stronger correctness guarantees
making it more difficult for developers to royally screw it up as it has been shown
[time and time again][21].

This model requires thicker clients that have more things to do than in Ethereum's DApps,
so you could say that Cardano DApps are heavier on the client than on the _server_,
but all this happens without sacrificing correctness and the dev toolkit even allows to write
client side code in the same language, Haskell, and with the same tools, Plutus, than the
on-chain code, making it simpler to share logic and ensure your code is correct.

## PAB: Plutus Application Backend

The final piece of the puzzle is the [PAB][19] which will allow DApps to run directly in the browser
like Ethereum DApps. The PAB will be released soon. In the mean time developers will
need to run backend services in order to communicate with the blockchain so
DApps are still possible even without the PAB.

## Conclusion

I am really excited about Cardano's potential as a DApp platform, together with the EUTxO model
and features such as Native Token that allow for very easy and cheap custom coins (like [USDC][17] or [NFTs][20]
being treated like Ada with the same low fees) the future does seem bright for Cardano.

> ## **Cardano will never have smart contracts, it will have Smart Transactions and will have full blow support for DApps**

[10]: https://cardano.org
[11]: https://github.com/Emurgo/Emurgo-Research/blob/master/smart-contracts/Unlocking%20The%20Potential%20Of%20The%20UTXO%20Model.md
[12]: https://en.wikipedia.org/wiki/Unspent_transaction_output
[13]: https://ethereum.org/en/dapps/#what-are-dapps
[14]: https://ethereum.org/en/
[15]: https://bitcoin.org/en/
[16]: https://ethereum.org/en/developers/docs/standards/tokens/erc-20/
[17]: https://www.circle.com/en/usdc
[18]: https://github.com/input-output-hk/plutus
[19]: https://iohk.io/en/blog/posts/2021/04/13/plutus-what-you-need-to-know/
[20]: https://ethereum.org/en/nft/
[21]: https://www.google.com/search?q=ethereum+dapp+exploits
