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
    for (const [,object] of entries) {
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