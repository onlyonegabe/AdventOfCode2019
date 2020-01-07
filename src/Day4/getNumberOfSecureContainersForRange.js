import isSecureContainer from "./isSecureContainer"

export default function getNumberOfSecureContainersForRange(start, end) {
    let numberOfSecureContainers = 0

    let currentNumber = start
    while (currentNumber <= end) {
        if (isSecureContainer(currentNumber)) {
            numberOfSecureContainers++
        } 
        currentNumber++
    }

    return numberOfSecureContainers
}