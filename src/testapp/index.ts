import { Cipher } from "../Cipher.js";

const cipher = new Cipher();

// Example usage:
console.log(cipher.encryptCaesar(3, "Hello, World!")); // "Khoor, Zruog!"
console.log(cipher.decryptCaesar(3, "Khoor, Zruog!")); // "Hello, World!"
console.log(cipher.encryptVigenere("key", "Hello, World!")); // "Rijvs, Uyvjn!"
console.log(cipher.decryptVigenere("key", "Rijvs, Uyvjn!")); // "Hello, World!"
console.log(cipher.encryptAtbash("He  lO")); // "SvoL"
console.log(cipher.decryptAtbash("Sv  123ool")); // "Hello"
