// All JS code goes in this file.

function palindrome(str){
    if(typeof str !== 'string') { return false; }
    var word = str.replace(/\W/g, '').toLowerCase();
    var total = word.length;
    var half = Math.floor(total/2);
    var fwd, bwd;
    for(var i=0; i<half; ++i) {
        fwd = word.substring(i,i+1);
        bwd = word.substring(total-i-1, total-i);
        if(fwd !== bwd) {
            return false;
        }
    }
    return true;
}

function coinDeterminer(num){
    function getMax(num) {
        var max = 1;
        [25, 10, 5, 1].some(function(coin) {
            max = coin;
            return coin < num;
        });
        return max;
    }
    var current = num, coin, counter = 0;;
    while(current > 0) {
        coin = getMax(current);
        current -= coin;
        ++counter;
    }
    return counter;
}

function countingMinutes(strArr){
    function getMinutes(time) {
        var parts = /(\w+):(\w{2})(\w{2})/.exec(time);
        var hours = parseInt(parts[1]);
        var minutes = parseInt(parts[2]);
        var isMorning = parts[3] === 'am';

        if(isMorning) { hours += 12 }
        return hours * 60 + minutes;
    }
    var time = strArr.split('-');
    var start = getMinutes(time[0]);
    var finish = getMinutes(time[1]);
    var total = finish - start;
    return (total === 0) ? 1440 : total;

}

module.exports.palindrome = palindrome;
module.exports.coinDeterminer = coinDeterminer;
module.exports.countingMinutes = countingMinutes;