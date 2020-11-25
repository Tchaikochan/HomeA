Lista = document.querySelector("#Gessi");
$.post("reservar.aspx",null,function(callbacku){
    Lista.innerHTML = `<li>Dia 25 de novembro, iremos iniciar as obras nos dutos de gás.</li>`;

});