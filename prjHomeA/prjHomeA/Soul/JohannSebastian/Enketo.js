window.onload = initPage;
var Former = document.querySelector("#Subete");
var Questions = Former.children[2];
var Altera = [];
var C = 0;
var Pool = true;
var Condominio = window.sessionStorage.getItem('Condominio');

function initPage(){
    Questions.innerHTML +=
    `
    <div class="radio">
        <hr class="hr3">
        <h4 class="Shiro">Pergunta 1</h4>
        <h5 class="Altera">Alternativa</h5>
        <input type="radio" id="1" name="1" value="">
        <h5 class="Altera">Alternativa </h5>
        <input type="radio" id="2" name="1" value="">  
        <br /> 
        <button class="Add">Adicionar Alternativa</button>
    </div>
    `;
    EditName();
    if (Pool) {
        document.querySelector("#New").addEventListener("click",e=>{
            e.preventDefault();
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
                            O.preventDefault();
                            let Killer = O.target;
                            let Mew = document.createElement("h5");
                            Mew.classList.add("Altera");
                            let MewTwo = document.createElement("input");
                            let Hue = document.createElement("br");
                            MewTwo.type = "radio";
                            MewTwo.id = C;
                            MewTwo.name = C;
                            MewTwo.value = "";
                            Mew.innerHTML = `Alternativa`;
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
                Editer(element,V);
                V++;        
                C++;
           
            }
        }
    });

}

Former.addEventListener("submit",e=>{
    e.preventDefault();
    let CounterStrike = 0;
    let CS = "";
    let VL = "";
    let Valorant = 0;
    let Title = (Former.children[0].children[1].value);
    let DS = (Former.children[1].children[1].value);
    [...Questions.children].forEach(e=>{
        [...e.children].forEach(element => {
            if (element.classList.contains("Shiro")){
                CounterStrike++;
                CS += element.innerHTML + "☺" + CounterStrike + "☻";
                Valorant = 0;

                
            }
           
            if (element.classList.contains("Altera")) {
                Valorant++;
                VL += element.innerHTML + "☺" + CounterStrike + "♥" + Valorant + "☻";

            }
 

        });

    });
    console.log(VL);
    $.post("enquete.aspx",{t:Title,d:DS,c:Condominio,s:CS,v:VL},function(callbacku){
        document.location.reload(true);

    });

});

function Editer(element,V){     
    if (element.children[V].type != "radio" && !(element.children[V].classList.contains("Add")) && !(element.children[V].classList.contains("hr3"))) {
        element.children[V].addEventListener("click",e=>{
            e.preventDefault();
            var CB = document.createElement("input");
            var BTN = document.createElement("div");
            BTN.innerHTML = 
            `
            <hr />   
            <button>Salvar Alterações</button>
            `;
            CB.type = "text";
            CB.id = "ChangeASK";
            BTN.id = `BTN`;
            let Kill = e.target;
            let NodeParent = Kill.parentNode;
            CB.value = Kill.innerHTML;
            Kill.parentNode.replaceChild(CB,Kill);
            element.appendChild(BTN);
            BTN.children[1].addEventListener("click",f=>{
                f.preventDefault();
                BTN.remove();        
                if(CB.value == "" || CB.value == null) CB.parentNode.remove();
                Kill.innerHTML = CB.value;
                NodeParent.replaceChild(Kill,CB);

            });
            

        });

    }

}
