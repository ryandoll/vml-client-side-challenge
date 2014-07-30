July 2014 Challenge
=========================

# Rules

1. Update only the index.html and js/app.js file.
2. No 3rd party JS libraries can be used (Including jQuery).
3. Bootstrap CSS has been included for styling, if needed.
4. Pull in the XML data from [http://finance.yahoo.com/rss/headline?s=goog,appl,yhoo,msft](http://finance.yahoo.com/rss/headline?s=goog,appl,yhoo,msft)
    - Tip: Pulling in this feed in your dev environment will give you a no 'Access-Control-Allow-Origin' header is present on the requested resource error. I would recommend deving in a tool like Chrome or Chrome Canary, and start it with security options disabled like so:
        - open -a Google\ Chrome\ Canary --args --disable-web-security -–allow-file-access-from-files
5. Display all of the news links on the left side of the page.
6. When a link is clicked on, prevent it from going to the actual article, and have it open in an iFrame to the right of links you created above.
7. There is an image of an acceptable result in this directory called result.png.

Good luck!  Submit your pull request back to the repo ONLY when you have a solution, not before. First working answer submitted, wins!