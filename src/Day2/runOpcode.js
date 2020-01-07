export default function runOpcode(opcode) {
    let position1
    let position2
    let position3
    let result
    let index = 0
    let value
    while(true) {
        position1 = opcode[index + 1]
        position2 = opcode[index + 2]
        position3 = opcode[index + 3]
        value = opcode[index]
        if (value === 1) {
            result = opcode[position1] + opcode[position2]
        }
        else if (value === 2) {
            result = opcode[position1] * opcode[position2]       
        }
        else if (value === 99) {
            break
        }
        else {
            console.log('something went wrong')
            console.log(`value read was ${value}`)
            console.log(`index is ${index}`)
            break
        }
        opcode[position3] = result
        index += 4
    }
    
    return opcode
}