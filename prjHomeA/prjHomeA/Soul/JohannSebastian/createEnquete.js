$('textarea').autoResize();
var Controller = new EnqueteController();

var SaveAs = document.querySelector("#SalvarBotão");
var Enquetoo = [];
var Enquetooga = [];
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

    var EnquetePD = document.querySelectorAll(".generalQuestionsText");
    EnquetePD.forEach(element => {
                Enquetooga.push(`${element.value}¨${element.id.substring(element.id.indexOf('-'))}`);

    });

    var Enqueta = Enquetoo.join('^');
    var AttackOnTitle = Enquetooga.join('^');

    $.post("createEnquete.aspx",{t:Titulo,s:DS,e:Enqueta,a:AttackOnTitle},function(callbacku){
            alert(callbacku);
    });

});