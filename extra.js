// loop through child elements and send back stripped-version
// only element nodes (vs child_nodes)
// we're going to remove SCRIPT and NOSCRIPT
function stripAll() {
	var all = document.body.children; 
	var some = document.createElement("HTML"); 

	for (var i = 0; i < all.length; i++) {
		if (all[i].nodeName != 'SCRIPT' && all[i].nodeName != 'NOSCRIPT') {
			// add it to some
			var copyNode = all[i].cloneNode(true);
			some.appendChild(copyNode);

		}
	}
	return some.outerHTML;
}

// communicate back to caller
chrome.runtime.sendMessage({
    action: "getSource",
    source: stripAll(document)
}); 
