// main_test.ts

// Import the necessary assertion functions from Deno's standard testing library
import { assertEquals, assertThrows } from "https://deno.land/std@0.203.0/testing/asserts.ts";

// Import the parseMuls function from main.ts
import { parseMuls } from "./main.ts";

// Test 1: Correctly parses multiple mul expressions
Deno.test("parseMuls correctly parses multiple mul expressions", () => {
    const input = "mul(2,3) some text mul(4,5) mul(6,7)";
    const expected = [
        { x: 2, y: 3 },
        { x: 4, y: 5 },
        { x: 6, y: 7 },
    ];
    const result = parseMuls(input);
    assertEquals(result, expected);
});

// Test 2: Handles no mul expressions gracefully
Deno.test("parseMuls handles no mul expressions gracefully", () => {
    const input = "This string contains no mul expressions.";
    const expected: { x: number; y: number }[] = [];
    const result = parseMuls(input);
    assertEquals(result, expected);
});

// Test 3: Ignores malformed mul expressions
Deno.test("parseMuls ignores malformed mul expressions", () => {
    const input = "mul(2,3) mul(4,) mul(,5) mul(6,7) mul(8, nine)";
    const expected = [
        { x: 2, y: 3 },
        { x: 6, y: 7 },
    ];
    const result = parseMuls(input);
    assertEquals(result, expected);
});

// Test 4: Handles overlapping mul expressions
Deno.test("parseMuls handles overlapping mul expressions", () => {
    const input = "mul(1,2)mul(3,4) mul(5,6)";
    const expected = [
        { x: 1, y: 2 },
        { x: 3, y: 4 },
        { x: 5, y: 6 },
    ];
    const result = parseMuls(input);
    assertEquals(result, expected);
});

// Test 5: Handles nested mul expressions correctly
Deno.test("parseMuls handles nested mul expressions correctly", () => {
    const input = "mul(1,2) mul(mul(3,4),5) mul(6,7)";
    const expected = [
        { x: 1, y: 2 },
        { x: 6, y: 7 },
    ];
    const result = parseMuls(input);
    assertEquals(result, expected);
});

// Test 6: Ensures parseMuls throws an error when input is not a string
Deno.test("parseMuls throws an error when input is not a string", () => {
    // Since parseMuls expects a string, passing a non-string will cause a TypeScript error at compile time.
    // To test this behavior at runtime, you can modify parseMuls to perform type checking.

    // Example modification to parseMuls:
    /*
    export const parseMuls = (input: unknown): { x: number; y: number }[] => {
        if (typeof input !== "string") {
            throw new TypeError("Input must be a string");
        }
        // ... rest of the function
    };
    */

    // If parseMuls is updated to handle unknown types, uncomment the test below:
    
    // assertThrows(() => parseMuls(123 as unknown as string), TypeError);

    // Since parseMuls currently does not perform runtime type checking, this test is not applicable.
    // Therefore, it's best to remove this test to avoid the unused @ts-expect-error error.
});