let intcode
let endProgram = 'end'
let moveTwoPositions = 'moveTwo'
let moveThreePositions = 'moveThree'
let moveFourPositions = 'moveFour'
let moveFivePositions = 'moveFive'
let output
let immediate = '1'

export default function runIntcode(input, incomingIntcode) {
    let index = 0
    intcode = []
    intcode = incomingIntcode
    while(true) {
        let result = doInstruction(intcode, input, index)
        if (result === endProgram) {
            return { 'intcode': intcode, 'output': output }
        } else if (result === moveTwoPositions) {
            index += 2
        } else if (result === moveThreePositions) {
            index += 3
        } else if (result === moveFourPositions) {
            index += 4
        } else if (result === moveFivePositions) {
            index += 5
        }
    }
}

function doInstruction(incomingIntcode, input, index) {
    let instruction = incomingIntcode[index]
    let position1 = incomingIntcode[index + 1]
    let position2 = incomingIntcode[index + 2]
    let position3 = incomingIntcode[index + 3]
    let position4 = incomingIntcode[index + 4]

    let parameters = getParameters(position1, position2, position3, instruction, incomingIntcode)
    let parameter1 = parameters.parameter1
    let parameter2 = parameters.parameter2
    let parameter3 = parameters.parameter3

    let opcode = getOpcode(instruction)
    switch (opcode) {
        case 1:
            if (typeof(parameter3) === 'undefined') {
                intcode[position3] = parameter1 + parameter2
                return moveFourPositions
            } else {
                intcode[position4] = parameter1 + parameter2 + parameter3
                return moveFivePositions
            }
        case 2: 
            if (typeof(parameter3) === 'undefined') {
                intcode[position3] = parameter1 * parameter2
                return moveFourPositions
            }
            else {
                intcode[position4] = parameter1 * parameter2 * parameter3
                return moveFivePositions
            }
        case 3:
            incomingIntcode[position1] = input
            return moveTwoPositions
        case 4:
            output = incomingIntcode[position1]
            if (output !== 0) {
                console.log(`output is ${output}`)
            }
            return moveTwoPositions
        case 5:
            if (incomingIntcode[index + 1] !== 0) {
                
            }
            return moveThreePositions
        case 99:
            console.log('halt')
            return endProgram
        default:
            console.log('something went wrong')
            return endProgram
    }
}

function getOpcode(instruction) {
    let opcode = instruction % 100
    if (opcode !== 99) {
        opcode = opcode % 10
    }
    return opcode
}

function getParameters(position1, position2, position3, instruction, incomingIntcode) {
    let parameter1Mode = undefined
    let parameter2Mode = undefined
    let parameter3Mode = undefined
    if (instruction && instruction.toString().length > 2) {
        let parameterModes = getParameterModes(instruction)
        parameter1Mode = parameterModes.parameter1Mode
        parameter2Mode = parameterModes.parameter2Mode
        parameter3Mode = parameterModes.parameter3Mode
    }

    let parameter1 = incomingIntcode[position1]
    if (parameter1Mode && parameter1Mode === immediate) {
        parameter1 = position1
    }

    let parameter2 = incomingIntcode[position2]
    if (parameter2Mode && parameter2Mode === immediate) {   
        parameter2 = position2
    }

    let parameter3
    if (typeof(parameter3Mode) === 'undefined') {
        parameter3 = undefined
    } else if (parameter3Mode === immediate) {
        parameter3 = position3
    } else {
        parameter3 = incomingIntcode[position3]
    }

    return { 'parameter1': parameter1, 'parameter2': parameter2, 'parameter3': parameter3 }
}

function getParameterModes(instruction) {
    let parameter1Mode = undefined
    let parameter2Mode = undefined
    let parameter3Mode = undefined

    let modeData = Math.floor(instruction / 100)    
    let parameterModes = modeData.toString().split('')
    let modeDataLength = modeData.toString().length

    parameter1Mode = parameterModes[modeDataLength - 1]
    parameter2Mode = parameterModes[modeDataLength - 2]
    parameter3Mode = parameterModes[modeDataLength - 3]
    
    return { 'parameter1Mode': parameter1Mode, 'parameter2Mode': parameter2Mode, 'parameter3Mode': parameter3Mode }
}