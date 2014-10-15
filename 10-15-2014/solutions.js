// All JS code goes in this file.

function stripPunc(str) {
    return str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\ /g, '');
}

function palindrome(str){
    var isPalindrome;
    var strAsArr;
    var half;
    var start;
    var end;

    if( typeof str == 'string' ) {

        str = stripPunc(str).toLowerCase();
        console.log(str);
        half = Math.floor(str.length / 2);
        strAsArr = str.split('');
        start = strAsArr.slice(0, half);
        end = strAsArr.slice(-half);
        end = end.reverse();

        start = start.join('');
        end = end.join('');
        //console.log(start.join(''), end.join(''));

        isPalindrome = (start === end);

        return isPalindrome;
    } else {
        throw new TypeError('palindrome works on strings');
    }
}

function coinDeterminer(num){

    var coins = [25,10,5,1];

    var quarters = 0, dimes = 0, nickles = 0, pennies=0;


    return coins.reduce(function (memo, coin, arr) {
        if( num >= coin) {
            memo += Math.floor(num / coin);
            num = num % coin;
        }
        return memo;
    }, 0);
}

function countingMinutes(strArr){

    strArr = strArr.split('-');
    var start = strArr[0], end=strArr[1];

    var startM = start.slice(-2).toLowerCase();
    var endM = end.slice(-2).toLowerCase();

    var startArr = start.replace(startM, '').split(':');
    var endArr = end.replace(endM, '').split(':');

    if( start == end ) {
        return 1440;
    }

    var minutes;

    function convertToInt(num) {
        var int =  parseInt(num, 10);
        if (int === 12) {
            int = 0;
        }
        return int;
    }

    startArr = startArr.map(convertToInt);
    endArr = endArr.map(convertToInt);


    if ( !!~startM.indexOf('p') ) {
        startArr[0] += 12;
    }

    if ( !!~endM.indexOf('p') ) {
        endArr[0] += 12;
    }

    minutes = endArr[1] - startArr[1];

    if ( minutes < 0 ) {
        minutes += 60;
        --endArr[0];
    }

    minutes += (endArr[0] - startArr[0]) * 60;
    if(minutes < 0) {
        minutes += 1440;
    }

    return minutes;

}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;