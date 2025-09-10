import { CaesarCipher } from "../CaesarCipher.js";
import { VigenereCipher } from "../VigenereCipher.js";

// Vigenere Cipher Example
const vigenereCipher = new VigenereCipher("AYUSH");
const vigenereEncrypted = vigenereCipher.encrypt("aslsaknvneqo");
const vigenereDecrypted = vigenereCipher.decrypt(vigenereEncrypted);
console.log(vigenereEncrypted); // Outputs: "Lxfopv ef rnhr!"
console.log(vigenereDecrypted); // Outputs: "GEEKSFORGEEKS"

const cipher = new CaesarCipher(120);
const encrypted = cipher.encrypt("Hellh, 224ld!");
const decrypted = cipher.decrypt(encrypted);
console.log(encrypted); // Outputs: "Rovvy, 224vf!"
console.log(decrypted); // Outputs: "Hellh, 224ld!"
