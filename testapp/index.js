import { CaesarCipher } from "../src/CaesarCipher.js";

const cipher = new CaesarCipher(5);
const encrypted = cipher.encrypt("Hello, World!");
console.log(encrypted); // Mjqqt, Btwqi!