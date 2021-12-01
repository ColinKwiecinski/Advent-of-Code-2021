const reader = require('./reader')

function partOne(input) {
    let total = 0
    for (let i = 1; i < input.length; i++) {
        if (input[i] > input[i - 1]) {
            total++
        }
    }
    return total
}

function partTwo(input) {
    let total = 0
    let prev = Number.NEGATIVE_INFINITY
    for (let i = 0; i < input.length - 3; i++) {
        let num = +input[i] + +input[i + 1] + +input[i + 2] // very cool javascript thank you
        if (num > prev) {
            total++
        }
        prev = num
    }
    return total
}

let input = reader.getInput("day1_input.txt", true)
console.log(partOne(input))
console.log(partTwo(input))