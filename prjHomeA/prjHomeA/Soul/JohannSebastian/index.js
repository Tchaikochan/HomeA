document.querySelector("#FormLog").addEventListener("submit",e=>{
    e.preventDefault();
    let Email = document.querySelector("#MAIL");
    let Pass = document.querySelector("#PASSWORD");
    alert("ra0");
    $.post("index.aspx",{e:Email,p:Pass,c:true},function(callbacku){
        alert("SOLTURA DO LULA!");
        
    });

})

document.querySelector("#InsertLog").addEventListener("submit",e=>{
    e.preventDefault();
    let Name = document.querySelector("#NAMELOG");
    let Email = document.querySelector("#MAILLOG");
    let Pass = document.querySelector("#PASSLOG");
    let Condominio = document.querySelector("#CONDONLOG");
    let Apartamento = document.querySelector("#APARTLOG");
    let Funccao = document.querySelector("#SELECTO").options[document.querySelector("#SELECTO").selectedIndex].value;
    alert(Funccao);   
    $.post("index.aspx",{n:Name,e:Email,p:Pass,co:Condominio,a:Apartamento,f:Funccao,c:false},function(callbacku){
        alert("FORA THEMER!");
        
    });

})