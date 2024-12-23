// Export the parseMuls function so it can be imported in test files
export const parseMuls = (input: string): { x: number; y: number }[] => {
    const muls: { x: number; y: number }[] = []; // Explicitly define the type of muls
    let i = 0;

    while (i < input.length) {
        if (input.slice(i, i + 4) === "mul(") {
            i += 4; // Move past "mul("

            let x = "";
            let y = "";
            let comma = false;

            while (i < input.length && input[i] !== ")") {
                if (input[i] === "," && !comma) {
                    comma = true; // Mark that the comma has been encountered
                } else if (input[i] >= "0" && input[i] <= "9") {
                    comma ? (y += input[i]) : (x += input[i]); // Append to x or y based on the comma flag
                } else {
                    break; // Break if encountering invalid characters
                }
                i++;
            }

            // Validate and add to muls if properly formed
            if (input[i] === ")" && x !== "" && y !== "") {
                muls.push({ x: parseInt(x, 10), y: parseInt(y, 10) }); // Add valid object
            }
        }
        i++;
    }
    return muls; // Return the parsed array of objects
};

const input = await Deno.readTextFile("data.txt");

const total = parseMuls(input).reduce((sum, expr) => {
    return sum + expr.x * expr.y;
}, 0);

console.log(total);