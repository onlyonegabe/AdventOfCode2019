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

export function findMinimumOrbitalTransfers(items) {
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
    
    let myPath = getOrbitalPath(items, 'YOU')
    let santaPath = getOrbitalPath(items, 'SAN')
    let orbitalTransfers = getOrbitalTransfers(myPath, santaPath)
    return orbitalTransfers
}