# Day 4: Ceres Search

**Problem Description:**  
The task is to analyze a word search puzzle to determine how many times the word **XMAS** appears. The word can appear in any of the following directions:

- **Horizontal** (left-to-right and right-to-left)
- **Vertical** (top-to-bottom and bottom-to-top)
- **Diagonal** (all four diagonal directions)
- Words can **overlap** other words.

Given the puzzle, find and count all occurrences of the word **XMAS**.

### Example Input:

```
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
```

### Example Explanation:
In the provided example, **XMAS** occurs **18 times**. Here’s the same puzzle with irrelevant characters replaced by `.` for clarity:

```
....XXMAS.
.SAMXMS...
...S..A...
..A.A.MS.X
XMASAMX.MM
X.....XA.A
S.S.S.S.SS
.A.A.A.A.A
..M.M.M.MM
.X.X.XMASX
```

### Problem Link:
[https://adventofcode.com/2024/day/4](https://adventofcode.com/2024/day/4)

**Input:**  
The input is a square grid of characters. Each row of the grid is a string, and all rows have the same length.

**Output:**  
The output should be the total number of occurrences of **XMAS** in the grid.

**File Execution:** This file is using `pnpm watch` with Deno and `main.ts`.

**Solution:**  
The solution will scan the grid in all possible directions for the word **XMAS**, considering overlapping patterns.

```bash
pnpm watch
```

