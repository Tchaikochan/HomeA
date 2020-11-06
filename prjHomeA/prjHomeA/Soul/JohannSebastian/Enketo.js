window.onload = initPage;
var Former = document.querySelector("#Subete");
var Questions = Former.children[2];
var Altera = [];
var C = 0;
var Pool = true;
var Condominio = "1";
var isRunning = false;
var Doug = false;

function initPage(){
    if (Doug) {
        Questions.innerHTML +=
        `
        <div class="radio">
            <hr class="hr3">
            <h4>Pergunta</h4>
            <h5>Alternativa</h5>
            <input type="radio" id="1" name="1" value="">
            <h5>Alternativa</h5>
            <input type="radio" id="2" name="1" value="">  
            <br /> 
            <button class="Add">Adicionar Alternativa</button>
        </div>
        `;

    } else{
        Questions.innerHTML +=
        `
        <div class="radio">
            <hr class="hr3">
            <h4>Pergunta</h4>
            <input type="text" />
            <br /> 
        </div>
        `;

    }
        EditName();

    if (Pool) {
        document.querySelector("#New").addEventListener("click",e=>{
            Pool = false;
            console.log(e);
            if (e.target.classList.contains("NewOne")) {
                Doug = true;

            } else{
                Doug = false;

            }
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
                Editer(element,V);
                V++;        
                C++;
           
            }
        }
    });

}

function Bot() {
    isRunning = true;

}

Former.addEventListener("submit",e=>{
    e.preventDefault();
    if (isRunning) {
        let CounterStrike = 0;
        let CS = "";
        let Title = (Former.children[0].children[1].value);
        let DS = (Former.children[1].children[1].value);
        [...Questions.children].forEach(e=>{
            CS += e.children[1].innerHTML + "☺" + CounterStrike + "☻";
            CounterStrike++;
    
        });
        $.post("enquete.aspx",{t:Title,d:DS,c:Condominio,s:CS},function(callbacku){
            alert("SOLTURA DO LULA!");
            isRunning = false;
            
        });

    }

});

function Editer(element,V){     
    if (element.children[V].type != "radio" && !(element.children[V].classList.contains("Add")) && !(element.children[V].classList.contains("hr3"))) {
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
