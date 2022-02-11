
# Wordy 🟨🟩🟨🟩🟩 

**YAWC - Yet another Wordle clone**

Aims to preserve the original intent of wordle with creative liberties taken with respect to gameplay elements.

This was a code kata of sorts, so there are no guarantees to usability or stability.

## Purpose

This intends not to compete or replace the original in any way, shape or form. This however does aim to preserve much of what the original brought with changes that I personally wanted to see implemented. I will be leaving this to be FOSS so others may enjoy/change/learn from.

## Changes

- You cannot reuse letters which have been revealed as not present in the hidden word.
- Puzzles are pseudorandom generated along with a seed that can be shared with your puzzle results so other people may play the same puzzle.
- You can generate a new puzzle only once you have won/lost, streaks are treated like a rogue-like condition. (original gauntlet anyone?)
- Uses indexeddb for storage.
- Uses WebCrypto for obfuscating solutions in indexeddb. **Not for secure purposes, this was added just for my own and others sakes that makes it just mildly more work than just solving the puzzle!**
- Fully offline PWA.

## Built with

- LitElement
