let wires = []

export default function getOpcodeFromFile(file) {
    var fs = require('fs')
    let fileData = fs.readFileSync(file).toString().split('\n')
    fileData.forEach(makeWireArrays)
    return wires
}

function makeWireArrays(item) {
    let wire = item.split(',')
    wires.push(wire)
}