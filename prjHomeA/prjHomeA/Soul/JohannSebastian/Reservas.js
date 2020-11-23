window.onload = initPage;
var isRunning = true;
var Condominio = "1";

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
                    let Nome;
                    Nome = C.substring(0, C.indexOf("$"));
                    console.log(Nome);
                    console.log(Splinter);
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
                          Reservado por ${Nome} do apartamento 25, 28/11 às 09:00
                        </div>
                      </div>
                    </div>
                    <hr class="hr3">
                `

                });
                
            })

        });
        
        document.querySelector("#accordion").appendChild(former);
        
    });

}