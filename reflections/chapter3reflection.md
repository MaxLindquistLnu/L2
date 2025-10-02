# Chapter 3 Reflection: Functions

Looking back at my cipher code through the lens of Clean Code Chapter 3, I'm honestly a bit embarrassed by some of what I found. Sure, there are things I did well, but there are also some glaring issues that I somehow missed while writing the code.

## What I Actually Got Right

I'm pretty happy with how small most of my functions turned out. The `getCharInfo` helper is a good example - it just grabs character information and that's it. My `encrypt` and `decrypt` methods are also reasonably short and don't try to do too much at once.

I think I did okay with naming too. When I see functions like `shiftCharForward` or `normalizeKey`, it's pretty obvious what they're supposed to do. Same goes for variables like `isUpperCase` and `shiftedIndex` - they kind of explain themselves.

Most functions stick to doing one thing, which Uncle Bob really emphasizes. The `CharHelper.getCharInfo` function just analyzes characters, and the cipher methods handle their own specific logic without getting mixed up.

## Where I Really Messed Up

But here's where things get uncomfortable. My `normalizeKey` method in the Vigenère cipher is honestly a mess. It's trying to juggle multiple variables (`i`, `j`, `length`) and has this convoluted loop that's doing way too many things at once. Reading it now, I can barely follow my own logic - which is never a good sign.

I also realized I have this annoying duplication problem. Even after creating the `CharHelper`, my `encrypt` and `decrypt` methods in the Caesar cipher are basically doing the same thing with slight variations. They both split strings, map characters, and join everything back together. It's exactly the kind of repetition that makes maintenance a nightmare.

## The Worst Offender

If I'm being brutally honest, this `normalizeKey` function is probably my biggest Clean Code failure:

```typescript
normalizeKey(key: string, length: number): string {
  let normalizedKey = "";
  for (let i = 0, j = 0; i < length; i++) {
    const currentChar = key[j] ?? "";
    if (this.isLetter(currentChar)) {
      normalizedKey += currentChar;
      j++;
    }
    if (j === key.length) {
      j = 0;
    }
  }
  return normalizedKey;
}
```

Looking at this now, it's doing way too much:

1. Looping through some target length
2. Cycling through key characters
3. Checking if characters are letters
4. Building up a result string

I should have broken this down into smaller pieces. Maybe one function to cycle through the key, another to filter letters, etc. It's exactly what Uncle Bob means when he talks about functions doing "one thing."

## Where I Don't Fully Agree

I have to admit, while I mostly buy into Uncle Bob's advice, I'm not 100% convinced about his super strict "do one thing" rule in every situation. Sometimes it actually makes sense to combine related operations like checking case and shifting characters. When things are conceptually linked, splitting them up might make the code harder to follow in my opinion, not easier.

That said, I can't use this as an excuse for my messy `normalizeKey` function. That thing clearly needs to be broken down regardless of my philosophical differences.

## What I Learned

This whole exercise has been pretty humbling, to be honest. My code works, sure, but that doesn't mean it's good code. There's a big difference between "it compiles and runs" and "it's maintainable and readable."

The biggest takeaway for me is that I need to be more critical of my own work while I'm writing it, not just after reading a book about clean code. Some of these issues seem so obvious now, but I completely missed them when I was in the middle of coding.
