let coordinateMarks
let i
let x
let y

export default function getWirePositions(wire) {
    initialize()
    wire.forEach(markAllCooridinates)
    return coordinateMarks
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
    }
}

function markDown(distance) {
    for (i = 1; i <= distance; i++) {
        coordinateMarks.push([x,--y])
    }
}

function markLeft(distance) {
    for (i = 1; i <= distance; i++) {
        coordinateMarks.push([--x, y])
    }
}

function markRight(distance) {
    for (i = 1; i <= distance; i++) {
        coordinateMarks.push([++x,y])
    }
}