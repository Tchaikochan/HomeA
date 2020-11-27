window.onload = initPage;


function initPage(){
    var Condominio = window.sessionStorage.getItem('Condominio');
    $.post("Reservas.aspx",{c:Condominio},function(Ciocollata){
        console.log(Ciocollata);

    });

}