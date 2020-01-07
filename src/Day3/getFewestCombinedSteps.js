import getWireIntersections from './getWireIntersections'

let fewestCombinedSteps

export default function getFewestCombinedSteps(wire1Positions, wire2Positions) {
    let intersections = []
    fewestCombinedSteps = undefined
    intersections = getWireIntersections(wire1Positions, wire2Positions)  
    intersections.forEach((item) => noteFewestCombinedSteps(item, wire1Positions, wire2Positions))
    return fewestCombinedSteps
}

function noteFewestCombinedSteps(item, wire1Positions, wire2Positions) {
    let steps = 0
    for (let i = 0; i < wire1Positions.length; i++) {
        steps++
        if (wire1Positions[i][0] === item[0] 
            && wire1Positions[i][1] === item[1]) {
            break
        }
    }
    for (let i = 0; i < wire2Positions.length; i++) {
        steps++
        if (wire2Positions[i][0] === item[0] 
            && wire2Positions[i][1] === item[1]) {
            break
        }
    }

    if (!fewestCombinedSteps) {
        fewestCombinedSteps = steps
    } else {
        fewestCombinedSteps = Math.min(fewestCombinedSteps, steps)
    }
}