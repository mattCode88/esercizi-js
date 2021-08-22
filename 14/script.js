// Genero 10 numeri random
// utilizzando una funzione
// Verifico attraverso una funzione se il
// numero passato dell’utente è pari o
// dispari

// function randomNumber(){
//     return Math.floor(Math.random() * (101 - 1) + 1);
// }

// let numeriGenerati = [];
// let numeroRandom;

// for(let i = 0; i < 10; i++){
//     numeroRandom = randomNumber();
//     numeriGenerati.push(numeroRandom);
// }

// console.log(numeriGenerati);

function controlNumber(num){
    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let numero = prompt('Inserisci un numero.');

if(controlNumber(numero)){
    console.log('Il numero è pari');
}else{
    console.log('Il numero è dispari');
}