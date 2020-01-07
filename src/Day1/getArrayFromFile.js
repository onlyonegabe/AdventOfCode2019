export default function getArrayFromFile(file) {
    var fs = require('fs')
    var array = fs.readFileSync(file).toString().split("\n")
    return array
}