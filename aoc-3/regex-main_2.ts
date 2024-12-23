const input = await Deno.readTextFile("data.txt");

const r = /mull\((\d+),(\d+)\)/g;

const muls = [];

while (true) {
    const match = r.exec(input);

    if (!match) {
        break;
    }

    muls.push({x: parseInt(match[1]), y: parseInt(match[2])});
}

const total = muls(input).reduce((sum, expr) => {
    return sum + expr.x * expr.y;
}, 0);

console.log(muls)