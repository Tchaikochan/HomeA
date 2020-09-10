$('textarea').autoResize();
var Controller = new EnqueteController();

var SaveAs = document.querySelector("#SalvarBotão");

SaveAs.addEventListener('click',e=>{
    var Titulo = document.querySelector("#formTitleEnquete").value;
            $.post("createEnquete.aspx",{t:Titulo},function(callbacku){
            alert(callbacku);
    });

});