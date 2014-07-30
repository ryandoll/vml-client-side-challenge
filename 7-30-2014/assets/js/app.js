// All JS code goes in this file.

function reqListener () {
    var nav = document.getElementById('nav');
    var items = this.responseXML.getElementsByTagName('item');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var link = document.createElement('a');
        link.href = item.getElementsByTagName('link')[0].innerHTML;
        link.innerHTML = item.getElementsByTagName('title')[0].innerHTML;
        link.target = "iftargetname";
        nav.appendChild(link);
        nav.appendChild(document.createElement('br'));
    }
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "http://finance.yahoo.com/rss/headline?s=goog,appl,yhoo,msft", true);
oReq.send();
