
// const localStorageContent = localStorage.getItem("CleverTapID");
//     var CleverTapID ={
//     clevertapid: clevertap.getCleverTapID(),
// };

// if(localStorageContent === null){
// CleverTapID = [];
// }
// else
// {
//     CleverTapID = JSON.parse(localStorageContent);
// }
// CleverTapID.push(CleverTapID);
// localStorage.setItem('CleverTapID',JSON.stringify(CleverTapID));


const localStorageContent = localStorage.getItem("CleverTapID");
let CleverTapID;

if(localStorageContent === null){
CleverTapID = [];
}
else
{
    CleverTapID = JSON.parse(localStorageContent);
}

// CleverTapID.push(function()
// {
   
// }
//var abc = clevertap.getCleverTapID();

// var demo = "12421"
console.log(clevertap.getCleverTapID());
CleverTapID.push(clevertap.getCleverTapID());
localStorage.setItem('CleverTapID',JSON.stringify(CleverTapID));
//console.log(JSON.parse(localStorage.getItem('CleverTapID')))


