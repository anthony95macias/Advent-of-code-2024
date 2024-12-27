import * as cowsay from "https://deno.land/x/cowsay@1.1/mod.ts";

// read data
const input = await Deno.readTextFile("data.txt");

// filter the data
const grid: string[] = input.split("\n").filter(line => !!line)
console.log(grid[grid.length - 1]);


// Final answer (output): 
// const answer = cowsay.say({
//   text: `The total length of the input is: ${input.length}`,
// });
// console.log(answer);
