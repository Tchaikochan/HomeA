window.onload = initPage;


function initPage(){
    var Condominio = window.sessionStorage.getItem('Condominio');
    $.post("addUser.aspx",{c:Condominio},function(Ciocollata){
        console.log(Ciocollata);
        GreenTea = Ciocollata.split('♥');
        console.log(GreenTea);
        GreenTea.pop();
        GreenTea.forEach(element => {
            let Ashina = document.querySelector("#Ashina");
            console.log(element);
            let Oasis = element.split("☺");
            console.log(Oasis);
        Ashina.innerHTML += `
        <h3 class="subhead">${Oasis[0]}</h3>
        <hr class="hr3">
        <button class="Accept">Aceitar</button> <button id="Refuse">Recusar</button>
        <ul class="acount" id="">
            <p style="color: white;">E-mail: ${Oasis[1]}</p>
            <p style="color: white;">Apartamento: ${Oasis[2]}</p>
        </ul>
        `

        });

    });

    Accept();

}

function Accept() {
    console.log("Douglas");
let Gerald = document.querySelectorAll(".Accept");
console.log([...Gerald]);
[...Gerald].forEach(element => {
    console.log("Ronaldo");

    Gerald.addEventListener("click",e=>{
        console.log("Ronaldo");
        
    });
});

}
