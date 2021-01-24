---
title: "Static Typing Ruby: Adopting Sorbet in a Rails Application"
date: "2021-01-22"
---

I have long had a fascination with programming languages with strong type
systems. Haskell, through [Learn You a Haskell][], was my first exposure to
what a strong type system could really do; from there, I found Rust, Scala, and
TypeScript, just to name a few. Robust type systems and type checking help
eliminate whole categories of errors, such as null checks, missing methods, or
ensuring inputs come from a constrained set of allowed values, that would be
error-prone and, frankly, tiring to check manually. Tired humans make errors,
but computers never get tired.

[learn you a haskell]: http://learnyouahaskell.com/

Ruby is fundamentally an immensely dynamic language, and for a long time, it
seemed like a type system for Ruby would be impossible. So, of course, I was
very excited with Stripe's [open-source release][] of [Sorbet][], a "fast,
powerful type checker designed for Ruby," in 2019.

[open-source release]: https://sorbet.org/blog/2019/06/20/open-sourcing-sorbet
[sorbet]: https://sorbet.org/

In this post, I'll go over some of the tools I used when adding Sorbet to an
existing Rails project. I will also cover some of the high-level benefits of
static type and how those benefits were realized.

## Why static types?

Ruby is a dynamic language, and the flexibility that it affords is often
praised as one of Ruby's defining features. Before we dive into setting up
Sorbet, it's useful to consider what we hope to gain from adding static types
to Ruby.

First is more runtime safety. In Ruby, any message can be sent to any object.
The Ruby interpreter will happily accept `gear.work`, even if `gear` has no
`work` method. You would only find out when the code runs and a `NoMethodError`
pops up. In a small application, this might not be an issue. But in a large
apps with many developers merging PRs and committing changes, it becomes
unreasonable to expect everyone to be aware of everything at all times. Static
typing helps us enforce these interfaces automatically, and prevent these
errors from ever being committed or ever reaching customers.

Second is faster feedback for errors. If there's an error in your code, such as a misspelled constant name, or a message being sent to an unexpected value, you would usually not find out until the code actually runs. Depending on how long it takes for your application to boot or how long it takes to run a test, this could mean tens of seconds to a minute of time lost, or more. And that's assuming your tests actually exercise the code in a way that produces the error. With a static type checker, we can offload the burden of thinking about all these edge cases to the type checker. If we write code that could contain an error, the type checker tells us immediately, without needing to run, or indeed even write, tests to find the error.

Third is stronger interfaces and better documentation. A Ruby method on its own communicates no more information than the number of arguments it accepts. There is no information on what the method returns; no information on if an argument should be an Integer, a Float, a String, or something else. With static type definitions, we can not only provide more information about how a method must be used, but ensure that the interface is not broken. Furthermore, as the interfaces change over time, those changes ripple naturally through the type system, guiding refactoring to every consumer of the interface.

## Adding the gems

The first step is to add Sorbet to the Gemfile. Sorbet is actually composed of two gems: `sorbet` and `sorbet-runtime`.

```ruby
gem 'sorbet', group: :development
gem 'sorbet-runtime'
```

What's the difference? sorbet provides the command-line tools and libraries related to statically type checking Ruby code, and is only necessary in the dev environment. sorbet-runtime, on the other hand, provides runtime utilities, most importantly the sig decorator for defining method signatures, necessary for runtime type checking.
