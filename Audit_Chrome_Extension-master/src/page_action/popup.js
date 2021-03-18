
document.addEventListener('DOMContentLoaded', () => {

	var isExtensionOn = false;
    const infoDisplay = document.getElementById('acc');   
    const infoctid=document.getElementById('ctid') ;
    const run_me=document.getElementById('run_me');
    const gta=document.getElementById('gta');
    const drop1=document.getElementById('drop1');
    const serviceworker=document.getElementById('serviceworker');
    const login=document.getElementById('login');
    const loginagain=document.getElementById('loginagain');
    const test=document.getElementById('test');
    // const userlogin=document.getElementById('userlogin');
    

    window.addEventListener('DOMContentLoaded', function () {
    	
 chrome.storage.local.get("datanew", function(data) {
	console.log(JSON.stringify(data.datanew.account.id));
    // console.log(JSON.stringify(data.datanew.clevertapid));
    if(typeof data == "undefined") {
        console.log("error");
    } else {
     infoDisplay.innerHTML = data.datanew.account.id;
     infoctid.innerHTML=data.datanew.clevertapid;
     serviceworker.innerHTML="Service worker is "+data.datanew.worker;
     run_me.style.background="#FF0000";
	 run_me.innerText="Ct Debugger is  OFF";
     run_me.addEventListener("click", turnon);
     gta.addEventListener("click",function(){gotoaccount(data.datanew.account.id)},false); 
     drop1.addEventListener("change",dropdown);
     login.addEventListener("click",firstlogin);
     loginagain.addEventListener("click",again);
     test.addEventListener("click",check);
    //  myDropdown1.addEventListener("click",function(e){
    //     myDropdown.classList.toggle("show");

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
function gotoaccount(e)
{
window.open("https://eu1.dashboard.clevertap.com/"+e+"/main", '_blank');
};


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

function check()
{
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { method: "test" }, function (response) {
            });
        });
}
function dropdown() {
    const getoption = drop1.options[drop1.selectedIndex]
    if(getoption.value!== "nothing")
    {

        window.open(getoption.value);
    }
}
function hello() {
  chrome.tabs.executeScript({
    file: 'swchecker.js'
  }); 
}
