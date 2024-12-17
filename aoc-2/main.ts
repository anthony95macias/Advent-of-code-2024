const text = await Deno.readTextFile("data.txt");
const lines = text.split("\n").slice(0,-1);

const report = lines.map((line) => {
  const elems = line.split(" ");
  return elems.map((elems) => parseInt(elems)); // Return the mapped array
})

console.log(report[report.length - 1]);
