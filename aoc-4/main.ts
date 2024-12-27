import * as o from 'https://deno.land/x/cowsay/mod.ts'
const input = await Deno.readTextFile("data.txt");

// console.log(input)

let cowsay = o.say({
  text: `The total length of the input is: ${input.length}`
})
console.log(cowsay)