// All JS code goes in this file.
(function (window, undefined) {
  var feedUrl = 'http://finance.yahoo.com/rss/headline?s=goog,appl,yhoo,msft';

  var req = new XMLHttpRequest();

  var navLinks = document.getElementById('nav__links');
  var iframed = document.getElementById('iframed');
  console.log(navLinks);

  function reqListener () {
    console.log(this.responseXML);
    var items = this.responseXML.querySelectorAll('item');
    var links = this.responseXML.querySelectorAll('item link');
    links = Array.prototype.slice.call(links, null);
    items = Array.prototype.slice.call(items, null);

    window.links = links;

    items.forEach(function(item, i) {
      //console.log('here', item.childNodes);
      var title = item.childNodes[0];
      var link = item.childNodes[1];
      var anchor = document.createElement('a');
      anchor.href = link.innerHTML;
      anchor.innerHTML = title.innerHTML;
      anchor.onclick = function(e) {
        console.log(e.target);
        e.preventDefault();

        iframed.src = e.target.href;
      }
      var li = document.createElement('li');
      li.appendChild(anchor);
      navLinks.appendChild(li);
    });
    /*
    links.forEach(function(link, i) {
      //console.log(link.innerHTML);
      var anchor = document.createElement('a');
      anchor.href = link.innerHTML;
      anchor.innerHTML = i;
      anchor.onclick = function(e) {
        console.log(e.target);
        e.preventDefault();

        iframed.src = e.target.href;
      }
      var li = document.createElement('li');
      li.appendChild(anchor);
      navLinks.appendChild(li);
    });
    */
    window.resp = this;
  }

  req.onload = reqListener;
  req.open('get', feedUrl, true);
  req.send();

})(this);
