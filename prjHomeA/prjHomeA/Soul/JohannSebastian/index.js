document.querySelector("#FormLog").addEventListener("submit",e=>{
    e.preventDefault();
    let Email = document.querySelector("#MAIL").value;
    let Pass = document.querySelector("#PASSWORD").value;
    $.post("index.aspx",{e:Email,p:Pass,c:true},function(callbacku){
        window.sessionStorage.setItem('Condominio', callbacku.substring(1,callbacku.indexOf("&")));
        
        if (callbacku.substring(0,1) == "0") {
            window.location.href = "Shome.html";

        } else if (callbacku.substring(0,1) == "1") {
            window.location.href = "Mhome.html";
            
        } else if (callbacku.substring(0,1) == "2") {
            window.location.href = "Mhome.html";
            
        } else if (callbacku.substring(0,1) == "3") {
            window.location.href = "Fhome.html";
            
        } else {
            document.location.reload(true);

        } 

        
    });

})

document.querySelector("#InsertLog").addEventListener("submit",e=>{
    e.preventDefault();
    let Name = document.querySelector("#NAMELOG").value;
    let Email = document.querySelector("#MAILLOG").value;
    let Pass = document.querySelector("#PASSLOG").value;
    let Condominio = document.querySelector("#CONDONLOG").value;
    let Apartamento = document.querySelector("#APARTLOG").value;
    let Funccao = document.querySelector("#SELECTO").options[document.querySelector("#SELECTO").selectedIndex].value;
    $.post("index.aspx",{n:Name,e:Email,p:Pass,co:Condominio,a:Apartamento,f:Funccao,c:false},function(callbacku){
        document.location.reload(true);
        
    });

})