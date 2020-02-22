function createItems(input) {
    let items = {}
    input.split('\n').forEach(element => {
        let parsedItem = element.split(')')
        items[parsedItem[1]] = parsedItem[0]
    })
    return items
}

function findIndirectOrbits(items) {
    const entries = Object.entries(items)
    let indirectOrbits = 0
    for (const [orbitingObject, object] of entries) {
        if (object === "COM") {
            continue;
        }

        let something = object
        while(something !== "COM") {
            let object = items[something]
            something = object
            indirectOrbits++
        }
    }
    return indirectOrbits
}

test("Creates orbit item", () => {
    const input = "COM)NQY"
    let items = createItems(input)
    expect(items["NQY"]).toBeDefined()
})

test("Creates two orbit items", () => {
    const input = "COM)NQY\nNQY)XC8"
    let items = createItems(input)
    expect(items["NQY"]).toBeDefined()
    expect(items["XC8"]).toBeDefined()
})

describe("Find indirect orbits", () => {
    test("with two items", () => {
        const input = "COM)NQY\nNQY)XC8"
        let items = createItems(input)
        let indirectOrbits = findIndirectOrbits(items)
        expect(indirectOrbits).toBe(1)
    })

    test("with three items", () => {
        const input = "COM)NQY\nNQY)XC8\nXC8)62T"
        let items = createItems(input)
        let indirectOrbits = findIndirectOrbits(items)
        expect(indirectOrbits).toBe(3)
    })
})

test("get indirectOrbits from file", () => {
    let fs = require('fs')
    let input = fs.readFileSync("src/Day6/orbits.data").toString()
    let items = createItems(input)
    let indirectOrbits = findIndirectOrbits(items)
    expect(indirectOrbits).toBe(618522)
})

test("get directOrbits from file", () => {
    let fs = require('fs')
    let input = fs.readFileSync("src/Day6/orbits.data").toString().split("\n")
    expect(input.length).toBe(2603)
})
