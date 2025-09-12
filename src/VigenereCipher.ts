import { getCharInfo } from "./CharHelper.js";

/**
 * VigenereCipher class provides methods to encrypt and decrypt text using the Vigenère cipher technique.
 * It supports both uppercase and lowercase letters, and leaves non-alphabetic characters unchanged.
 */
export class VigenereCipher {
  keyword: string; // The keyword used for encryption/decryption
  alphabet: string; // The alphabet used for shifting

  /**
   * Creates a new VigenereCipher instance with the given keyword.
   * @param keyword The keyword to use for the cipher
   */
  constructor(keyword: string) {
    this.keyword = keyword.toLowerCase();
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(str: string): string {
    let normalizedKey = this.normalizeKey(this.keyword, str.length);
    let keyIndex = 0;
    return str
      .split("")
      .map((char) => {
        // Determine the shift for this character from the normalized key
        const shift = this.alphabet.indexOf(
          (normalizedKey[keyIndex] ?? "").toLowerCase()
        );
        if (this.isLetter(char.toLowerCase())) keyIndex++; // Only increment keyIndex for letters
        return this.shiftCharForward(char, shift);
      })
      .join("");
  }

  decrypt(str: string): string {
    let normalizedKey = this.normalizeKey(this.keyword, str.length);
    let keyIndex = 0;
    return str
      .split("")
      .map((char) => {
        // Determine the shift for this character from the normalized key
        const shift = this.alphabet.indexOf(
          (normalizedKey[keyIndex] ?? "").toLowerCase()
        );
        if (this.isLetter(char.toLowerCase())) keyIndex++; // Only increment keyIndex for letters
        return this.shiftCharBackward(char, shift);
      })
      .join("");
  }

  shiftCharForward(char: string, shift: number): string {
    const { isUpperCase, index } = getCharInfo(char, this.alphabet);
    if (index === -1) return char;

    const shiftedIndex = (index + shift) % this.alphabet.length;
    const shiftedChar = this.alphabet[shiftedIndex] ?? char;
    return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
  }

  shiftCharBackward(char: string, shift: number): string {
    const { isUpperCase, index } = getCharInfo(char, this.alphabet);
    if (index === -1) return char;

    let newIndex = (index - shift) % this.alphabet.length;
    if (newIndex < 0) newIndex += this.alphabet.length;
    const newChar = this.alphabet[newIndex] ?? char;
    return isUpperCase ? newChar.toUpperCase() : newChar;
  }

  isLetter(char: string): boolean {
    return this.alphabet.includes(char);
  }

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
}
