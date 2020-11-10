document.querySelector("#Forma").addEventListener("submit",e=>{
    e.preventDefault();
    let Login = document.querySelector("#Email");
    let Password = document.querySelector("#SeasonPass");
    $.post("index.aspx",{l:Login,p:Password},function(callbacku){
        console.log(callbacku);
        
    });

});