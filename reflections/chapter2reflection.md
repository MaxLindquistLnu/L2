## Chapter Reflection – Chapter 2

After reading Chapter 2 of _Clean Code_, I started second-guessing pretty much every name I used in my cipher project. Uncle Bob really hammers home how important good naming is, and honestly, I think I did okay in some places but totally missed the mark in others.

## The Stuff I'm Actually Proud Of

I'm pretty happy with my class names like `CaesarCipher`, `VigenereCipher`, and `AtbashCipher`. You can immediately tell what each one does without having to dig into the code. They're also easy to say out loud (which apparently matters more than I thought) and would be pretty easy to find if you were searching through a big codebase.

My method names like `encrypt`, `decrypt`, `shiftCharForward`, and `shiftCharBackward` turned out okay too. If you see `shiftCharForward(char, shift)`, you can probably figure out what's happening even without reading the implementation.

Some of my variable names like `isUpperCase`, `shiftedIndex`, and `normalizedKey` are pretty self-explanatory, which is what Uncle Bob keeps pushing for.

## Where I Totally Messed Up

But then there's `CharHelper`. "Helper" is exactly the kind of generic, meaningless word that Uncle Bob tears apart in the chapter. It tells you absolutely nothing about what the class actually does. I could have called it `CharacterAnalyzer` or `AlphabetUtility` or something that actually describes its purpose, but I went with the lazy option.

I also have this annoying habit of using vague parameter names. Like `shift` instead of `shiftValue` or `input` instead of `plainText`. It seemed fine when I was writing it, but now I realize there are way better naming options.

The worst part is probably my loop variables. I've got `i` and `j` scattered around, especially in that messy `normalizeKey` method. Uncle Bob is pretty clear that single-letter variable names are usually a bad idea, and I can see why now. Every time I see `i++` I have to mentally trace back to figure out what `i` is actually counting.

## My Consistency Issues

Another thing that's bugging me now is how inconsistent I was with naming. Sometimes I call the input string `str`, other times it's `input`, and I think I even used `text` somewhere. Uncle Bob talks about picking one word per concept and sticking with it, but I apparently didn't get that memo while coding.

The `transform` method in my AtbashCipher is way too generic too. "Transform" could mean literally anything. Something like `reverseAlphabetMapping` would actually tell you what's happening.

## The Mental Gymnastics Problem

One of Uncle Bob's points that really hit me was about mental mapping. I'm definitely guilty of making readers do mental gymnastics to follow my code. When I use variables like `i`, `j`, and `index` in my normalizeKey method, anyone reading it has to constantly keep track of what each one represents. That's just unnecessary brain work that better names could eliminate (In this case the method should have been broken down into multiple methods instead).

## Why My Names Suck for Searching

I also realized my naming makes searching through code a pain. If I wanted to find everywhere I deal with alphabet positions, searching for "index" would give me a million useless results. But if I had used names like `alphabetPosition` or `characterIndex`, finding the relevant code would be so much easier.

## What I Learned

I always thought naming was the easy part of programming and not that important - just slap a label on something and move on. But Uncle Bob's chapter made me realize that good naming is actually really hard and super important.

My code works fine, but the naming could definitely be way better. I need to stop being lazy with generic names like "Helper" and actually think about what things do. I also need to be way more consistent - pick a naming style and stick with it instead of randomly switching between `str`, `input`, and whatever else I feel like using.