let coordinateMarks
let x
let y
let i
let existingMarks = []
let intersections = []

export default function getDistanceOfClosestIntersectionPoint(wire) {
    initialize()
    wire.forEach(markAllCooridinates)
    existingMarks = coordinateMarks.slice(0)
    let shortestDistance = 0
    if (intersections.length > 0) {
        shortestDistance = getShortestDistance()
        intersections = []
        existingMarks = []
    }
    return shortestDistance
}

function initialize() {
    x = 0
    y = 0
    coordinateMarks = []
}

function markAllCooridinates(item) {
    let direction = item.substring(0, 1)
    let distance = item.substring(1)
    switch(direction) {
        case 'U':
            markUp(distance)
            break
        case 'D':
            markDown(distance)
            break
        case 'L':
            markLeft(distance)
            break
        case 'R':
            markRight(distance)
            break
        default:
            console.log('something went wrong with getting direction')
    }
}

function markUp(distance) {
    for (i = 1; i <= distance; i++) {
        coordinateMarks.push([x,++y])
        checkForIntersection(x, y)
    }
}

function markDown(distance) {
    for (i = 1; i <= distance; i++) {
        coordinateMarks.push([x,--y])
        checkForIntersection(x, y)
    }
}

function markLeft(distance) {
    for (i = 1; i <= distance; i++) {
        coordinateMarks.push([--x, y])
        checkForIntersection(x, y)
    }
}

function markRight(distance) {
    for (i = 1; i <= distance; i++) {
        coordinateMarks.push([++x,y])
        checkForIntersection(x, y)
    }
}

function checkForIntersection(x, y) {
    if (existingMarksContainCoordinate(x, y)) {
        intersections.push([x,y])
    }
}

function existingMarksContainCoordinate(x, y) {
    let i;
    for (i = 0; i < existingMarks.length; i++) {
        let existingMark = existingMarks[i]
        if (existingMark[0] === x &&
            existingMark[1] === y) {
            return true;
        }
    }
    return false;
}

function getShortestDistance() {
    let shortestDistance = Math.abs(intersections[0][0]) + Math.abs(intersections[0][1])
    let distance
    for (i = 1; i < intersections.length; i++) {
        distance = Math.abs(intersections[i][0]) + Math.abs(intersections[i][1])
        if (distance < shortestDistance) {
            shortestDistance = distance
        }
    }
    return shortestDistance
}