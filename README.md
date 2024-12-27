# Advent of Code 2024 Solutions

Welcome to my solutions for
[Advent of Code 2024](https://adventofcode.com/2024/). This repository contains
solutions organized by day, each implemented using **Deno** and managed with
**pnpm**.

## Project Structure

Each solution file is named using a consistent naming convention:

- **aoc-<day_number>**
  - Example: `aoc-1`, `aoc-2`, `aoc-3`.

The corresponding file structure looks like this:

```
root/
|-- aoc-1/      # Solution for Day 1
|   |-- main.ts # Code for Day 1
|-- aoc-2/      # Solution for Day 2
|   |-- main.ts # Code for Day 2
...
|-- README.md
```

## Installation

To get started, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repo-link>
   cd <repo-folder>
   ```

2. **Install dependencies**:
   ```bash
   pnpm i
   ```

3. **Run the Deno server**:
   ```bash
   pnpm watch
   ```

This will start the Deno server for running solutions.

## Adding New Solutions

To add a new solution file for a specific day:

1. Create a new directory using the naming convention `aoc-<day_number>`.
   ```bash
   mkdir aoc-3
   cd aoc-3
   ```
2. Add the `main.ts` file for your solution in that directory.
3. Update this **README.md** file by adding a new link to the corresponding day:

   ```markdown
   ### Day X

   - [Day X Solution](https://adventofcode.com/2024/day/X):
     [aoc-X/main.ts](aoc-X/main.ts)
   ```

### Example:

For Day 3:

```markdown
### Day 3

- [Day 3 Solution](https://adventofcode.com/2024/day/3):
  [aoc-3/main.ts](aoc-3/main.ts)
```

## Solutions

### Day 1

- [Day 1 Solution](https://adventofcode.com/2024/day/1):
  [aoc-1/main.ts](aoc-1/main.ts)

### Day 2

- [Day 2 Solution](https://adventofcode.com/2024/day/2):
  [aoc-2/main.ts](aoc-2/main.ts)

## Running a Specific Solution

To run a specific day's solution:

```bash
cd aoc-<day_number>

# Run the file with Deno
pnpm deno run main.ts
```

Example:

```bash
cd aoc-2
pnpm deno run main.ts
```

## Advent of Code

For more details on the challenges, visit the official
[Advent of Code 2024](https://adventofcode.com/2024/) website.

---

Happy Coding! 🎄✨
