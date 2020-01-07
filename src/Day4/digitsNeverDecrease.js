export default function digitsNeverDecrease(number) {
    let numberString = number.toString()
    let lastDigit = numberString[0]
    for (let i = 1; i < numberString.length; i++) {
        let currentDigit = numberString[i];
        if (currentDigit < lastDigit) {
            return false
        }
        lastDigit = currentDigit
    }
    return true
}