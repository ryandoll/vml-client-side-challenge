var assert = require("assert"),
    solutions = require('./../solutions.js');

describe('palindrome', function(){
    it('Racecar - TRUE', function(){
        assert.equal(true, solutions.palindrome('Racecar'));
    });
    it('Ryan Doll - FALSE', function(){
        assert.equal(false, solutions.palindrome('Ryan Doll'));
    });
    it('Anne, I vote more cars race Rome-to-Vienna - TRUE', function(){
        assert.equal(true, solutions.palindrome('Anne, I vote more cars race Rome-to-Vienna'));
    });
});

describe('coinDeterminer', function(){
    it('16 should return 3', function(){
        assert.equal(3, solutions.coinDeterminer(16));
    });
    it('29 should return 5', function(){
        assert.equal(5, solutions.coinDeterminer(29));
    });
    it('78 should return 6', function(){
        assert.equal(6, solutions.coinDeterminer(78));
    });
});

describe('countingMinutes', function(){
    it('9:00am-10:00am should return 60', function(){
        assert.equal(60, solutions.countingMinutes('9:00am-10:00am'));
    });
    it('1:00pm-11:00am should return 1320', function(){
        assert.equal(1320, solutions.countingMinutes('1:00pm-11:00am'));
    });
    it('12:00pm-12:00pm should return 1440', function(){
        assert.equal(1440, solutions.countingMinutes('12:00pm-12:00pm'));
    });
});
