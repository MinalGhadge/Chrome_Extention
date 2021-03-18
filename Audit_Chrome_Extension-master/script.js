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

    
     var stringalert=JSON.stringify(arguments)
   if(stringalert.includes("endpoint"))
   {
   	console.log(stringalert);
   	var firststring="\"endpoint\":\"";
   	var secondstring="\",";
console.debugs.push(Array.from(arguments));
console.log("bimbsdfsdfasdfasdf");
var fcm =stringalert.match(new RegExp(firststring + "(.*)" + secondstring));
console.log(fcm);

   }
    
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
console.log(console.debugs);
console.log(clevertap.account["0"]);

console.log(clevertap.getCleverTapID());
var data = {
  account: clevertap.account["0"],
  clevertapid: clevertap.getCleverTapID(),
  worker: "not registered",

};
document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
workertest();

function workertest()
{
	var	worker_var;
	if('serviceWorker' in navigator)
	{
		console.log('Service workers are supported.');
navigator.serviceWorker.ready.then((a) => {
	console.log("Response, ", a);
	if (a.active !== null) {
		worker_var=a.active.state;
console.log(a.active.state);
var data = {
  account: clevertap.account["0"],
  clevertapid: clevertap.getCleverTapID(),
  worker: worker_var,

};
document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
	}
});
}
}

document.addEventListener('firstLogin', function (e)
{
    const localStorageContent = localStorage.getItem("CleverTapID");
    let CleverTapID;
        if(localStorageContent === null)
        {
             CleverTapID = [];
        }
        else
        {
             CleverTapID = JSON.parse(localStorageContent);
        }
    CleverTapID.push(clevertap.getCleverTapID());
    localStorage.setItem('CleverTapID',JSON.stringify(CleverTapID));
});

document.addEventListener('secondLogin' ,function (e)
{
    const Content = localStorage.getItem("CTID");
    let CTID;
        if(Content === null)
        {
            CTID = [];
        }
        else
        {
            CleverTapID = JSON.parse(Content);
        }
    CTID.push(clevertap.getCleverTapID());
    localStorage.setItem('CTID',JSON.stringify(CTID));

});
//for Testing onOserLogin implementation
document.addEventListener('test', function(e)
{  
    var localStorageContent = localStorage.getItem("CleverTapID");
    var Content = localStorage.getItem("CTID");

        if(localStorageContent !== Content){
            alert('onUserLogin implementation successful');
            // console.log('onUserLogin implementation successful');
        }
       else{
        alert('onUserLogin implementation failed');
        // console.log('onUserLogin implementation failed');
       }  
});
//To generate json file 
// (function(console){

//     console.save = function(data, filename){
    
//         if(!data) {
//             console.error('Console.save: No data')
//             return;
//         }
    
//         if(!filename) filename = 'console.json'
    
//         if(typeof data === "object"){
//             data = JSON.stringify(data, undefined,2)
//         }
    
//         var blob = new Blob([data], {type: 'text/json'}),
//             e    = document.createEvent('MouseEvents'),
//             a    = document.createElement('a')
    
//         a.download = filename
//         a.href = window.URL.createObjectURL(blob)
//         a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
//         e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
//         a.dispatchEvent(e)
//      }
//     })(console)
//     console.save(data,'Mydemo.json');
    // console.save(data, 'mydemo.json');
