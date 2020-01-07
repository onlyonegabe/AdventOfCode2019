import runIntcode from "./runIntcode"

test('opcode 5 sets the instruction pointer to the second parameter value when first parameter is non-zero', () => {
    let intCode = [5, 3, 99, 5]
    let expected = [5, 2, 99, 99]

    let result = runIntcode(0, intCode)

    expect(result.intcode).toEqual(expected)
})