window.onload = initPage;

function initPage(){
    var isRunning = false;
    var Condominio = window.sessionStorage.getItem('Condominio');
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

document.querySelector("#Subete").addEventListener("submit",e=>{
    //e.preventDefault();
    let WhoChecked = "";
    let DatingSim = document.getElementById("Dating");
    console.log(DatingSim.value);
    let Rooms = document.querySelectorAll(".container");
    [...Rooms].forEach(element=>{
        if(element.children[1].checked) WhoChecked += element.children[1].value + "$";
    
    });
    Apartamento = 14;
    let Bloco = 0;
    $.post("reservar.aspx",{checker:isRunning,d:String(DatingSim.value),w:WhoChecked,a:Apartamento,b:Bloco},function(callbacku){
        document.location.reload(true);

    });

});