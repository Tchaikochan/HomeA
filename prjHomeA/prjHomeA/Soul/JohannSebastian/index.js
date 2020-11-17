document.querySelector("#Formando").addEventListener("submit",e=>{
    e.preventDefault();
    let Email = document.querySelector("#MAIL");
    let Pass = document.querySelector("#PASSWORD");
    alert("ra0");   
    $.post("index.aspx",{e:Email,p:Pass,},function(callbacku){
        alert("SOLTURA DO LULA!");
        
    });

})