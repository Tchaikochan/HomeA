class EnqueteController{
    constructor(){
        this._questionNumber = 0;
        this.Init();
        
    }

    Init(){
        var btnNewPergunta = document.querySelector("#NovaPergunta");
        this.addEventListenerAll(btnNewPergunta, 'click drag dblclick',e=>{
            let Question = document.createElement('div');
            Question.classList.add("Perguntados");
            Question.classList.add("DIO");
            Question.id = "Question" + this._questionNumber.toString();
            this._questionNumber++;
            Question.innerHTML = "RENATO GARCIA É UM DEUS";
            if (condition) {
                
            }
            document.querySelector("#n1").appendChild(Question);

        })

    }

    addEventListenerAll(Element, Events,Functional){
        let Evento = Events.split(' ');
        Evento.forEach(Splito => {
            Element.addEventListener(Splito,Functional);
            
        });

    }

}