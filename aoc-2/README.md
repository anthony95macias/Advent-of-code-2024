# Day 2: Red-Nosed Reports

**Problem Description:**  
The task is to analyze reports consisting of numerical levels to determine their safety. A report is considered **safe** if:

1. The levels are either all **increasing** or all **decreasing**.
2. Any two adjacent levels differ by at least **1** and at most **3**.

### Example Input:
```
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
```

### Example Explanation:
- **7 6 4 2 1**: Safe because it is decreasing by values between 1 and 2.
- **1 2 7 8 9**: Unsafe because `2 to 7` increases by 5.
- **9 7 6 2 1**: Unsafe because `6 to 2` decreases by 4.
- **1 3 2 4 5**: Unsafe because it switches from increasing to decreasing.
- **8 6 4 4 1**: Unsafe because `4 to 4` is neither increasing nor decreasing.
- **1 3 6 7 9**: Safe because it increases by values between 1 and 3.

In this example, **2 reports** are considered safe.

**Problem Link:**  
[https://adventofcode.com/2024/day/2](https://adventofcode.com/2024/day/2)

**Input:**
The input consists of multiple lines where each line represents a report. Each report contains space-separated integers representing levels.

**File Execution:**
This file is using `pnpm watch` with Deno and `main.ts`.  

**Solution:**  
The solution will be in the file `main.ts`. Run the following command to execute:
```bash
pnpm watch
```

