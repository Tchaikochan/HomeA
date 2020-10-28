window.onload = initPage;
var Former = document.querySelector("#Subete");
var Questions = Former.children[2];
var Altera = [];
var C = 0;
var Pool = true;

function initPage(){
    Questions.innerHTML +=
    `
    <div class="radio">
    <hr class="hr3">
        <h4>Pergunta 1</h4>
        <h5>Alternativa 1</h5>
        <input type="radio" id="1" name="1" value="">
        <h5>Alternativa 2</h5>
        <input type="radio" id="2" name="1" value="">  
        <br /> 
        <button class="Add">Adicionar Alternativa</button>
        </div>
    `
    EditName();
    if (Pool) {
        document.querySelector("#New").addEventListener("click",e=>{
            Pool = false;
            initPage();
            Pool = true;

        });
        
    }


}

function EditName() {
    [...Questions.children].forEach(element => {
        if (element.classList.contains("radio")){
            V = 0;
            while (element.children[V] != null) {
                if (element.children[V].classList.contains("Add")){
                    if (Pool) {
                        element.children[V].addEventListener("click",O=>{
                            let Killer = O.target;
                            let Mew = document.createElement("h5");
                            let MewTwo = document.createElement("input");
                            let Hue = document.createElement("br");
                            MewTwo.type = "radio";
                            MewTwo.id = C;
                            MewTwo.name = C;
                            MewTwo.value = "";
                            Mew.innerHTML = `Alternativa ${V}`;
                            Killer.parentNode.appendChild(Mew);
                            Killer.parentNode.appendChild(MewTwo);
                            Killer.parentNode.appendChild(Hue);
                            Killer.remove()
                            Mew.parentNode.appendChild(Killer);
                            Pool = false;
                            EditName(element,V);
                            Pool = true;
                        });

                    }
                   
                    
                }
                console.log(element.children[V]);
                Editer(element,V);
                V++;        
                C++;
           
            }
        }
    });

}

Former.addEventListener("submit",e=>{
    e.preventDefault();
    let Title = (Former.children[0].children[1].value);
    let DS = (Former.children[1].children[1].value);

});

function Editer(element,V){
    if (element.children[V].type != "radio" && !(element.children[V].classList.contains("Add"))) {
        element.children[V].addEventListener("click",e=>{
            var CB = document.createElement("input");
            var BTN = document.createElement("div");
            BTN.innerHTML = 
            `
            <hr />   
            <button>Salvar Alterações</button>
            `;
            CB.type = "text";
            CB.id = "ChangeASK";
            console.log(element);
            BTN.id = `BTN`;
            let Kill = e.target;
            let NodeParent = Kill.parentNode;
            CB.value = Kill.innerHTML;
            Kill.parentNode.replaceChild(CB,Kill);
            element.appendChild(BTN);
            BTN.children[1].addEventListener("click",f=>{
                BTN.remove();        
                if(CB.value == "" || CB.value == null) CB.parentNode.remove();
                Kill.innerHTML = CB.value;
                NodeParent.replaceChild(Kill,CB);

            });

        });
    }

}
