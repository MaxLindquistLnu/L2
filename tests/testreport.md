# Test Report

### Project: Cipher module

### Date: 2025-10-02

### Tester: Max Lindquist

### Test Objective: Verify correctness of encryption/decryption implementations for Caesar, Vigenère, and Atbash ciphers.

## Detailed Results

### Caesar Cipher

| #   | Cipher Shift | Input           | Expected Output | Actual Output   | Result  | Notes                       |
| --- | ------------ | --------------- | --------------- | --------------- | ------- | --------------------------- |
| 1   | 3            | `abc`           | `def`           | `def`           | ✅ Pass | Basic encryption            |
| 2   | 3            | `def`           | `abc`           | `abc`           | ✅ Pass | Basic decryption            |
| 3   | 3            | `xyz`           | `abc`           | `abc`           | ✅ Pass | Wrap-around encryption      |
| 4   | 3            | `abc`           | `xyz`           | `xyz`           | ✅ Pass | Wrap-around decryption      |
| 5   | 5            | `Hello`         | `Mjqqt`         | `Mjqqt`         | ✅ Pass | Uppercase preserved         |
| 6   | 2            | `Zoo`           | `Bqq`           | `Bqq`           | ✅ Pass | Mixed case with wrap-around |
| 7   | 4            | `Hello, World!` | `Lipps, Asvph!` | `Lipps, Asvph!` | ✅ Pass | Non-alphabetic unchanged    |
| 8   | -3           | `abc`           | `xyz`           | `xyz`           | ✅ Pass | Negative shift supported    |
| 9   | 29           | `abc`           | `def`           | `def`           | ✅ Pass | Large shift normalized      |
| 10  | 5            | `""`            | `""`            | `""`            | ✅ Pass | Empty input handled         |

---

### Vigenère Cipher

| #   | Keyword   | Input           | Expected Output | Actual Output   | Result  | Notes                                   |
| --- | --------- | --------------- | --------------- | --------------- | ------- | --------------------------------------- |
| 1   | `key`     | `attackatdawn`  | `kxrkgikxbkal`  | `kxrkgikxbkal`  | ✅ Pass | Basic lowercase encryption              |
| 2   | `key`     | `kxrkgikxbkal`  | `attackatdawn`  | `attackatdawn`  | ✅ Pass | Basic lowercase decryption (matches #1) |
| 3   | `abc`     | `abc`           | `ace`           | `ace`           | ✅ Pass | Keyword shifts = 0,1,2 → `ace`          |
| 4   | `abc`     | `xyz`           | `xzb`           | `xzb`           | ✅ Pass | Wrap-around encryption                  |
| 5   | `abc`     | `XyZ`           | `XzB`           | `XzB`           | ✅ Pass | Uppercase preserved                     |
| 6   | `key`     | `Hello, World!` | `Rijvs, Uyvjn!` | `Rijvs, Uyvjn!` | ✅ Pass | Non-alphabetic unchanged                |
| 7   | `a`       | `Test`          | `Test`          | `Test`          | ✅ Pass | Keyword `a` results in no change        |
| 8   | `longkey` | `short`         | `dvbxd`         | `dvbxd`         | ✅ Pass | Key longer than input, prefix applied   |
| 9   | `key`     | `""`            | `""`            | `""`            | ✅ Pass | Empty input handled                     |

---

### Atbash Cipher

| #   | Input           | Expected Output | Actual Output   | Result  | Notes                          |
| --- | --------------- | --------------- | --------------- | ------- | ------------------------------ |
| 1   | `abc`           | `zyx`           | `zyx`           | ✅ Pass | Basic lowercase                |
| 2   | `zyx`           | `abc`           | `abc`           | ✅ Pass | Reversible                     |
| 3   | `xyz`           | `cba`           | `cba`           | ✅ Pass | End of alphabet                |
| 4   | `cba`           | `xyz`           | `xyz`           | ✅ Pass | End of alphabet (reverse)      |
| 5   | `Hello`         | `Svool`         | `Svool`         | ✅ Pass | Uppercase preserved            |
| 6   | `World`         | `Dliow`         | `Dliow`         | ✅ Pass | Mixed case handled             |
| 7   | `Hello, World!` | `Svool, Dliow!` | `Svool, Dliow!` | ✅ Pass | Non-alphabetic unchanged       |
| 8   | `aZ`            | `zA`            | `zA`            | ✅ Pass | Edge case (first & last chars) |
| 9   | `nopqrs`        | `mlkjih`        | `mlkjih`        | ✅ Pass | Middle alphabet letters        |
| 10  | `""`            | `""`            | `""`            | ✅ Pass | Empty input handled            |
