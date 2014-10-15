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

    var coins = [1,5,10,25];

    var quarters = 0, dimes = 0, nickles = 0, pennies=0;

    if( num >= 25) {
        quarters = Math.floor(num / 25); 
        num = num % 25;
        //console.log(num);
    }

    if (num >= 10 ) {
        dimes = Math.floor(num / 10);
        num = num % 10;
        //console.log(num);
    }

    if( num >= 5 ) {
        nickles = Math.floor(num / 5);
        num = num % 5;
        //console.log(num);
    }

    if( num >= 1) {
        pennies = num;
        //console.log(num);
    }

    console.log([quarters, dimes, nickles, pennies]);

    return quarters+dimes+nickles+pennies;
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

    if ( endArr[0] === '12' ) {
        endArr[0] === 0;
    }

    startArr = startArr.map(function (num) {
        return parseInt(num, 10);
    });

    endArr = endArr.map(function (num) {
        return parseInt(num, 10);
    });

    //console.log(startM, endM);

    if ( !!~startM.indexOf('p') ) {
        startArr[0] += 12;
    }

    if ( !!~endM.indexOf('p') ) {
        endArr[0] += 12;
    }

    console.log(startArr, endArr);

    //if( endArr[1] > startArr[1] ) {
    minutes = endArr[1] - startArr[1];
    //}

    //if( endArr[0] > strArr[0] ) {
        
    minutes += (endArr[0] - startArr[0]) * 60;
    //}
    if(minutes < 0) {
        minutes += 1440;
    }

    console.log(minutes);
    return minutes;

}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;