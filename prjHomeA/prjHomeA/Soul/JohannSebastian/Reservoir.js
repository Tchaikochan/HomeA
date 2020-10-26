window.onload = initPage;
var isRunning = false;
var Condominio = "0";

function initPage(){
    let label = document.createElement("label");
    label.classList.add("container");
    label.innerHTML = 
    `
    <h4 class="h4r">Churrasqueira</h4>
    <input type="checkbox" value="0">
    <span class="checkmark"></span>
    `

    document.querySelector("#Subete").appendChild(label);

}

document.querySelector("#Subete").addEventListener("submit",e=>{
    e.preventDefault();
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