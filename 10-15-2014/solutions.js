// All JS code goes in this file.

function palindrome(str){
	var str = str.toLowerCase().replace(/[^A-Za-z]/g, '');
    for(i = 0; i < Math.floor(str.length / 2); i++){
		if(str.charAt(i) !== str.charAt(str.length - i - 1)){
			return false;
		}
	}
	return true;
}

function coinDeterminer(num){
	var numRemaining = num;
	var coinAmount = null;
	var coinAmounts = [1, 5, 10, 25].reverse();
	var coins = 0;
	var taken = 0;
	
	for(i = 0; i < coinAmounts.length; i++){
		coinAmount = coinAmounts[i];
		if(numRemaining / coinAmount >= 1){

			taken = Math.floor(numRemaining / coinAmount);
			coins = coins + taken;
			numRemaining -= taken * coinAmount;
			console.log(coinAmount, taken, numRemaining);
		}
	}

    return coins;
}

function countingMinutes(strArr){
	var times = strArr.split('-');
	console.log(determineMinutes(times[1]), determineMinutes(times[0]));
	val = determineMinutes(times[1]) - determineMinutes(times[0]);
	if(val < 0){
		return val + (24 * 60);
	}
	if(val === 0){
		return val * -1 + (24 * 60);
	}
	return val;
    //return true;
}

function determineMinutes(str){
	var woo = str.replace(/[^\d:]/g, '').split(':');
	var isPM = str.indexOf('pm') !== -1;
	if(isPM){
		woo[0] = parseInt(woo[0]) + 12;
	} else if(!isPM && woo[0] === '12'){
		woo[0] = 0;
	}
	return parseInt(woo[0]) * 60 + parseInt(woo[1]);
}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;