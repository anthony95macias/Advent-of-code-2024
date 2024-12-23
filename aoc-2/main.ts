const increasing = (report: number[]) => {
  for (let i = 0; i < report.length; i++) {
    if (report[i] > report[i + 1]) {
      return false;
    }
  }
  return true;
};

const decreasing = (report: number[]) => {
  for (let i = 0; i < report.length; i++) {
    if (report[i] < report[i + 1]) {
      return false;
    }
  }
  return true;
};

const oneDirection = (report: number[]) => {
  return increasing(report) || decreasing(report);
};
const text = await Deno.readTextFile("data.txt");
const lines = text.split("\n").slice(0, -1);

const report = lines.map((line) => {
  const elems = line.split(" ");
  return elems.map((elems) => parseInt(elems)); // Return the mapped array
}).filter((report) => oneDirection(report)) // Filter the array
  .map((report) => {
    return report.sort((i, j) => i - j); // Sort the array
  });

// Print the array of reports that are safe to print out to the console
report.forEach((report) => {
  if (!increasing(report) && !decreasing(report)) {
    console.log(report);
  }
});

let sum = 0;

report.forEach((report) => {
  for (let i = 0; i < report.length - 1; i++) {
    const diff = report[i + 1] - report[i];
    if (diff <= 0 || diff > 3) {
      return;
    }
  }
  sum += 1;
});

console.log(sum);
