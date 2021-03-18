alert("id is:");


        // const Content = localStorage.getItem("CleverTapID2");
        let CleverTapID;
    

    CleverTapID=clevertap.getCleverTapID();
    localStorage.setItem('CleverTapID2',JSON.stringify(CleverTapID));
   
    
