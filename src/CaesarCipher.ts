import { getCharInfo } from "./CharHelper.js";

/**
 * CaesarCipher class provides methods to encrypt and decrypt text using the Caesar cipher technique.
 * It supports both uppercase and lowercase letters, and leaves non-alphabetic characters unchanged.
 */
export class CaesarCipher {
  shift: number; // The number of positions to shift each letter
  alphabet: string; // The alphabet used for shifting

  /**
   * Creates a new CaesarCipher instance with the given shift value.
   * @param shift The number of positions to shift each letter
   */
  constructor(shift: number) {
    this.shift = shift;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  encrypt(str: string): string {
    return str
      .split("")
      .map((char) => {
        // Get character info (case and index in alphabet)
        const { isUpperCase, index } = getCharInfo(char, this.alphabet);
        if (index === -1) return char; // Non-alphabetic characters are not changed

        // Calculate the shifted index, wrapping around the alphabet
        const shiftedIndex = (index + this.shift) % this.alphabet.length;
        const shiftedChar = this.alphabet[shiftedIndex] ?? char;
        // Restore original case
        return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
      })
      .join("");
  }

  decrypt(str: string): string {
    return str
      .split("")
      .map((char) => {
        // Get character info (case and index in alphabet)
        const { isUpperCase, index } = getCharInfo(char, this.alphabet);
        if (index === -1) return char; // Non-alphabetic characters are not changed

        // Calculate the shifted index for decryption, wrapping around the alphabet
        let newIndex = (index - this.shift) % this.alphabet.length;
        if (newIndex < 0) newIndex += this.alphabet.length;
        const newChar = this.alphabet[newIndex] ?? char;
        // Restore original case
        return isUpperCase ? newChar.toUpperCase() : newChar;
      })
      .join("");
  }
}
