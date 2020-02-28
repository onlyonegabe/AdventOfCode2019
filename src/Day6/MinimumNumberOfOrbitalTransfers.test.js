import {createItems} from './UniversalOrbitMap'

function getOrbitalPath(items, startingPoint) {
    let orbitalPath = []
    let object = startingPoint

    while(object !== "COM") {
        object = items[object]
        orbitalPath.push(object)
    }
    return orbitalPath
}

function getOrbitalTransfers(myPath, santaPath) {
    let orbitalTransfers = 0
    for (let i = 0; i < myPath.length; i++) {
        if (santaPath.find(element => element === myPath[i])) {
            break
        } 
        orbitalTransfers++
    }
    for (let i = 0; i < santaPath.length; i++) {
        if (myPath.find(element => element === santaPath[i])) {
            break
        } 
        orbitalTransfers++
    }
    return orbitalTransfers
}

function findMinimumOrbitalTransfers(items) {
    let myPath = getOrbitalPath(items, 'YOU')
    let santaPath = getOrbitalPath(items, 'SAN')
    let orbitalTransfers = getOrbitalTransfers(myPath, santaPath)
    return orbitalTransfers
}

test('minimum number of orbital transfers sample example', () => {
    let fs = require('fs')
    let input = fs.readFileSync('src/Day6/minimumTransfersExample.data').toString()
    let items = createItems(input)
    let result = findMinimumOrbitalTransfers(items)
    expect(result).toBe(4)
})

test('minimum number of orbital transfers part B example', () => {
    let fs = require('fs')
    let input = fs.readFileSync('src/Day6/minimumTransfersInput.data').toString()
    let items = createItems(input)
    let result = findMinimumOrbitalTransfers(items)
    expect(result).toBe(550)
})