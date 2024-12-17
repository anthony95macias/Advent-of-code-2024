# Day 1: Historian Hysteria

**Problem Description:**  
The task is to calculate the total distance between two lists of unique numbers called location IDs. The numbers are given as two lists (left and right). To reconcile the lists, follow these rules:

1. Sort both lists in ascending order.
2. Pair the smallest number in the left list with the smallest number in the right list, the second smallest with the second smallest, and so on.
3. For each pair, calculate the distance as the absolute difference between the two numbers.
4. Sum up all the distances.

### Example Input:
```
3   4
4   3
2   5
1   3
3   9
3   3
```

### Example Explanation:
- Pair the sorted left list `1, 2, 3, 3, 3, 4` with the sorted right list `3, 3, 3, 4, 5, 9`.
- Distances between pairs:
  - `1 and 3`: Distance = 2
  - `2 and 3`: Distance = 1
  - `3 and 3`: Distance = 0
  - `3 and 4`: Distance = 1
  - `3 and 5`: Distance = 2
  - `4 and 9`: Distance = 5
- Total Distance = `2 + 1 + 0 + 1 + 2 + 5 = 11`.

**Problem Link:**  
[https://adventofcode.com/2024/day/1](https://adventofcode.com/2024/day/1)

**Input:**
The input consists of two lists of integers, left and right, provided as multiple lines.

**File Execution:**
This file is using `pnpm watch` with Deno and `main.ts`.  

**Solution:**  
The solution will be in the file `main.ts`. Run the following command to execute:
```bash
pnpm watch
```

