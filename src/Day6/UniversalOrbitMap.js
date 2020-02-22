export function createItems(input) {
    const items = {}
    input.split('\n').forEach(element => {
        const parsedItem = element.split(')')
        items[parsedItem[1]] = parsedItem[0]
    })
    return items
}

export function findIndirectOrbits(items) {
    const entries = Object.entries(items)
    let indirectOrbits = 0
    for (let [,object] of entries) {
        if (object === "COM") {
            continue;
        }

        while(object !== "COM") {
            object = items[object]
            indirectOrbits++
        }
    }
    return indirectOrbits
}