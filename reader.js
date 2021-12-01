const fs = require('fs')

/**
 * Reads input files
 * @param {string} fileName - relative file location
 * @param {boolean} convertToNum - convert strings into integers
 * @returns array of input lines
 */
exports.getInput = (fileName, convertToNum) => {
    if (convertToNum) {
        return fs.readFileSync(fileName).toString().split("\r\n").map((item) => {
            return parseInt(item, 10)
        })
    }
    return fs.readFileSync(fileName).toString().split("\r\n")
}