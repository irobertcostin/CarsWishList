let btnCreate = document.querySelector(".btn"); //butonul add

//determinam de sub de element HTML vom face selectia, ne ajutam de clase css
let selectie = document.querySelector(".table-body")
let obiectSelectat = ""; //determinam o variabila goala, pentru selectia noastra
let stocareObiect = ""; // interschimbare



// deletion
let deletion = document.querySelector(".deletion")


//edit 
let edit=document.querySelector(".edit");

let maker = document.querySelector(".maker");
let model = document.querySelector(".model");
let engine = document.querySelector(".engine");
let fuel = document.querySelector(".fuel");

//search
let search = document.querySelector(".search")



btnCreate.addEventListener("click", () => {

    cars.push(getCar());

    populateTable(cars);

    resetRows();
})



selectie.addEventListener("click", (e) => {

    let obiect = e.target 

    if(obiect.classList.contains("marca")) {
        
        if(stocareObiect!=="") {
            stocareObiect.classList.remove("show-edit");
        }
        // obiect.classList.remove("hide-edit");
        obiect.classList.add("show-edit");
        obiectSelectat = obiect.textContent;
        stocareObiect = obiect;
    }

    let car = getCarByMaker(cars,obiectSelectat);
    
    maker.value = car.maker;
    model.value=car.model;
    engine.value=car.engine;
    fuel.value=car.fuel;



});




deletion.addEventListener("click", () => {

    cars = eliminateCar(cars,obiectSelectat);

    populateTable(cars);

    resetRows();
})

edit.addEventListener("click", ()=> {

    let masina = {
        maker: maker.value,
        model:model.value,
        engine:engine.value,
        fuel:fuel.value
    }


    
    cars = updateCar(cars,masina);

    populateTable(cars);

    resetRows();


})


search.addEventListener("click", () =>{

    populateTable(searchCarByMaker(cars,maker.value));


})

populateTable(cars);