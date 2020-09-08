class EnqueteController{
    constructor(){
        this._questionNumber = 2;
        this.Init();
        
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
            
            this._questionNumber++;
            Question.innerHTML = `
            <div class="questionBA">
            <input type="text" class="generalQuestionsText" id="formTitleEnquete" placeholder="Digite Sua Pergunta">
                <i class="material-icons" style="font-size: 80px; padding: 40px;">create</i>
                <br /><br /><br />
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

        })

    }

    addEventListenerAll(Element, Events,Functional){
        let Evento = Events.split(' ');
        Evento.forEach(Splito => {
            Element.addEventListener(Splito,Functional);
            
        });

    }

}