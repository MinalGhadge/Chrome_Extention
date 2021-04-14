

document.addEventListener('DOMContentLoaded', () => {

	var isExtensionOn = false;
    const infoDisplay = document.getElementById('acc');   
    const run_me=document.getElementById('run_me');
    const gta=document.getElementById('gta');
    const serviceworker=document.getElementById('serviceworker');
    const login=document.getElementById('login');
    const ctid=document.getElementById('ctid');
    const msg=document.getElementById('msg');
    const loginagain=document.getElementById('loginagain');
    const test=document.getElementById('test');
    const refresh=document.getElementById('refresh');
    // const swbutton=document.getElementById('swbutton');
    window.addEventListener('DOMContentLoaded', function () {
    	
 chrome.storage.local.get("datanew", function(data) {
	console.log(JSON.stringify(data.datanew.account.id));
    // console.log(JSON.stringify(data.datanew.clevertapid));
    if(typeof data == "undefined") {
        console.log("error");
    } else {
     infoDisplay.innerHTML = data.datanew.account.id;
     serviceworker.innerHTML="Service worker is "+data.datanew.worker;
     run_me.style.background="#FF0000";
	run_me.innerText="Ct Debugger is  OFF";
     run_me.addEventListener("click", turnon);
     gta.addEventListener("click",function(){gotoaccount(data.datanew.account.id)},false); 
     login.addEventListener("click",function(){firstlogin(msg.innerHTML="Logout and Login again with different email",ctid.innerHTML="CTID:"+data.datanew.clevertapid)});
     loginagain.addEventListener("click",function(){again(ctid.innerHTML="CTID:"+data.datanew.clevertapid)});
     test.addEventListener("click",check);
    //  swbutton.addEventListener("click",load);
     refresh.addEventListener("click",refreshpage);
    // });
      //searches for and detects the input element from the 'myButton' id
//acc.value = JSON.stringify(data.datanew.account.id);
//console.log(JSON.stringify(data.datanew.account.id));
    }
    
    });
    });

function turnon()
{
	run_me.style.background="#505050";
	run_me.innerText="Ct Debugger is ON"
chrome.tabs.executeScript(null, {
    code: "sessionStorage['WZRK_D'] = '';document.location.reload(true);"
});
chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
    chrome.tabs.reload(arrayOfTabs[0].id);
});
}

});

function refreshpage()
{
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        chrome.tabs.reload(arrayOfTabs[0].id);
    });
}

function hello() {
    chrome.tabs.executeScript({
      file: 'swchecker.js'
    }); 
}

function gotoaccount(e)
{ 
    const getoption = drop1.options[drop1.selectedIndex]
    if(getoption.value== "in1")
    {
        window.open("https://in1.dashboard.clevertap.com/"+e+"/main", '_blank');
    }
    else if(getoption.value== "eu1")
    {
        window.open("https://eu1.dashboard.clevertap.com/"+e+"/main", '_blank');
    }
    else if(getoption.value== "sg1")
    {
        window.open("https://sg1.dashboard.clevertap.com/"+e+"/main", '_blank');
    }
    else if(getoption.value== "us1")
    {
        window.open("https://us1.dashboard.clevertap.com/"+e+"/main", '_blank');
    }
}


function firstlogin()
{
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { method: "firstLogin" }, function (response) {
                
            });
        });
}

function again()
{
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                    chrome.tabs.sendMessage(tabs[0].id, { method: "secondLogin" }, function (response) {
                    });
                });
        
}

function check(e)
{
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { method: "test" }, function (response) { 
            });
            
        });
}

// function load(){
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id, { method: "load" }, function (response) { 
//             // alert("Add CT service worker file to root folder.")
//         });
        
//     });
// }
