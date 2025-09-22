# Testplan

## Manual Test Cases - CaesarCipher

| #  | Cipher Shift | Input            | Expected Output | Notes                          |
| -- | ------------ | ---------------- | --------------- | ------------------------------ |
| 1  | 3            | `abc`            | `def`           | Basic encryption               |
| 2  | 3            | `def`            | `abc`           | Basic decryption               |
| 3  | 3            | `xyz`            | `abc`           | Wrap-around encryption         |
| 4  | 3            | `abc`            | `xyz`           | Wrap-around decryption         |
| 5  | 5            | `Hello`          | `Mjqqt`         | Uppercase letters preserved    |
| 6  | 2            | `Zoo`            | `Bqq`           | Mixed case with wrap-around    |
| 7  | 4            | `Hello, World!`  | `Lipps, Asvph!` | Non-alphabetic chars unchanged |
| 8  | -3           | `abc`            | `xyz`           | Negative shift                 |
| 9  | 29           | `abc`            | `def`           | Large shift (29 % 26 = 3)      |
| 10 | 5            | `""` (empty str) | `""`            | Empty input                    |
