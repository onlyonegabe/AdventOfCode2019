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
    output = undefined
    while(true) {
        let result = doInstruction(intcode, input, index)
        if (result === endProgram) {
            return { 'intcode': intcode, 'output': output, 'index': index }
        } else if (result === moveTwoPositions) {
            index += 2
        } else if (result === moveThreePositions) {
            index += 3
        } else if (result === moveFourPositions) {
            index += 4
        } else if (result === moveFivePositions) {
            index += 5
        } else {
            index = result
        }
    }
}

function doInstruction(incomingIntcode, input, index) {
    let instruction = incomingIntcode[index]
    let valueOneAway = incomingIntcode[index + 1]
    let valueTwoAway = incomingIntcode[index + 2]
    let valueThreeAway = incomingIntcode[index + 3]
    let valueFourAway = incomingIntcode[index + 4]

    let parameters = getParameters(valueOneAway, valueTwoAway, valueThreeAway, instruction, incomingIntcode)
    let parameter1 = parameters.parameter1
    let parameter2 = parameters.parameter2
    let parameter3 = parameters.parameter3

    let opcode = getOpcode(instruction)
    switch (opcode) {
        case 1:
            if (typeof(parameter3) === 'undefined') {
                intcode[valueThreeAway] = parameter1 + parameter2
                return moveFourPositions
            } else {
                intcode[valueFourAway] = parameter1 + parameter2 + parameter3
                return moveFivePositions
            }
        case 2:
            if (typeof(parameter3) === 'undefined') {
                intcode[valueThreeAway] = parameter1 * parameter2
                return moveFourPositions
            }
            else {
                intcode[valueFourAway] = parameter1 * parameter2 * parameter3
                return moveFivePositions
            }
        case 3:
            incomingIntcode[valueOneAway] = input
            return moveTwoPositions
        case 4:
            output = incomingIntcode[valueOneAway]
            if (output !== 0) {
                console.log(`output is ${output}`)
            }
            return moveTwoPositions
        case 5:
            if (parameter1 !== 0) {
                index = parameter2
            }
            else {
                return moveThreePositions
            }
            return index
        case 6:
            if(parameter1 === 0) {
                index = parameter2
            }
            else {
                return moveThreePositions
            }
            return index
        case 7:
            if(incomingIntcode[valueOneAway] < incomingIntcode[valueTwoAway]) {
                incomingIntcode[valueThreeAway] = 1
            } else {
                incomingIntcode[valueThreeAway] = 0
            }
            return moveFourPositions
        case 8:
            if(incomingIntcode[valueOneAway] === incomingIntcode[valueTwoAway]) {
                incomingIntcode[valueThreeAway] = 1
            }  else {
                incomingIntcode[valueThreeAway] = 0
            }  
            return moveFourPositions        
        case 99:
            console.log('program ended normally')
            return endProgram
        default:
            console.log('something went wrong')
            console.log(`index was ${index}`)
            console.log(`opcode was ${opcode}`)
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