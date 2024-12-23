import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

// Functions to test
const increasing = (report: number[]) => {
  for (let i = 0; i < report.length - 1; i++) {
    if (report[i] > report[i + 1]) return false;
  }
  return true;
};

const decreasing = (report: number[]) => {
  for (let i = 0; i < report.length - 1; i++) {
    if (report[i] < report[i + 1]) return false;
  }
  return true;
};

const oneDirection = (report: number[]) => {
  return increasing(report) || decreasing(report);
};

// Test cases
Deno.test("increasing: should return true for strictly increasing array", () => {
  const input = [1, 2, 3, 4, 5];
  assertEquals(increasing(input), true);
});

Deno.test("increasing: should return false for non-increasing array", () => {
  const input = [5, 4, 3, 2, 1];
  assertEquals(increasing(input), false);
});

Deno.test("increasing: should return true for array with identical elements", () => {
  const input = [3, 3, 3, 3];
  assertEquals(increasing(input), true);
});

Deno.test("decreasing: should return true for strictly decreasing array", () => {
  const input = [5, 4, 3, 2, 1];
  assertEquals(decreasing(input), true);
});

Deno.test("decreasing: should return false for non-decreasing array", () => {
  const input = [1, 2, 3, 4, 5];
  assertEquals(decreasing(input), false);
});

Deno.test("decreasing: should return true for array with identical elements", () => {
  const input = [3, 3, 3, 3];
  assertEquals(decreasing(input), true);
});

Deno.test("oneDirection: should return true for strictly increasing array", () => {
  const input = [1, 2, 3, 4, 5];
  assertEquals(oneDirection(input), true);
});

Deno.test("oneDirection: should return true for strictly decreasing array", () => {
  const input = [5, 4, 3, 2, 1];
  assertEquals(oneDirection(input), true);
});

Deno.test("oneDirection: should return true for array with identical elements", () => {
  const input = [3, 3, 3, 3];
  assertEquals(oneDirection(input), true);
});

Deno.test("oneDirection: should return false for array that changes direction", () => {
  const input = [1, 3, 2, 4];
  assertEquals(oneDirection(input), false);
});
