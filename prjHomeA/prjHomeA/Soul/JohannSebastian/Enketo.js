window.onload = initPage;

function initPage(){
    

}

let Former = document.querySelector("#Subete");
Former.addEventListener("submit",e=>{
    e.preventDefault();
    let Title = (Former.children[0].children[1].value);
    let DS = (Former.children[1].children[1].value);
    let Questions = Former.children[2];
    [...Questions.children].forEach(element => {
        if (element.classList.contains("radio")){
            console.log(element);
            
        }
    });

});