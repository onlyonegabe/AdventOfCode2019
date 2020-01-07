import hasAdjacentDigits from './hasAdjacentDigits'
import digitsNeverDecrease from './digitsNeverDecrease'
import isSecureContainer from './isSecureContainer'
import getNumberOfSecureContainersForRange from './getNumberOfSecureContainersForRange'

test('Two adjacent digits are the same', () => {
    let numberWithAdjacentDigits = 112345
    expect(hasAdjacentDigits(numberWithAdjacentDigits)).toBeTruthy()
})

test('Number does not have adjacent digits', () => {
    let numberWithoutAdjacentDigits = 123456
    expect(hasAdjacentDigits(numberWithoutAdjacentDigits)).toBeFalsy()
})

test('111123 digits never decrease left to right is valid', () => {
    let number = 111123
    expect(digitsNeverDecrease(number)).toBeTruthy()
})

test('135679 digits never decrease left to right is valid', () => {
    let number = 135679
    expect(digitsNeverDecrease(number)).toBeTruthy()
})

test('135672 digits never decrease left to right is not valid', () => {
    let number = 135672
    expect(digitsNeverDecrease(number)).toBeFalsy()
})

test.each([
    [111111, false],
    [223450, false],
    [123789, false],
    [112233, true],
    [123444, false],
    [111122, true]
])('%i for determining if they are secure containers', (input, expected) => {
    expect(isSecureContainer(input)).toEqual(expected)
})

test.skip('number of secure containers for a range of numbers', () => {
    let numberOfSecureContainers = getNumberOfSecureContainersForRange(273025, 767253)
    expect(numberOfSecureContainers).toBe(598)
})
