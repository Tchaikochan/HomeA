$('textarea').autoResize();
var Controller = new EnqueteController();

var SaveAs = document.querySelector("#SalvarBotão");
var Enquetoo = [];
SaveAs.addEventListener('click',e=>{
    var Titulo = document.querySelector("#formTitleEnquete").value;
    var DS = document.querySelector("#formDsEnquete").value;
    var Enquete = document.querySelectorAll(".RadioTyper");
    Enquete.forEach(element => {
        let Kid = Array.from(element.children);
        Kid.forEach(elementar => {
            if (elementar.classList.contains('alternativa')) {
                Enquetoo.push(elementar.id);

            }
            
        });
        
    });

    var Enqueta = Enquetoo.join('^');
    console.log(Enqueta);

    $.post("createEnquete.aspx",{t:Titulo,s:DS,e:Enqueta},function(callbacku){
            alert(callbacku);
    });

});