document.querySelector("#Subete").addEventListener("submit",e=>{
    e.preventDefault();
    let Rooms = document.querySelectorAll(".container");
    [...Rooms].forEach(element=>{
        console.log(element.children[1].checked);
        
    });

});