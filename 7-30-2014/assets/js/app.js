// All JS code goes in this file.

function reqListener () {
    //console.log(this.responseXML); //.responseText);
    var xml = this.responseXML;
    var items = xml.getElementsByTagName('item');
    console.log(items);
    var nav = document.getElementById('nav');
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        console.log(item);
        var link = document.createElement('a');
        link.href = item.getElementsByTagName('link')[0].innerHTML;
        link.innerHTML = item.getElementsByTagName('title')[0].innerHTML;
        link.onclick = function() {
          document.getElementById('iftarget').src = this.href;
            return false;
        };
        nav.appendChild(link);
        nav.appendChild(document.createElement('br'));
    }
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "http://finance.yahoo.com/rss/headline?s=goog,appl,yhoo,msft", true);
oReq.send();
