chrome.browserAction.onClicked.addListener(function(activeTab){
  var url = activeTab.url;
  var json = url.slice(0, -1) + ".json";
  chrome.tabs.create({ url: json }, function(tab){ 
	chrome.tabs.executeScript({file: "findvideourl.js"});
  });
});