$('textarea').autoResize();
var Controller = new EnqueteController();

var SaveAs = document.querySelector("#SalvarBotão");
var Enquetoo = [];
var Enquetooga = [];
var Alterego = [];
SaveAs.addEventListener('click',e=>{
    var Titulo = document.querySelector("#formTitleEnquete").value;
    var DS = document.querySelector("#formDsEnquete").value;
    var Enquete = document.querySelectorAll(".RadioTyper");
    Enquete.forEach(element => {
        let Kid = Array.from(element.children);

        Kid.forEach(elementar => {
            if (elementar.classList.contains('alternativa')) {
                Enquetoo.push(elementar.id);
                Alterego.push(elementar.children[0].value);

            }
            
        });
        
    });

    var EnquetePD = document.querySelectorAll(".generalQuestionsText");
    EnquetePD.forEach(element => {
                Enquetooga.push(`${element.value}¨${element.id.substring(element.id.indexOf('-')+1)}`);

    });

    var Enqueta = Enquetoo.join('^');
    var AttackOnTitle = Enquetooga.join('^');
    var Armin = Alterego.join('^');

    $.post("createEnquete.aspx",{t:Titulo,s:DS,e:Enqueta,a:AttackOnTitle,v:Armin},function(callbacku){
            alert(callbacku);
    });

});