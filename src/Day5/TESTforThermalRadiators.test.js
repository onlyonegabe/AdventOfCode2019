import runIntcode from "./runIntcode"

describe('jump-if-true', () => {
    test('when the first parameter is non-zero then it sets the instruction pointer to the second parameter value', () => {
        const jumpIfTrue = 5
        const intCode = [jumpIfTrue, 3, 3, 4, 99]
        
        const input = 0
        const result = runIntcode(input, intCode)
        
        expect(result.index).toEqual(4)
    })

    test('when the first parameter is zero then it does nothing', () => {
        const jumpIfTrue = 5
        const intCode = [jumpIfTrue, 0, 6, 99]

        const input = 0
        const result = runIntcode(input, intCode)

        expect(result.index).toEqual(3)
    })
})

describe('jump-if-false', () => {
    test('when the first parameter is zero then it sets the instruction pointer to the second parameter value', () => {
        const jumpIfFalse = 6
        const intCode = [jumpIfFalse, 0, 3, 5, 6, 99]

        const input = 0
        const result = runIntcode(input, intCode)

        expect(result.index).toEqual(5)
    })

    test('when the first parameter is non-zero then it does nothing', () => {
        const jumpIfFalse = 6
        const intCode = [jumpIfFalse, 3, 6, 99]
        
        const input = 0
        const result = runIntcode(input, intCode)
    
        expect(result.index).toEqual(3)
    })    
})


describe('Given opcode is 7', () => {
    test('when the first parameter is less than the second parameter then it stores 1 in the position given by the third parameter ', () => {
        const optcode = 7
        const firstParameter = 1
        const secondParameter = 2
        const thirdParameter = 3
        const intCode = [optcode, firstParameter, secondParameter, thirdParameter, 99]
        const expected = [optcode, firstParameter, secondParameter, 1, 99]
    
        const input = 0
        const result = runIntcode(input, intCode)
    
        console.log(result.intcode)
        expect(result.intcode).toEqual(expected)
    })
    
    test('when the first parameter is not less than the second parameter then it stores 0 in the position given by the third parameter', () => {
        const optcode = 7
        const firstParameter = 2
        const secondParameter = 3
        const thirdParameter = 1
        const intCode = [optcode, firstParameter, secondParameter, thirdParameter, 99]
        const expected = [optcode, 0, secondParameter, thirdParameter, 99]
    
        const input = 0
        const result = runIntcode(input, intCode)
    
        expect(result.intcode).toEqual(expected)
    })
})

describe('Given opcode is 8', () => {
    test('when the first parameter is equal to the second paramter then it stores 1 in the position given by the third parameter', () => {
        const optcode = 8
        const firstParameter = 2
        const secondParameter = 2
        const thirdParameter = 3
        const intCode = [optcode, firstParameter, secondParameter, thirdParameter, 99]
        const expected = [optcode, firstParameter, secondParameter, 1, 99]
    
        const input = 0
        const result = runIntcode(input, intCode)
    
        expect(result.intcode).toEqual(expected)
    })

    test('when the first paramter is not equal to the second paramter then it stores 0 in the position given by the third parameter', () => {
        const optcode = 8
        const firstParameter = 2
        const secondParameter = 1
        const thirdParameter = 3
        const intCode = [optcode, firstParameter, secondParameter, thirdParameter, 99]
        const expected = [optcode, firstParameter, secondParameter, 0, 99]
    
        const input = 0
        const result = runIntcode(input, intCode)
    
        expect(result.intcode).toEqual(expected)
    })
})