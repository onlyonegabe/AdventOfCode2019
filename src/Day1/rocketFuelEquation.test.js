import fuelRequired from './rocketFuelEquation'
import fuelRequiredForMassFile from './fuelRequiredForMassFile'
import completeFuelRequired from './completeFuelRequired'
import completeFuelRequiredForMassFile from './completeFuelRequiredForMassFile.js'

test("mass of 12 requires 2 units of fuel", () => {
    expect(fuelRequired(12)).toBe(2)
})

test("mass of 14 requires 2 units of fuel", () => {
    expect(fuelRequired(14)).toBe(2)
})

test("mass of 1969 requires 654 units of fuel", () => {
    expect(fuelRequired(1969)).toBe(654)
})

test("mass of 100756 requires 33583 units of fuel", () => {
    expect(fuelRequired(100756)).toBe(33583)
})

test("Sum of fuel requirements", () => {
    expect(fuelRequiredForMassFile("src/Day1/massOfMyModules.data")).toBe(3455717)
})

test("mass of 1969 including fuel mass requires 654 units of fuel", () => {
    expect(completeFuelRequired(1969)).toBe(966)
})

test("mass of 100756 including fuel mass requires 50346", () => {
    expect(completeFuelRequired(100756)).toBe(50346)
})

test("Complete sum of fuel requirements", () => {
    expect(completeFuelRequiredForMassFile("src/Day1/massOfMyModules.data")).toBe(5180690)
})