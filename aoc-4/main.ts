import * as cowsay from "https://deno.land/x/cowsay@1.1/mod.ts";

// read data
const input = await Deno.readTextFile("data.txt");

// filter the data
const grid: string[] = input.split("\n").filter(line => line.trim() !== "");

const right = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i][j+1]+ grid[i][j+2]+ grid[i][j+3];
    } catch {
        return "";
    }
}

const down = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i+1][j]+ grid[i+2][j]+ grid[i+3][j];
    } catch {
        return "";
    }
}

const up = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i-1][j]+ grid[i-2][j]+ grid[i-3][j];
    } catch {
        return "";
    }
}

const left = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i][j-1]+ grid[i][j-2]+ grid[i][j-3];
    } catch {
        return "";
    }
}

const upLeft = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i-1][j-1]+ grid[i-2][j-2]+ grid[i-3][j-3];
    } catch {
        return "";
    }
}

const upRight = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i-1][j+1]+ grid[i-2][j+2]+ grid[i-3][j+3];
    } catch {
        return "";
    }
}

const downLeft = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i+1][j-1]+ grid[i+2][j-2]+ grid[i+3][j-3];
    } catch {
        return "";
    }
}

const downRight = (i: number, j: number ) => {
    try {
    return grid[i][j] + grid[i+1][j+1]+ grid[i+2][j+2]+ grid[i+3][j+3];
    } catch {
        return "";
    }
}

let xmases: number = 0;

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        right(i,j) === "XMAS" && xmases++;
        down(i,j) === "XMAS" && xmases++;
        up(i,j) === "XMAS" && xmases++;
        left(i,j) === "XMAS" && xmases++;
        upLeft(i,j) === "XMAS" && xmases++;
        upRight(i,j) === "XMAS" && xmases++;
        downLeft(i,j) === "XMAS" && xmases++;
        downRight(i,j) === "XMAS" && xmases++;
    }
}


    // Final answer (output): 
const word = "XMAS"
const answer = cowsay.say({
    text: `The word '${word}' occurs ${xmases} times.`,
});
console.log(answer);
