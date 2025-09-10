export class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }
  encrypt(str) {
    return str
      .split('')
      .map((char) => {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        const index = this.alphabet.indexOf(lowerChar);
        if (index === -1) return char;
        const newIndex = (index + this.shift) % this.alphabet.length;
        const newChar = this.alphabet[newIndex];
        return isUpperCase ? newChar.toUpperCase() : newChar;
      })
      .join('');
  }

  decrypt(str) {
    return str
      .split('')
      .map((char) => {
        const isUpperCase = char === char.toUpperCase();
        const lowerChar = char.toLowerCase();
        const index = this.alphabet.indexOf(lowerChar);
        if (index === -1) return char;
        let newIndex = (index - this.shift) % this.alphabet.length;
        if (newIndex < 0) newIndex += this.alphabet.length;
        const newChar = this.alphabet[newIndex];
        return isUpperCase ? newChar.toUpperCase() : newChar;
      })
      .join('');
  }
}