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
            <button class="Accept">Aceitar</button> <button class="Refuse">Recusar</button>
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
    let Striker = 0;
    [...Ashina.children].forEach(element => {
        [...element.children].forEach(e => {
            Striker++;
            if (e.classList.contains("Accept")) {
                e.addEventListener("click",ev=>{
                    var Condominio = window.sessionStorage.getItem('Condominio');
                    let Disc = true;
                    let MaMa = e.parentNode.id;
                    $.post("acceptUser.aspx",{c:Condominio,v:Disc,em:MaMa},function(Ciocollata){
                        document.location.reload(true);

                    });
                });
    
            } else if (e.classList.contains("Refuse")){
                e.addEventListener("click",ev=>{
                    var Condominio = window.sessionStorage.getItem('Condominio');
                    let Disc = false;
                    let MaMa = e.parentNode.id;
                    $.post("acceptUser.aspx",{c:Condominio,v:Disc,em:MaMa},function(Ciocollata){
                        document.location.reload(true);

                    });

                });

            }

        });
       

    });

}
