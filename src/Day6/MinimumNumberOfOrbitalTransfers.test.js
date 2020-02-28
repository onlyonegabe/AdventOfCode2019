import {createItems, findMinimumOrbitalTransfers} from './UniversalOrbitMap'

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