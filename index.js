//distanceFromHqInBlocks
function distanceFromHqInBlocks(distance) {
	return Math.abs(42-distance);
}

//distanceFromHqInFeet

function distanceFromHqInFeet(start){
    return (parseInt(distanceFromHqInBlocks(start), 10) * 264);
}

///distanceTravelledInFeet
function distanceTravelledInFeet(start, destination){
    if (start > destination){
        var distance = start - destination;
    }else{
        var distance = destination - start;
    }
    return (parseInt((distance), 10) * 264);
}


//calculatesFarePrice
function calculatesFarePrice(start,destination) {
	let charges = distanceTravelledInFeet(start,destination)
	if (charges <= 400) {
		return 0;
	}
	else if (charges <= 2000) {
		return (charges - 400) * 0.02;
	}
	else if (charges <= 2500) {
		return 25;
	}
	else {
		return 'cannot travel that far';
	}
}