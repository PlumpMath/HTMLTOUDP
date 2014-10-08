chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("browseraction clicked");
	chrome.tabs.executeScript(null, { file: "jquery-2.1.1.min.js" }, function() {
        chrome.tabs.executeScript(null, { file: "content.js" });
        });
});


