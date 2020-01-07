import getArrayFromFile from './getArrayFromFile'
import fuelRequired from './rocketFuelEquation'

let totalFuelRequirement = 0

export default function fuelRequiredForMassFile(file) {
    let arrayOfModuleMass = getArrayFromFile(file)
    arrayOfModuleMass.forEach(getTotalFuelRequirement)
    return totalFuelRequirement
}

function getTotalFuelRequirement(item, index) {
    totalFuelRequirement += fuelRequired(item)
}