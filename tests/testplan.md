# Testplan

## Manual Test Cases - CaesarCipher

| #   | Cipher Shift | Input            | Expected Output | Notes                          |
| --- | ------------ | ---------------- | --------------- | ------------------------------ |
| 1   | 3            | `abc`            | `def`           | Basic encryption               |
| 2   | 3            | `def`            | `abc`           | Basic decryption               |
| 3   | 3            | `xyz`            | `abc`           | Wrap-around encryption         |
| 4   | 3            | `abc`            | `xyz`           | Wrap-around decryption         |
| 5   | 5            | `Hello`          | `Mjqqt`         | Uppercase letters preserved    |
| 6   | 2            | `Zoo`            | `Bqq`           | Mixed case with wrap-around    |
| 7   | 4            | `Hello, World!`  | `Lipps, Asvph!` | Non-alphabetic chars unchanged |
| 8   | -3           | `abc`            | `xyz`           | Negative shift                 |
| 9   | 29           | `abc`            | `def`           | Large shift (29 % 26 = 3)      |
| 10  | 5            | `""` (empty str) | `""`            | Empty input                    |

## Manual Test Cases - VigenereCipher

| #   | Keyword   | Input            | Expected Output | Notes                                      |
| --- | --------- | ---------------- | --------------- | ------------------------------------------ |
| 1   | `key`     | `attackatdawn`   | `kxriegkxbpni`  | Basic lowercase encryption                 |
| 2   | `key`     | `kxriegkxbpni`   | `attackatdawn`  | Basic lowercase decryption                 |
| 3   | `abc`     | `abc`            | `abc`           | Keyword `abc` acts as no shift on letters  |
| 4   | `abc`     | `xyz`            | `xza`           | Wrap-around encryption                     |
| 5   | `abc`     | `XyZ`            | `XzB`           | Uppercase preserved                        |
| 6   | `key`     | `Hello, World!`  | `Rijvs, Uyvjn!` | Non-alphabetic characters unchanged        |
| 7   | `a`       | `Test`           | `Test`          | Keyword `a` results in no change           |
| 8   | `longkey` | `short`          | `dvbjx`         | Key longer than input, only prefix is used |
| 9   | `key`     | `""` (empty str) | `""`            | Empty input remains empty                  |

## Manual Test Cases - AtbashCipher

| #   | Input            | Expected Output | Notes                          |
| --- | ---------------- | --------------- | ------------------------------ |
| 1   | `abc`            | `zyx`           | Basic lowercase encryption     |
| 2   | `zyx`            | `abc`           | Basic lowercase decryption     |
| 3   | `xyz`            | `cba`           | End of alphabet encryption     |
| 4   | `cba`            | `xyz`           | End of alphabet decryption     |
| 5   | `Hello`          | `Svool`         | Uppercase letters preserved    |
| 6   | `World`          | `Dliow`         | Mixed case transformation      |
| 7   | `Hello, World!`  | `Svool, Dliow!` | Non-alphabetic chars unchanged |
| 8   | `aZ`             | `zA`            | First and last letters         |
| 9   | `nopqrs`         | `mlkjhi`        | Middle alphabet letters        |
| 10  | `""` (empty str) | `""`            | Empty input                    |
