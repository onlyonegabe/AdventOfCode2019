import runIntcode from "./runIntcode"

describe('Using position mode', () => {
    describe('example 1', () => {
        test('with input 8 should output 1', () => {
            const intCode = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]
            const input = 8
        
            const result = runIntcode(input, intCode)
        
            expect(result.output).toEqual(1)
        })
    
        test('with input 7 should output 0', () => {
            const intCode = [3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]
            const input = 7
        
            const result = runIntcode(input, intCode)
        
            expect(result.output).toEqual(0)
        })
    })
    
    describe('example 2', () => {
        test('with input 7 should output 1', () => {
            const intCode = [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]
            const input = 7
    
            const result = runIntcode(input, intCode)
    
            expect(result.output).toEqual(1)
        })
    
        test('with input 8 should output 0', () => {
            const intCode = [3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]
            const input = 8
    
            const result = runIntcode(input, intCode)
    
            expect(result.output).toEqual(0)  
        })
    })

    describe('jump test example', () => {
        test('with input 0 should output 0', () => {
            const intCode = [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]
            const input = 0

            const result = runIntcode(input, intCode)
    
            expect(result.output).toEqual(0)  
        })

        test('with input nonzero should output 1', () => {
            const intCode = [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9]
            const input = 1

            const result = runIntcode(input, intCode)
    
            expect(result.output).toEqual(1)
        })
    })
})

describe('Using immediate mode', () => {
    describe('example 1', () => {
        test('with input 8 should output 1', () => {
            const intCode = [3, 3, 1108, -1, 8, 3, 4, 3, 99]
            const input = 8
        
            const result = runIntcode(input, intCode)
        
            expect(result.output).toEqual(1)
        })
    
        test('with input 7 should output 0', () => {
            const intCode = [3, 3, 1108, -1, 8, 3, 4, 3, 99]
            const input = 7
        
            const result = runIntcode(input, intCode)
        
            expect(result.output).toEqual(0)
        })
    })
    
    describe('example 2', () => {
        test('with input 7 should output 1', () => {
            const intCode = [3, 3, 1107, -1, 8, 3, 4, 3, 99]
            const input = 7
        
            const result = runIntcode(input, intCode)
        
            expect(result.output).toEqual(1)
        })
    
        test('with input 8 should output 0', () => {
            const intCode = [3, 3, 1107, -1, 8, 3, 4, 3, 99]
            const input = 8
        
            const result = runIntcode(input, intCode)
        
            expect(result.output).toEqual(0)
        })
    })

    describe('jump test example', () => {
        test('with input 0 should output 0', () => {
            const intCode = [3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1]
            const input = 0

            const result = runIntcode(input, intCode)
    
            expect(result.output).toEqual(0)  
        })

        test('with input nonzero should output 1', () => {
            const intCode = [3, 3, 1105, -1, 9, 1101, 0, 0, 12, 4, 12, 99, 1]
            const input = 1

            const result = runIntcode(input, intCode)
    
            expect(result.output).toEqual(1)
        })
    })
})


