Why typescript?

TODO: use the presentation I gave inside my company.

- static types
- statically verify partially your program correctness (verifies that the interfaces are respected which is a big thing today in the modern dev world where we are glorified plumbers (serach for SCIP authors comments about this), verifies that your app is working together as expected, avoids undefined errors (TODO look up for more info), you express things such as lodash.pick to be statically typed and to check that the keys are actually part of the object, etc)
- fearless refactoring, make your change and then flow with the type checker
- documentation that is statically tied to your code i.e. a better form of jsdocs. Complex apps require this.
- different mind set for front end developers dynamically lang developers: they need to think about interfaces, parameters, shapes and forms smoething that is not usually done in the weakly typed js world.
- they complement your tests, they take some load out, they cover things that will be very costly to implement in tests, they also cover partially integration tests, but they definetively do not replace them.
- tooling: great inline documentation and semantic auto complete, you get the interface of functions whle you type, this is super useful in the modern dev world where we use docens of libs and sometimes we need to hunt for docs everywhere.

* talk about static types per se, talk about haskell and rust and java and c, talk about program verification, talk about maintainance and documentation. etc
