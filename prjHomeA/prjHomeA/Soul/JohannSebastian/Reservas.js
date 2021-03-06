﻿window.onload = initPage;
var isRunning = true;
var Condominio = window.sessionStorage.getItem('Condominio');

function initPage(){
    $.post("Reservas.aspx",{checker:isRunning,c:Condominio},function(callbacku){
        isRunning = false;
        
        var former = document.createElement("div");
        let Splinter = callbacku.split("#");
        Splinter.pop();
        Splinter.forEach(element => {
            let Master = element.split("$");
            
            $.post("Reservas.aspx",{checker:isRunning,c:Condominio},function(Carubacku){
                let Splinter = Carubacku.split("♥");
                //Splinter.pop();
                Splinter.forEach(C => {
                    
                    let Condom = C.substring(0,C.substring(C.indexOf("♀") - 1))
                    let Hora = C.substring(C.indexOf("♀") + 1, C.indexOf("♀") + 11);
                    let Data  = C.substring(C.indexOf("#") + 1, C.indexOf("#") + 6);
                    let Nome = C.substring(C.indexOf("☺") + 1, C.indexOf("☻"));
                    let Aparter = C.substring(C.indexOf("☻") + 1);
                    console.log(Aparter);
                    console.log(C);
                    if (!Aparter == null || !Aparter == "" || Condom == Master[0]) {
                        former.innerHTML += 
                        `
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${Master[0]}" aria-expanded="true" aria-controls="collapseOne">
                                ${Master[0]}
                                </button>
                                </h5>
                            </div>
                        
                            <div id="collapse${Master[0]}" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                Reservado por ${Nome} do apartamento ${Aparter} para o dia ${Hora} às ${Data}
                                </div>
                            </div>
                            </div>
                        `

                    }
                    

                });
                
            })

        });
        
        document.querySelector("#accordion").appendChild(former);
        
    });

}