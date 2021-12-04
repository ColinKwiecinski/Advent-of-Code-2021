const reader = require('./reader')


function partOne(input) {
    let depth = 0;
    let horiz = 0;
    input.forEach(str => {
        let num = parseInt(str.split(" ")[1])
        if (str.startsWith("up")) {
            depth -= num
        } else if (str.startsWith("down")) {
            depth += num
        } else {
            horiz += num
        }
    });
    console.log(depth * horiz)
}

function partTwo(input) {
    let depth = 0;
    let horiz = 0;
    let aim = 0;
    input.forEach(str => {
        let num = parseInt(str.split(" ")[1])
        if (str.startsWith("up")) {
            aim -= num;
        } else if (str.startsWith("down")) {
            aim += num;
        } else {
            horiz += num
            depth += aim * num
        }
    });
    console.log(depth * horiz)
}
let data = reader.getInput("day2_input.txt");
partOne(data);
partTwo(data)