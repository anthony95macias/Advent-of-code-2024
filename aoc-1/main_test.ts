import { assertEquals } from "https://deno.land/std@0.200.0/testing/asserts.ts";

Deno.test("test main logic with valid data", async () => {
  // Mock file system
  const mockData = "1 10\n2 20\n3 30\n";
  const mockFileName = "mock_data.txt";
  
  // Write mock data to file
  await Deno.writeTextFile(mockFileName, mockData);

  // Read file and execute logic (you may need to refactor your main logic into a function for easier testing)
  const text = await Deno.readTextFile(mockFileName);
  const lines = text.split("\n");

  const left: number[] = [];
  const right: number[] = [];

  lines.forEach((line) => {
    const parts = line.split(" ");
    const ln = parseInt(parts[0]);
    const rn = parseInt(parts[parts.length - 1]);

    // Check for NaN and skip the line if any number is invalid
    if (isNaN(ln) || isNaN(rn)) {
      return;
    }

    left.push(ln);
    right.push(rn);
  });

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  const diffs = left.map((leftNum, i) => {
    const rightNum = right[i];
    const diff = Math.abs(leftNum - rightNum);
    return diff;
  });

  const sum = diffs.reduce((total, curr) => {
    return total + curr;
  }, 0);

  // Assert results
  assertEquals(sum, 54); // Expected sum based on mockData diffs

  // Clean up
  await Deno.remove(mockFileName);
});

Deno.test("test main logic with invalid data", async () => {
  const mockData = "1 x\n2 20\n3 y\n";
  const mockFileName = "mock_data_invalid.txt";

  await Deno.writeTextFile(mockFileName, mockData);

  const text = await Deno.readTextFile(mockFileName);
  const lines = text.split("\n");

  const left: number[] = [];
  const right: number[] = [];

  lines.forEach((line) => {
    const parts = line.split(" ");
    const ln = parseInt(parts[0]);
    const rn = parseInt(parts[parts.length - 1]);

    if (isNaN(ln) || isNaN(rn)) {
      return;
    }

    left.push(ln);
    right.push(rn);
  });

  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  const diffs = left.map((leftNum, i) => {
    const rightNum = right[i];
    const diff = Math.abs(leftNum - rightNum);
    return diff;
  });

  const sum = diffs.reduce((total, curr) => {
    return total + curr;
  }, 0);

  // Assert results
  assertEquals(sum, 18); // Expected sum for valid lines: "2 20"

  await Deno.remove(mockFileName);
});

