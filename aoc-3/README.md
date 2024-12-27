# Day 3: Mull It Over

**Problem Description:**\
The task is to scan a corrupted memory for valid `mul(X,Y)` instructions. A
valid `mul(X,Y)` instruction is defined as:

1. It follows the exact format `mul(X,Y)`, where `X` and `Y` are numbers with 1
   to 3 digits each.
2. Invalid characters or malformed instructions should be ignored.

For each valid `mul` instruction, calculate the product of `X` and `Y`. The
final output is the sum of all these products.

### Example Input:

```
xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
```

### Example Explanation:

- Valid instructions:
  - `mul(2,4)`: 2 * 4 = 8
  - `mul(11,8)`: 11 * 8 = 88
  - `mul(8,5)`: 8 * 5 = 40

- Sum of valid products: 8 + 88 + 40 = **161**

### Constraints:

- Ignore any malformed or partial `mul` instructions.
- Only consider valid `mul` instructions with numbers in the specified range.

**Problem Link:**\
[https://adventofcode.com/2024/day/3](https://adventofcode.com/2024/day/3)

**Input:**\
The input is a single line of corrupted memory data containing potential `mul`
instructions.

**File Execution:**\
This file is using `pnpm watch` with Deno and `main.ts`.

**Solution:**\
The solution will be in the file `main.ts`. Run the following command to
execute:

```bash
pnpm watch
```
