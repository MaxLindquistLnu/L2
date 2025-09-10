import { CaesarCipher } from "../CaesarCipher.js";

const cipher = new CaesarCipher(120);
const encrypted = cipher.encrypt("Hellh, 224ld!");
const decrypted = cipher.decrypt(encrypted);
console.log(encrypted); // Outputs: "Rovvy, 224vf!"
console.log(decrypted); // Outputs: "Hellh, 224ld!"
