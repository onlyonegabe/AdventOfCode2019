import runIntcode from "./runIntcode"

test('input 8 should output 1', () => {
    const intCode = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]
    const input = 8

    const result = runIntcode(input, intCode)

    expect(result.output).toEqual(1)
})