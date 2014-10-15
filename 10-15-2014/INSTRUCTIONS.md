October 2014 Challenge
=========================

# Rules

1. Update only the solutions.js file.
2. No 3rd party JS libraries can be used.
3. Complete each of the following problems.  Each has already been stubbed out in the solutions.js file.


NPM commands to get Gulp and Mocha running (not needed for the competition, but helpful to test the code in the same manner that the judge will):

*Note: Might need to run these as sudo*

    npm install -g gulp
    npm install -g mocha
    npm install
    gulp test
    
# Your Challenges:

**Palindrome:**

Have the function palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome. For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. 

**Coin Counter:**

Have the function coinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 10 and 25. So for example: if num is 16, then the output should be 3 because you can achieve the number 16 with the coins 1, 5 and 10. If num is 29, then the output should be 5 (1x25 and 4x1).

**Counting Minutes:**

Have the function countingMinutes(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 

Good luck!  Submit your pull request back to the repo ONLY when you have a solution, not before. First dev with all 3 solutions that pass my tests, wins!