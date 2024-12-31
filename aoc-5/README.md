# Day 5: Print Queue

**Problem Description:**\
The North Pole printing department is overwhelmed during the Christmas rush. Safety manuals need to be updated in a specific order, dictated by the Elf-provided rules. Your task is to determine which updates are already in the correct order and find the sum of the middle page numbers of those updates.

The notation `X|Y` means that if both page numbers `X` and `Y` are included in an update, then `X` must appear before `Y` in the update. The problem provides:

1. A list of ordering rules.
2. A list of updates (each specifying a sequence of page numbers).

Your goal is to:
1. Identify updates that follow the ordering rules.
2. Find the middle page number of each valid update.
3. Sum up the middle page numbers of all valid updates.

### Example Input:

**Rules:**
```
47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13
```

**Updates:**
```
75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47
```

### Example Explanation:

The first update `75,47,61,53,29` is valid:
- `75` is correctly first because it must precede all others in the update.
- `47` is second, as required by rules such as `75|47`, `47|61`, and `47|29`.
- `61` is in the middle because it must come after `75` and `47` but before `53` and `29`.
- `53` is fourth, as required by `61|53` and `53|29`.
- `29` is last.

Other valid updates are `97,61,53,29,13` and `75,29,13`. Their middle page numbers are `61`, `53`, and `29` respectively, summing up to `143`.

The other updates break one or more rules and are invalid.

### Problem Link:

[https://adventofcode.com/2024/day/5](https://adventofcode.com/2024/day/5)

**Input:**\
The input consists of two sections:
1. Ordering rules (one per line in the format `X|Y`).
2. Updates (one per line, with page numbers separated by commas).

**Output:**\
The output is a single integer: the sum of the middle page numbers of all correctly-ordered updates.

**File Execution:** This file is using `pnpm watch` with Deno and `main.ts`.

**Solution:**\
To solve the problem:
1. Parse the ordering rules and updates.
2. Validate each update against the rules, ignoring rules for pages not included in the update.
3. Identify the middle page number for each valid update.
4. Sum up the middle page numbers and return the result.

```bash
pnpm watch
```

