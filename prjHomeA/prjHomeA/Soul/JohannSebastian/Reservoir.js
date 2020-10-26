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
    $.post("reservar.aspx",{d:String(DatingSim.value),w:WhoChecked,a:Apartamento,b:Bloco},function(callbacku){


    });

});