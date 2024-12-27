// regex-main_2_test.ts

import { assertEquals } from "https://deno.land/std@0.203.0/testing/asserts.ts";
import { parseMuls } from "./regex-main_2.ts";

// Test suite for parseMuls
Deno.test("parseMuls should correctly parse multiple mul expressions", () => {
  const input = "mul(2,3) some text mul(4,5) mul(6,7)";
  const expected = [
    { x: 2, y: 3 },
    { x: 4, y: 5 },
    { x: 6, y: 7 },
  ];
  const result = parseMuls(input);
  assertEquals(result, expected);
});

Deno.test("parseMuls should return an empty array when no mul expressions are present", () => {
  const input = "This string contains no mul expressions.";
  const expected: { x: number; y: number }[] = [];
  const result = parseMuls(input);
  assertEquals(result, expected);
});

Deno.test("parseMuls should ignore malformed mul expressions", () => {
  const input = "mul(2,3) mul(4,) mul(,5) mul(6,7) mul(8, nine)";
  const expected = [
    { x: 2, y: 3 },
    { x: 6, y: 7 },
  ];
  const result = parseMuls(input);
  assertEquals(result, expected);
});

Deno.test("parseMuls should handle overlapping mul expressions without spaces", () => {
  const input = "mul(1,2)mul(3,4) mul(5,6)";
  const expected = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
    { x: 5, y: 6 },
  ];
  const result = parseMuls(input);
  assertEquals(result, expected);
});

Deno.test("parseMuls should correctly parse nested mul expressions", () => {
  const input = "mul(1,2) mul(mul(3,4),5) mul(6,7)";
  const expected = [
    { x: 1, y: 2 },
    { x: 6, y: 7 },
  ];
  const result = parseMuls(input);
  assertEquals(result, expected);
});

Deno.test("parseMuls should handle varying whitespace within mul expressions", () => {
  const input = "mul( 10 ,20 ) mul(30,40)   mul(50,60)";
  const expected = [
    { x: 10, y: 20 },
    { x: 30, y: 40 },
    { x: 50, y: 60 },
  ];
  const result = parseMuls(input);
  assertEquals(result, expected);
});
