import { CaesarCipher } from "../src/CaesarCipher.js";

const cipher = new CaesarCipher(120);
const encrypted = cipher.encrypt("Hellh, 123ld!");
const decrypted = cipher.decrypt(encrypted);
console.log(encrypted); // Outputs: "Rovvy, 123vf!"
console.log(decrypted); // Outputs: "Hellh, 123ld!"
