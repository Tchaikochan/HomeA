$('textarea').autoResize();
var Controller = new EnqueteController();

var SaveAs = document.querySelector("#SalvarBotão");

SaveAs.addEventListener('click',e=>{
    var Titulo = document.querySelector("#formTitleEnquete").value;
    var DS = document.querySelector("#formDsEnquete").value;
            $.post("createEnquete.aspx",{t:Titulo,s:DS},function(callbacku){
            alert(callbacku);
    });

});