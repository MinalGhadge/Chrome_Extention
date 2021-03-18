		    var logOfConsole = [];

var _log = console.log,
    _warn = console.warn,
    _error = console.error;

console.log = function() {
    logOfConsole.push({method: 'log', arguments: arguments});
    return _log.apply(console, arguments);
};

console.warn = function() {
    logOfConsole.push({method: 'warn', arguments: arguments});
    return _warn.apply(console, arguments);
};

console.error = function() {
    logOfConsole.push({method: 'error', arguments: arguments});
    return _error.apply(console, arguments);
};

console.log(logOfConsole);
console.defaultDebug = console.debug.bind(console);
console.debugs = [];
console.debug = function(){
    // default &  console.debug()
    console.defaultDebug.apply(console, arguments);
    // new & array data
    console.debugs.push(Array.from(arguments));
    
}
console.defaultLog = console.log.bind(console);
console.logs = [];
console.log = function(){
    // default &  console.log()
    console.defaultLog.apply(console, arguments);
    // new & array data
    console.logs.push(Array.from(arguments));
}
console.log(console.logs);




chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {

		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};
document.addEventListener('yourCustomEvent', function (e) {
  var data = e.detail;
  console.log('received', data);
  chrome.storage.local.set({"datanew": data});
});
		// ----------------------------------------------------------

	}
	}, 10); 

});
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(request.method, true, true);
        document.dispatchEvent(evt);
    });
