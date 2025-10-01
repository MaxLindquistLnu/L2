## Methods reflection (Chapter 3 – Clean Code)

| Method name | Location | Lines (approx.) | Reflection |
|-------------|----------|-----------------|-------------|
| `CaesarCipher.encrypt` | In `CaesarCipher.ts` | ~15 | **Do One Thing:** The method only performs encryption, but it includes several `if` statements for handling letters and non-letters. It could be simplified by moving logic into `CharHelper`. |
| `CaesarCipher.decrypt` | In `CaesarCipher.ts` | ~15 | Almost the same as `encrypt`, but with reversed shifting. **Avoid Duplication:** Could use a shared private method to reduce duplicate code. |
| `VigenereCipher.encrypt` | In `VigenereCipher.ts` | ~20 | **Function Arguments:** Two arguments (`text`, `key`) are fine. However, the method does both key expansion and encryption. Key expansion could be extracted into a separate method. |
| `VigenereCipher.decrypt` | In `VigenereCipher.ts` | ~20 | Same issue: it duplicates logic from `encrypt` but reverses the shift. **Extract Method:** Could be split up to make it shorter and easier to follow. |
| `CharHelper.shiftChar` | In `CharHelper.ts` | ~12 | **Do One Thing:** It shifts a character, but also handles both uppercase and lowercase letters in the same method, making it slightly longer than necessary. Could be split into two helper functions. |
