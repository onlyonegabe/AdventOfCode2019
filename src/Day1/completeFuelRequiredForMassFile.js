import getArrayFromFile from './getArrayFromFile'
import completeFuelRequired from './completeFuelRequired'

let totalFuelRequirement = 0

export default function completeFuelRequiredForMassFile(file) {
    let arrayOfModuleMass = getArrayFromFile(file)
    arrayOfModuleMass.forEach(getTotalFuelRequirement)
    return totalFuelRequirement
}

function getTotalFuelRequirement(item, index) {
    totalFuelRequirement += completeFuelRequired(item)
}