export class VigenereCipher {
    keyword: string;
    alphabet: string;

    constructor(keyword: string) {
        this.keyword = keyword.toLowerCase();
        this.alphabet = "abcdefghijklmnopqrstuvwxyz";
    }
}