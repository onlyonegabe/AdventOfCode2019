var opcode

export default function getOpcodeFromFile(file) {
    var fs = require('fs')
    opcode = fs.readFileSync(file).toString().split(',')
    opcode.forEach(convertItemsToInteger)
    return opcode
}

function convertItemsToInteger(item, index) {
    opcode[index] = Number(opcode[index])
}