﻿class EnqueteController{
    constructor(){
        this._questionNumber = 2;
        this.Init();
        this._selects = document.querySelectorAll(".SelectTypeForm");
    
    }

    verifPar(Namba){
        if (Namba % 2 == 0) {
            return false;

        } else{
            return true;

        }

    }

    Init(){
        var btnNewPergunta = document.querySelector("#NovaPergunta");
        this.addEventListenerAll(btnNewPergunta, 'click drag dblclick',e=>{
            btnNewPergunta.parentNode.removeChild(btnNewPergunta);
            let Question = document.createElement('div');
            if (this.verifPar(this._questionNumber)) {
                Question.classList.add("bgBlanc");
                Question.classList.add("Blanc");

            } else{
                Question.classList.add("bgNoire");
                Question.classList.add("Noire"); 

            }
            Question.id = "L" + this._questionNumber.toString();
            Question.innerHTML = `
            <div class="questionBA-${this._questionNumber}">
                <input type="text" class="generalQuestionsText" id="formTitleEnquete" placeholder="Digite Sua Pergunta">
                <br /><br />
                <select class="SelectTypeForm" id="SelectTypeForm-${this._questionNumber}">
                    <option value="radio">Alternativa</option>
                    <option value="select">Caixa Suspensa</option>
                    <option value="text">Texto</option>
                </select>
                    <br /><br />
                <div class="RadioTyper">
                    <input type="radio" id="alternativa0-${this._questionNumber}" name="${this._questionNumber}" value="alternativa0-${this._questionNumber}" checked /> <label for="alternativa0-${this._questionNumber}">ㅤAlternativa 1</label> <br />
                    <input type="radio" id="alternativa1-${this._questionNumber}" name="${this._questionNumber}" value="alternativa1-${this._questionNumber}" /> <label for="alternativa1-${this._questionNumber}">ㅤAlternativa 2</label> <br />
                </div>
                <br />
            </div>
            `;
                document.querySelector("#formCreateFullEnquete").appendChild(Question);
                document.querySelector("#formCreateFullEnquete").appendChild(btnNewPergunta);
                
                if (this.verifPar(this._questionNumber)) {
                    document.body.style.backgroundColor = "#86E9BD";
                    btnNewPergunta.style.backgroundColor = "#5BF8E4";

                } else{
                    document.body.style.backgroundColor = "#5BF8E4";
                    btnNewPergunta.style.backgroundColor = "#86E9BD";

                }
                this._questionNumber++;

                this.addSelect();
        });

    }

    addSelect(){
        this._selects = document.querySelectorAll(".SelectTypeForm");
        this._selects.forEach(element => {
            element.addEventListener("change",e=>{
                console.log(element.value);
                var daddyDJ = element.parentNode;

            });
            
        });

    }

    addEventListenerAll(Element, Events,Functional){
        let Evento = Events.split(' ');
        Evento.forEach(Splito => {
            Element.addEventListener(Splito,Functional);
            
        });

    }

}