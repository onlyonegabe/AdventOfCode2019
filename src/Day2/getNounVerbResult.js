import runOpcode from './runOpcode'

export default function getNounVerbResult(value, opcode) {
    const orignalOpcode = opcode.slice(0)

    let i
    let j
    for (i = 0; i < 100; i++) {
        for (j = 0; j < 100; j++){
            let newOpcode = orignalOpcode.slice(0)
            newOpcode[1] = i
            newOpcode[2] = j
            newOpcode = runOpcode(newOpcode)
            if (newOpcode[0] === value) {
                return 100 * i + j;
            }
            else {
                newOpcode = orignalOpcode.slice(0)
            }
        }
    }
}