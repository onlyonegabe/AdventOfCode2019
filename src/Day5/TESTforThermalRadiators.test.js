import runIntcode from "./runIntcode"

describe('Given opcode is 5', () => {
    test('when the first parameter is non-zero then it sets the instruction pointer to the value from the second parameter value', () => {
        const optcode = 5
        const firstParameter = 3
        const secondParameter = 4
        const intCode = [optcode, firstParameter, secondParameter, 5, 99]
        
        const input = 0
        const result = runIntcode(input, intCode)
        
        expect(result.index).toEqual(secondParameter)
    })

    test('when the first parameter is zero then it does nothing', () => {
        const optcode = 5
        const firstParameter = 0
        const secondParameter = 6
        const intCode = [optcode, firstParameter, secondParameter, 5, 99]

        const input = 0
        const result = runIntcode(input, intCode)

        expect(result.intcode).toEqual(intCode)
    })
})

describe('Given opcode is 6', () => {
    test('when the first parameter is zero then it sets the instruction pointer to the value from the second parameter value', () => {
        const optcode = 6
        const firstParameter = 0
        const secondParameter = 6
        const intCode = [optcode, firstParameter, secondParameter, 5, 99]

        const input = 0
        const result = runIntcode(input, intCode)

        expect(result.index).toEqual(secondParameter)
    })

    test('when the first parameter is zero then it does nothing', () => {
        const optcode = 6
        const firstParameter = 3
        const secondParameter = 6
        const intCode = [optcode, firstParameter, secondParameter, 5, 99]
        
        const input = 0
        const result = runIntcode(input, intCode)
    
        expect(result.intcode).toEqual(intCode)
    })    
})


describe('Given opcode is 7', () => {
    test('when the first parameter is less than the second parameter then it stores 1 in the position given by the third parameter ', () => {
        const optcode = 7
        const firstParameter = 1
        const secondParameter = 2
        const thirdParameter = 4
        const intCode = [optcode, firstParameter, secondParameter, thirdParameter, 8, 99]
        const expected = [optcode, firstParameter, secondParameter, thirdParameter, 1, 99]
    
        const input = 0
        const result = runIntcode(input, intCode)
    
        expect(result.intcode).toEqual(expected)
    })
    
    test('when the first parameter is not less than the second parameter then it stores 0 in the position given by the third parameter', () => {
        const optcode = 7
        const firstParameter = 2
        const secondParameter = 1
        const thirdParameter = 4
        const intCode = [optcode, firstParameter, secondParameter, thirdParameter, 8, 99]
        const expected = [optcode, firstParameter, secondParameter, thirdParameter, 0, 99]
    
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
    
        console.log(result.intcode)
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