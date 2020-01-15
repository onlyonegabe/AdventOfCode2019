import runIntcode from './runIntcode'
import getOpcodeFromFile from '../Day5/getOpcodeFromFile'

test('part B', () => {
    let intcode = getOpcodeFromFile('src/Day5/program.data')
    let expectedDiagnosticCode = 0

    let result = runIntcode(5, intcode)
    expect(result.output).toBe(expectedDiagnosticCode)
})