const text = await Deno.readTextFile("data.txt");

const lines = text.split("\n");

const left: number[] = [];
const right: number[] = [];

lines.forEach((line) => {
  const parts = line.split(" ");
  const ln = parseInt(parts[0]);
  const rn = parseInt(parts[parts.length - 1]);

  // Check for NaN and skip the line if any number is invalid
  if (isNaN(ln) || isNaN(rn)) {
    console.warn(`Skipping invalid line: "${line}"`);
    return;
  }

  console.log(`ln = ${ln}, rn = ${rn}`);
  left.push(ln);
  right.push(rn);
});

// Sort numbers correctly
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

const diffs = left.map((leftNum, i) => {
  const rightNum = right[i];
  const diff = Math.abs(leftNum - rightNum);
  return diff;
});

const sum = diffs.reduce((total, curr) => {
  return total + curr;
}, 0);

console.log(sum);
