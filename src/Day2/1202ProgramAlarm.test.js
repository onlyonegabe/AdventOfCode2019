import runOpcode from './runOpcode'
import getOpcodeFromFile from './getOpcodeFromFile'
import getNounVerbResult from './getNounVerbResult'

test("Opcode 1,0,0,0,99 becomes 2,0,0,0,99", () => {
    const opcode = [1,0,0,0,99]
    const expected = [2,0,0,0,99]
    expect(runOpcode(opcode)).toEqual(expected)
})

test("Opcode 2,3,0,3,99 becomes 2,3,0,6,99", () => {
    const opcode = [2,3,0,3,99]
    const expected = [2,3,0,6,99]
    expect(runOpcode(opcode)).toEqual(expected)
})

test("Opcode 2,4,4,5,99,0 becomes 2,4,4,5,99,9801", () => {
    const opcode = [2,4,4,5,99,0]
    const expected = [2,4,4,5,99,9801]
    expect(runOpcode(opcode)).toEqual(expected)
})

test("Opcode 1,1,1,4,99,5,6,0,99 becomes 30,1,1,4,2,5,6,0,99", () => {
    const opcode = [1,1,1,4,99,5,6,0,99]
    const expected = [30,1,1,4,2,5,6,0,99]
    expect(runOpcode(opcode)).toEqual(expected)
})

test("Run the opcode from file", () => {
    const opcode = getOpcodeFromFile('src/Day2/myOpcode.data')
    opcode[1] = 12
    opcode[2] = 2
    const result = runOpcode(opcode)
    expect(result[0]).toBe(12490719)
})

test("19690720 gives 100 * noun + verb", () => {
    const opcode = getOpcodeFromFile('src/Day2/myOpcode.data')
    const result = getNounVerbResult(19690720, opcode)
    expect(result).toBe(2003)
})