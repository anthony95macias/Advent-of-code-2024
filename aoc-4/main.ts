import * as cowsay from "https://deno.land/x/cowsay@1.1/mod.ts";

// read data
const input = await Deno.readTextFile("data.txt");

// filter the data
const grid: string[] = input.split("\n").filter(line => line.trim() !== "");

let xmases: number = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(i, j)
    }
}



    // Final answer (output): 
const answer = cowsay.say({
  text: `The total length of the input is: ${xmases}`,
});
console.log(answer);
