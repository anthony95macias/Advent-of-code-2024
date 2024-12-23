const input = await Deno.readTextFile("data.txt");

// Regular expression to find mull(x, y) patterns
const r = /mull\((\d+),(\d+)\)/g;

// Explicitly type `muls` as an array of objects with `x` and `y` as numbers
const muls: { x: number; y: number }[] = [];

// Extract matches using the regular expression
while (true) {
    const match = r.exec(input);
    if (!match) {
        break;
    }
    muls.push({ x: parseInt(match[1], 10), y: parseInt(match[2], 10) });
}

// Calculate the total by reducing the `muls` array
const total = muls.reduce((sum, expr) => {
    return sum + expr.x * expr.y;
}, 0);

console.log("Extracted Multiplications:", muls);
console.log("Total Sum:", total);