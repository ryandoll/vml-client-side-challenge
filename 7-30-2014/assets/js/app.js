(function (window, undefined) {

	function createCORSRequest(method, url){
		var xhr = new XMLHttpRequest();
		if ("withCredentials" in xhr){
			xhr.open(method, url, true);
		} else if (typeof XDomainRequest != "undefined"){
			xhr = new XDomainRequest();
			xhr.open(method, url);
		} else {
			xhr = null;
		}
		return xhr;
	}

	function addClass(el, className){
		if (el.classList) {
			el.classList.add(className);
		}
		else {
			el.className += ' ' + className;
		}
	}

	function removeClass(el, className) {
		if (el.classList) {
			el.classList.remove(className);
		}
		else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}

	// Request the xml feed
	var request = createCORSRequest("get", "http://finance.yahoo.com/rss/headline?s=goog,appl,yhoo,msft");

	if(request) {
		// Grab list and iframe#portal
		var list = document.getElementById("response");
		var portal = document.getElementById('portal');
		var items;

		// Process data when response is received
		request.onload = function(){
			items = request.responseXML.querySelectorAll('item');
			items = Array.prototype.slice.call(items, null);
			
			// Output list-group links
			items.forEach(function(item) {
				var title = item.childNodes[0];
				var link = item.childNodes[1];
				var anchor = document.createElement('a');
				addClass(anchor, 'list-group-item');
				anchor.href = link.innerHTML;
				anchor.innerHTML = title.innerHTML;
				list.appendChild(anchor);

				anchor.onclick = function(e) {
					e.preventDefault();
					// Update page displayed in portal
					portal.src = e.target.href;
					// Remove active class from sibling list-group-item
					var siblings = document.querySelectorAll('.list-group-item');
					siblings = Array.prototype.slice.call(siblings, null);
					siblings.forEach(function(sibling){
						removeClass(sibling, 'active');
					});
					// Add active class to current target
					addClass(e.target, 'active');
				};
			});
			
			// Set portal source to first list item
			portal.src = items[0].childNodes[1].innerHTML;
			// Add active class to first list item
			addClass(document.querySelectorAll('.list-group-item')[0], 'active');
		};
		request.send();
	}
})(this);
