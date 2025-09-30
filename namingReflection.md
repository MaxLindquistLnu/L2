## Naming reflection (Chapter 2 – Clean Code)

| Name | Explanation | Reflection and rules from Clean Code |
|------|-------------|--------------------------------------|
| `CaesarCipher` | Class for encrypting and decrypting with the Caesar cipher. | **Use Intention-Revealing Names:** The name clearly shows what the class does. **Avoid Disinformation:** Nothing misleading here. I consider this a good name. |
| `VigenereCipher` | Class for encrypting and decrypting with the Vigenère cipher. | **Use Problem Domain Names:** The name uses the correct terminology from cryptography, which makes it easy to understand for programmers. |
| `CharHelper` | Utility class with static methods for character handling (e.g., `isLetter`, `shiftChar`). | **Don’t Add Gratuitous Context:** The word “Helper” is too generic. A better name might be `CharUtils` or even more specific like `AlphabetUtils`. |
| `encrypt` | Public method in both cipher classes for encryption. | **Use Verbs for Functions:** Good use of a verb. The method does exactly what the name suggests. |
| `decrypt` | Public method in both cipher classes for decryption. | **Consistency:** Having `encrypt`/`decrypt` in both cipher classes is consistent and predictable. A weakness is that the parameter names could sometimes be clearer (`text`, `key` instead of `input`, `shift`). |

