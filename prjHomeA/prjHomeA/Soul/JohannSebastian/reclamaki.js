var Condominio = window.sessionStorage.getItem('Condominio');

document.querySelector("#Kimochi").addEventListener("click",e=>{
    let Title = document.querySelector("#enquete").value;
    let DS = document.querySelector("#msg").value;

    $.post("ReclamaKi.aspx",{D:DS,T:Title,c:Condominio},function(callbacku){        
        document.location.reload(true);

    });

}); 