document.querySelector("#Kimochi").addEventListener("submit",e=>{
    let Title = document.querySelector("#enquete");
    let DS = document.querySelector("#msg");
    $.post("index.aspx",{D:DS,T:Title},function(callbacku){        


    });

}); 