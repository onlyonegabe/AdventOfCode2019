export default function hasAdjacentDigits(number) {
    let numberString = number.toString()
    let lastDigit = numberString[0]
    for (let i = 1; i < numberString.length; i++) {
        let currentDigit = numberString[i];
        if (currentDigit === lastDigit) {
            if (i === numberString.length - 1 ||
                currentDigit !== numberString[i + 1]) {
                return true
            }  
            i++
            while (i < numberString.length) {
                currentDigit = numberString[i]
                let nextDigit = numberString[i + 1]
                if (currentDigit !== nextDigit) {
                    lastDigit = currentDigit
                    break
                }
                i++
            } 
        }
        lastDigit = currentDigit
    }
    return false
}