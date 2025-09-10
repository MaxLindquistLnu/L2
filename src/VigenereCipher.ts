export class VigenereCipher {
    keyword: string;
    alphabet: string;

    constructor(keyword: string) {
        this.keyword = keyword.toLowerCase();
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    }

    encrypt(str: string): string {}

    decrypt(str: string): string {}

    shiftCharForward(char: string, shift: number): string {}

    shiftCharBackward(char: string, shift: number): string {}

    isLetter(char: string): boolean {
        return this.alphabet.includes(char);
    }

    normalizeKey(key: string, length: number): string {
        let normalizedKey = "";
        for (let i = 0, j = 0; i < length; i++) {
            const currentChar = key[j] ?? '';
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