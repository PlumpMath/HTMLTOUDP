//document.addEventListener("click", function(){ alert("Hello World!"); });
/*
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, { file: "jquery-1.8.2.min.js" }, function() {
        chrome.tabs.executeScript(null, { file: "content.js" });
        });

});
*/
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message.popupOpen) {
	 alert("man");
  }
});


