import hasAdjacentDigits from "./hasAdjacentDigits";
import digitsNeverDecrease from "./digitsNeverDecrease";

export default function isSecureContainer(number) {
    if (isSixDigits(number)
        && hasAdjacentDigits(number)
        && digitsNeverDecrease(number)) {
        return true
    }
    return false
}

function isSixDigits(number) {
    return number.toString().length === 6
}