//distanceFromHqInBlocks
function distanceFromHqInBlocks(distance) {
	return Math.abs(42-distance);
}

//distanceFromHqInFeet
function distanceFromHqInFeet(distance) {
	return Math.abs(distanceFromHqInBlocks(distance))*264;
}

//distanceTravelledInFeet
function distanceTravelledInFeet(start,destination) {
	return Math.abs(start-destination)*264;
}

//calculatesFarePrice
function calculatesFarePrice(start,destination) {
	const distance = distanceTravelledInFeet(start,destination)
	if (distance < 400) {
		return 0;
	}
	else if (distance >= 400 && distance <= 2000) {
		return (distance - 400) * .02;
	}
	else if (distance > 2000 && distance < 2500) {
		return 25;
	}
	else {
		return 'cannot travel that far';
	}
}