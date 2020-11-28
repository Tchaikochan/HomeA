window.onload = initPage;


function initPage(){
    var Condominio = window.sessionStorage.getItem('Condominio');
    $.post("addUser.aspx",{c:Condominio},function(Ciocollata){
        GreenTea = Ciocollata.split('♥');
        GreenTea.pop();
        GreenTea.forEach(element => {
            var Ashina = document.querySelector("#Ashina");
            let Oasis = element.split("☺");
        Ashina.innerHTML += `
        <div id="${Oasis[1]}">
            <h3 class="subhead">${Oasis[0]}</h3>
            <hr class="hr3">
            <button class="Accept">Aceitar</button> <button id="Refuse">Recusar</button>
            <ul class="acount" id="">
                <p style="color: white;">E-mail: ${Oasis[1]}</p>
                <p style="color: white;">Apartamento: ${Oasis[2]}</p>
            </ul>
        </div>
        `

        });

        Accept();

    });



}

function Accept() {
    [...Ashina.children].forEach(element => {
        [...element.children].forEach(e => {
            if (e.classList.contains("Accept")) {
                console.log(e);
                e.addEventListener("click",ev=>{
                    var Condominio = window.sessionStorage.getItem('Condominio');
                    $.post("acceptUser.aspx",{c:Condominio,v:"true",em:e.parentNode},function(Ciocollata){
                        document.location.reload(true);

                    });
                });
    
            } else if (e.classList.contains("Refuse")){
                console.log(e);
                e.addEventListener("click",ev=>{
                    var Condominio = window.sessionStorage.getItem('Condominio');
                    $.post("acceptUser.aspx",{c:Condominio,v:"false",em:e.parentNode},function(Ciocollata){
                        document.location.reload(true);

                    });

                });

            }

        });
       

    });

}
