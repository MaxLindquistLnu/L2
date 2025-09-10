export class CaesarCipher {
  shift: number;
  alphabet: string;

  constructor(shift: number) {
    this.shift = shift;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }
  encrypt(str: string): string {
    return str
      .split("")
      .map((char) => {
        const isUpperCase: boolean = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        const index = this.alphabet.indexOf(lowerChar);
        if (index === -1) return char; // Non-alphabetic characters are not changed
        const shiftedIndex = (index + this.shift) % this.alphabet.length;
        const shiftedChar = this.alphabet[shiftedIndex] ?? char;
        return isUpperCase ? shiftedChar.toUpperCase() : shiftedChar;
      })
      .join("");
  }

  decrypt(str: string): string {
    return str
      .split("")
      .map((char) => {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        const index = this.alphabet.indexOf(lowerChar);
        if (index === -1) return char;
        let newIndex = (index - this.shift) % this.alphabet.length;
        if (newIndex < 0) newIndex += this.alphabet.length;
        const newChar = this.alphabet[newIndex] ?? char;
        return isUpperCase ? newChar.toUpperCase() : newChar;
      })
      .join("");
  }
}
