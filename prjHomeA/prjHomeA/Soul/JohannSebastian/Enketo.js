window.onload = initPage;
var Former = document.querySelector("#Subete");
var Questions = Former.children[2];
var Altera = [];

function initPage(){
    Questions.innerHTML +=
    `
    <hr class="hr3">

    <div class="radio">
        <h4>Pergunta 1</h4>
        <label for="1"><h5>Alternativa 1</h5></label>
        <input type="radio" id="1" name="1" value="">
        <label for="2"><h5>Alternativa 2</h5></label>
        <input type="radio" id="2" name="2" value="">   
     </div>

     <hr class="hr3">

    <div class="radio">
        <h4>Pergunta 2</h4>
        <label for="1"><h5>Alternativa 1</h5></label>
        <input type="radio" id="1" name="1" value="">
        <label for="2"><h5>Alternativa 2</h5></label>
        <input type="radio" id="2" name="2" value="">
    </div>

    `
    EditName();


}

function EditName() {
    let C = 0;
    [...Questions.children].forEach(element => {
        if (element.classList.contains("radio")){
            
            element.children[0].addEventListener("click",e=>{
                var CB = document.createElement("input");
                var BTN = document.createElement("div");
                BTN.innerHTML = 
                `
                <hr />   
                <button>Salvar Alterações</button>
                `;
                CB.type = "text";
                CB.id = "ChangeASK"
                console.log(element);
                BTN.id = `BTN`;
                let Kill = element.children[0];
                element.children[0].parentNode.replaceChild(CB,element.children[0]);
                element.appendChild(BTN);
                BTN.children[1].addEventListener("click",f=>{
                    console.log("RONALDO");
                    BTN.remove();        
                    if(CB.value == "" || CB.value == null) CB.value = "Hey! Você não escreveu nada."
                    Kill.innerHTML = CB.value;
                    element.children[0].parentNode.replaceChild(Kill,CB);
                
                });

            });
            C++;
        }
    });

}

Former.addEventListener("submit",e=>{
    e.preventDefault();
    let Title = (Former.children[0].children[1].value);
    let DS = (Former.children[1].children[1].value);

});