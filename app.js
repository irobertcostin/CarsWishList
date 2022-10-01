let btnCreate = document.querySelector(".btn"); //butonul add

//determinam de sub de element HTML vom face selectia, ne ajutam de clase css
let selectie = document.querySelector(".table-body")
let obiectSelectat = ""; //determinam o variabila goala, pentru selectia noastra
let stocareObiect = ""; // intershimbare

let pozitie = -1;


let deletion = document.querySelector(".deletion")


btnCreate.addEventListener("click", () => {

    cars.push(getCar());

    // reset inputs 

    let inputs = document.querySelectorAll(`.maker , .model , .engine , .fuel`);
    inputs.forEach(input => {
        input.value = "";
    })

})



selectie.addEventListener("click", (e) => {

    let obiect = e.target 
    // if(obiect.classList.contains("hide-edit")) {
    //     obiect.classList.remove("hide-edit");
    //     obiect.classList.add("show-edit");

    // }

    if(obiect.classList.contains("marca")) {
        
        if(stocareObiect!=="") {
            stocareObiect.classList.remove("show-edit");
        }
        // obiect.classList.remove("hide-edit");
        obiect.classList.add("show-edit");
        obiectSelectat = obiect.textContent;
        stocareObiect = obiect;
    }

});




deletion.addEventListener("click", () => {

    cars = eliminateCar(cars,obiectSelectat);

    populateTable(cars);
})

populateTable(cars);