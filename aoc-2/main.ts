const increasing = (report: number[]) => {
  for (let i = 0; i < report.length; i++ ) {
    if (report[i] > report[i+1])
      return false
  }
    return true;
};

const decreasing = (report: number[]) => {
  for (let i = 0; i < report.length; i++ ) {
    if (report[i] < report[i+1])
      return false
  }
    return true;
};

const oneDirection = (report: number[]) => {
  return increasing(report) || decreasing(report);
};

const text = await Deno.readTextFile("data.txt");
const lines = text.split("\n").slice(0,-1);

const report = lines.map((line) => {
  const elems = line.split(" ");
  return elems.map((elems) => parseInt(elems)); // Return the mapped array
}).filter((report) => oneDirection(report)); // Filter the array

console.log(report.length);