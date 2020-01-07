export default function getWireIntersections(wire1Positions, wire2Positions) {
    let intersections = []
    for (let i = 0; i < wire1Positions.length; i++) {
        for (let j = 0; j < wire2Positions.length; j++) {
            let wire1Position = wire1Positions[i]
            let wire2Position = wire2Positions[j]
            if (wire1Position[0] === wire2Position[0]
                && wire1Position[1] === wire2Position[1]) {
                let intersection = wire1Position
                intersections.push(intersection)
            }
        }
    }
    return intersections
}