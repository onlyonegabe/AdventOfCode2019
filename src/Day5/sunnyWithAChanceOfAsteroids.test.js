import runIntcode from './runIntcode'
import getOpcodeFromFile from '../Day5/getOpcodeFromFile'

test('opcode 3 stores input at the correct position', () => {
    let opcode = [3, 1, 99]
    let input = 38

    let result = runIntcode(input, opcode)

    expect(result.intcode[1]).toBe(input)
})

test('opcode 4 outputs the value of its only parameter', () => {
    let opcode = [4, 1, 99]
    let input = 0

    let result = runIntcode(input, opcode)
    expect(result.output).toBe(1)
})

test('3,0,4,0,99 outputs whatever it gets as input', () => {
    let opcode = [3,0,4,0,99]
    let input = 45

    let result = runIntcode(input, opcode)
    expect(result.output).toBe(input)
})

test('opcode with parameter modes', () => {
    let intcode = [1002, 4, 3, 4, 33]
    let expected = [1002, 4, 3, 4, 99]
    let input = 0

    let result = runIntcode(input, intcode)
    expect(result.intcode).toEqual(expected)
})

test('opcode with adding 3 parameters', () => {
    let intcode = [11001, 5, 5, 4, 5, 90]
    let expected = [11001, 5, 5, 4, 5, 99]
    let input = 0

    let result = runIntcode(input, intcode)
    expect(result.intcode).toEqual(expected)
})

test('diagnostic code from data file is 5346030', () => {
    let intcode = getOpcodeFromFile('src/Day5/program.data')
    let expectedDiagnosticCode = 5346030

    let result = runIntcode(1, intcode)
    expect(result.output).toBe(expectedDiagnosticCode)
})