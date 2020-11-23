window.onload = initPage;
var isRunning = false;
var Condominio = "1";

function initPage(){
    $.post("reservar.aspx",{checker:isRunning,c:Condominio},function(callbacku){
        isRunning = true;
        let former = document.createElement("div");
        let Splinter = callbacku.split("#");
        Splinter.pop();
        Splinter.forEach(element => {
            let Master = element.split("$");
            former.innerHTML += 
            `
            <label class="container"><h4 class="h4r">${Master[0]}</h4>
                <input type="checkbox" value="${Master[1]}">
                <span class="checkmark"></span>
            </label>
            `

        });
        
        document.querySelector("#Subete").appendChild(former);
        
    });

}