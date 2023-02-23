// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
   let location = 42
   let distance = Math.abs (pickup - location)
    return distance 
}

function distanceFromHqInFeet(inBlocks) {
    let distance2 = distanceFromHqInBlocks(inBlocks) * 264 
    return distance2
}

function distanceTravelledInFeet(pickup, dropoff) {
    let footTravel = Math.abs (pickup - dropoff) * 264
    return footTravel
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination)

    if (distance < 400) {
        return 0
    }
    else if (distance >= 400 && distance <= 2000) {
        return (distance - 400) * 0.02
    } 
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}