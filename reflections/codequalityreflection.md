# Code Quality Reflection

## When I Tried to Fix Things

The most frustrating part is realizing how my "solutions" just created new problems. I noticed code duplication between cipher classes, so I made `CharHelper` to fix it. But I gave it a garbage name and unclear responsibilities, so instead of solving duplication cleanly, I just created this confusing utility thing.

## My Real Problem: Inconsistency

Looking at both reflections, my biggest issue isn't that I don't know what good code looks like - it's that I'm inconsistent about writing it. Sometimes I'd use descriptive names, other times generic variables. Some functions are focused, others are sprawling messes.

It's like I knew what to do but couldn't stick with it consistently.

## The Positive Side

The cool thing is realizing how Uncle Bob's principles work together. Good names make it easier to spot when functions do too much. Small functions are easier to name well. When I got both right (like basic `encrypt`/`decrypt` methods), the code is actually readable. When I got both wrong (`normalizeKey`), it's a disaster.

## What I Learned

The biggest takeaway isn't learning new rules - it's realizing I can spot problems in my own code once I know what to look for. My issue isn't knowledge, it's discipline.

My code works fine, but "works" and "is good" are totally different things. I need to start caring about both.
