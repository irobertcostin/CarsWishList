// functie ce primeste ca parametru un obiect si creaza un rand 

function createRow (obj) {

    let text = `
    <tr>
    <td class="marca">${obj.maker}</td>
    <td>${obj.model}</td>
    <td>${obj.engine}</td>
    <td>${obj.fuel}</td>
    <td class="hide-edi">${cars.indexOf(obj)}</td>
    <button class="hide-edit">edit</button>
    </tr>
`
return text;

}

// functie ce populeaza tabelul cu cate un rand, in functie de numarul de elemente din array

function populateTable (arr) {

    let text = "";

    // pentru fiecare element al arrayului cars se va crea un rand
    for (let i=0;i<arr.length;i++){

        // se creaza un rand pentru un obiect (i) din arrayul cars
        text += createRow(arr[i]);
    }
 // selectam cu query clasa unde vom injecta elementul prin .innerHTML;
let container = document.querySelector(".table-body");
container.innerHTML = text;
    
}

// functie ce ia informatiile din inputs si returneaza un obiect cu ele


function getCar () {

    // selectam de un preluam informatia 

    let marca = document.querySelector(".maker");
    let modelul = document.querySelector(".model");
    let motor = document.querySelector(".engine");
    let combustibil = document.querySelector(".fuel");

    // definim crearea unui obiect, und maker din data.js = maker.value care reprezinta valoarea introdusa 
    // in elementul selectat

    let masina = {
        maker:marca.value,
        model:modelul.value,
        engine:motor.value,
        fuel:combustibil.value
    }



if (masina.maker !== "" && masina.model !== "" && masina.engine !== "" && masina.fuel !== "") {
    return masina;
} else {

    let erors = [];

    if (masina.maker == "") {
        // injectam un element css in IF
        let sol = document.querySelector(".maker");
        sol.areaPlaceholder = "Introduceti marca";
        sol.style.border = "2px solid black";
        
        erors.push("Introduceti marca");
    } 

    if (masina.model == "") {
        let sol = document.querySelector(".model");
        sol.areaPlaceholder = "rntroduceti modelul";
        sol.style.border = "2px solid black";
        
        erors.push("Introduceti modelul");
    }

    if (masina.engine == "" && masina.engine < 0.5) {
        let sol = document.querySelector(".engine");
        sol.areaPlaceholder = "Introduceti motorizarea";
        sol.style.border = "2px solid black";
        
        erors.push("Introduceti motorizarea");
    }

    if (masina.fuel == "") {
        let sol = document.querySelector(".fuel");
        sol.areaPlaceholder = "Introduceti tipul de combustibil";
        sol.style.border = "2px solid black";
        
        erors.push("Introduceti tipul de combustibil");
    }

    alert(erors)
    
}

}


function eliminateCar(arr, parametru) {

    let nou = [];

for (i=0;i<arr.length;i++) {
    if (arr[i].maker.toLowerCase() !== parametru.toLowerCase()) {
        nou.push(arr[i]);
        pozitie = arr.indexOf(arr[i]);
    }
    // if(arr.indexOf(arr[i]) !== parametru) {
    //     nou.push(arr[i]);
    //     // pozitie = arr.indexOf(arr[i]);
    // }

    // if (arr.indexOf(arr[i]) == parametru) {
    //     pozitie = arr.indexOf(arr[i]);
    // }
}
return nou;

}