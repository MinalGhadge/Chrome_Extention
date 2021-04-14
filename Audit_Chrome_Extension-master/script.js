
console.log(clevertap.account["0"]);
console.log(clevertap.getCleverTapID());
var data = {
  account: clevertap.account["0"],
  clevertapid: clevertap.getCleverTapID(),
  worker: "not registered",
};
document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
workertest();

function workertest(){
if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('clevertap_sw.js')
    .then(function(swReg) {
      console.log('Service Worker is registered');
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
    })
    .catch(function(error) {
      console.error('Service Worker Error', error);
    });
}
    else {
    console.warn('Push messaging is not supported');
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
            CTID = JSON.parse(Content);
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
        }
       else{
            alert('onUserLogin implementation failed');
       } 
     
    });
   
// document.addEventListener('load', function(e)
//   {  
//     if ('serviceWorker' in navigator) {
//       console.log('Service Worker is supported');
//       navigator.serviceWorker.register('clevertap_sw.js')
//       .then(function(swReg) {
//         console.log('Service Worker is registered');
//         // navigator.serviceWorker.ready.then((a) => {
//         //   console.log("Response, ", a);
//         })
//       .catch(function(error) {
//         console.error('Service Worker Error', error);
//       });
//       // });
//     }
//     else {
//         console.warn('Push messaging is not supported');
//         }
//         // var data = {
//         //   account: clevertap.account["0"],
//         //   clevertapid: clevertap.getCleverTapID(),
//         //   worker: "service worker is registered",
        
//         // };
//         // document.dispatchEvent(new CustomEvent('yourCustomEvent', { detail: data }));
//   }); 
    