window.onload = initPage;

function initPage(){
    Lista = document.querySelector("#Gessi");
    var Condominio = window.sessionStorage.getItem('Condominio');
    $.post("Aviso.aspx",{c:Condominio},function(callbacku){
        let Avisos;
        Avisos = callbacku.split("☺");
        Avisos.pop();   
        Avisos.forEach(element => {
            Lista.innerHTML += `<li>${element}</li>`;
            
        });

    });
}