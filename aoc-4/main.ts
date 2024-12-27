import * as cowsay from "https://deno.land/x/cowsay@1.1/mod.ts";

const input = await Deno.readTextFile("data.txt");

// console.log(input)

const answer = cowsay.say({
  text: `The total length of the input is: ${input.length}`,
});
console.log(answer);
