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
    alert("ra0");   
    $.post("index.aspx",{n:Name,e:Email,p:Pass,c:false},function(callbacku){
        alert("FORA THEMER!");
        
    });

})