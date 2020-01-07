import getDistanceOfClosestIntersectionPoint from './getDistanceOfClosestIntersectionPoint'
import getWiresFromFile from './getWiresFromFile'
import getWirePositions from './getWirePositions'
import getFewestCombinedSteps from './getFewestCombinedSteps'

test("first crossed wires has distance of 6", () => {
    const wire1 = ['R8','U5','L5','D3']
    const wire2 = ['U7','R6','D4','L4']

    let distance = getDistanceOfClosestIntersectionPoint(wire1)
    distance = getDistanceOfClosestIntersectionPoint(wire2)

    expect(distance).toBe(6)
})

test("second crossed wires has distance of 159", () => {
    const wire1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
    const wire2 = ['U62','R66','U55','R34','D71','R55','D58','R83']

    let distance = getDistanceOfClosestIntersectionPoint(wire1)
    distance = getDistanceOfClosestIntersectionPoint(wire2)

    expect(distance).toBe(159)
})

test("third crossed wires has distance of 135", () => {
    const wire1 = ['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51']
    const wire2 = ['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']

    let distance = getDistanceOfClosestIntersectionPoint(wire1)
    distance = getDistanceOfClosestIntersectionPoint(wire2)

    expect(distance).toBe(135)
})

test.skip("crossed wires from file has distance of 217", () => {
    let wires = getWiresFromFile('src/Day3/crossedWires.data')
    const wire1 = wires[0]
    const wire2 = wires[1]

    let distance = getDistanceOfClosestIntersectionPoint(wire1)
    distance = getDistanceOfClosestIntersectionPoint(wire2)

    expect(distance).toBe(217)
})

test("first crossed wires has fewest combined steps of 30", () => {
    const wire1 = ['R8','U5','L5','D3']
    const wire2 = ['U7','R6','D4','L4']

    const wire1Positions = getWirePositions(wire1)
    const wire2Positions = getWirePositions(wire2)

    let fewestCombinedStep = getFewestCombinedSteps(wire1Positions, wire2Positions)

    expect(fewestCombinedStep).toBe(30)
})

test("second crossed wires has fewest combined steps of 610", () => {
    const wire1 = ['R75','D30','R83','U83','L12','D49','R71','U7','L72']
    const wire2 = ['U62','R66','U55','R34','D71','R55','D58','R83']

    const wire1Positions = getWirePositions(wire1)
    const wire2Positions = getWirePositions(wire2)

    let fewestCombinedStep = getFewestCombinedSteps(wire1Positions, wire2Positions)

    expect(fewestCombinedStep).toBe(610)
})

test("third crossed wires has fewest combined steps of 410", () => {
    const wire1 = ['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51']
    const wire2 = ['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7']

    const wire1Positions = getWirePositions(wire1)
    const wire2Positions = getWirePositions(wire2)

    let fewestCombinedStep = getFewestCombinedSteps(wire1Positions, wire2Positions)

    expect(fewestCombinedStep).toBe(410)
})

test.skip("crossed wires from data file has fewest combined steps of 3454", () => {
    let wires = getWiresFromFile('src/Day3/crossedWires.data')
    const wire1 = wires[0]
    const wire2 = wires[1]

    const wire1Positions = getWirePositions(wire1)
    const wire2Positions = getWirePositions(wire2)

    let fewestCombinedStep = getFewestCombinedSteps(wire1Positions, wire2Positions)

    expect(fewestCombinedStep).toBe(3454)
})