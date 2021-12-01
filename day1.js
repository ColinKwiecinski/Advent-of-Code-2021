const reader = require('./reader')
const { performance } = require('perf_hooks');

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
let startOne = performance.now();
console.log(partOne(input))
let endOne = performance.now()
console.log(partTwo(input))
let endTwo = performance.now();
console.log(`Time 1: ${endOne - startOne}, Time 2: ${endTwo - endOne}`)
