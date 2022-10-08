// functie ce primeste ca parametru un obiect si creaza un rand 

function createRow (obj) {

    let text = `
    <tr>
    <td class="marca">${obj.maker}</td>
    <td>${obj.model}</td>
    <td>${obj.engine}</td>
    <td>${obj.fuel}</td>
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

    // definim crearea unui obiect, unde maker din data.js = maker.value care reprezinta valoarea introdusa 
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
        erors.push("Introduceti marca");
    } 

    if (masina.model == "") {
        erors.push("Introduceti modelul");
    }

    if (masina.engine == "" && masina.engine < 0.5) {
        erors.push("Introduceti motorizarea");
    }

    if (masina.fuel == "") {
        erors.push("Introduceti tipul de combustibil");
    }

    alert(erors)
    
}

}


function eliminateCar(arr, parametru) {

    let nou = [];

for (i=0;i<arr.length;i++) {
    if (arr[i].maker !== parametru) {
        nou.push(arr[i]);
        // pozitie = arr.indexOf(arr[i]);
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


function resetRows () {
    maker.value="";
    model.value="";
    engine.value="";
    fuel.value="";
}


function getCarByMaker (arr,maker) {
    let x= "";

    for (i=0;i<arr.length;i++){


        if(arr[i].maker == maker) {
            x = arr[i];
        }

    }

    return x;

}

function updateCar(arr,masina) {

    arr = eliminateCar(arr,masina.maker);
    arr.push(masina);
    return arr;
}