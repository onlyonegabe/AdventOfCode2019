import fuelRequired from './rocketFuelEquation'

export default function completeFuelRequired(mass) {
    let completeFuelRequirement = 0
    let additionalFuelRequired = fuelRequired(mass)
    completeFuelRequirement += additionalFuelRequired
    while(additionalFuelRequired > 0) {
        additionalFuelRequired = fuelRequired(additionalFuelRequired)
        if (additionalFuelRequired > 0) {
            completeFuelRequirement += additionalFuelRequired
        }
    }
    return completeFuelRequirement
}