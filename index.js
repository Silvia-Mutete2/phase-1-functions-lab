//distanceFromHqInBlocks
function distanceFromHqInBlocks(distance) {
	return Math.abs(42-distance);
}

//distanceFromHqInFeet
function distanceFromHqInFeet(distance) {
	return (parseInt(distanceFromHqInBlocks(distance),10) *264);
}

//distanceTravelledInFeet
function distanceTravelledInFeet(start,destination) {
	
if (start >destination){
	let distance = start -destination;
}else {
	let distance = destination - start;
}
return (parseInt((destination), 10) *264);
}
//calculatesFarePrice
function calculatesFarePrice(start,destination) {
	let distance = distanceTravelledInFeet(start,destination)
	if (distance < 400) {
		return 0;
	}
	else if (distance >= 400 && distance <= 2000) {
		return (distance - 400) * 0.02;
	}
	else if (distance > 2000 && distance < 2500) {
		return 25;
	}
	else {
		return 'cannot travel that far';
	}
}