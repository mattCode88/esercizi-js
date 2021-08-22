// Una funzione per capire se la parola è
// palindroma
// L’utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.

// ------------------PAROLA PALINDROMA----------------------------

// let parola = prompt('Inserisci una parola.')

// function isPalindroma(parola){
//     let arrayParola = [];
//     for(let i = 0; i < parola.length; i++){
//         arrayParola.push(parola[i]);
//     };
//     let nuovaParola = arrayParola.reverse().join('');
//     if(nuovaParola === parola){
//         return true;
//     }else{
//         return false;
//     }
// }

// if(isPalindroma(parola)){
//     console.log('La parola è palindroma');
// }else{
//     console.log('La parola non è palindroma');
// }

// -------------------PARI O DISPARI----------------------------------

let pariODispari = prompt('Scegli pari o dispari');

while(pariODispari !== 'pari' && pariODispari !== 'dispari'){
    pariODispari = prompt('Scrivi o pari o dispari');
};

let numeroUtente = Number(prompt('Inserisci un numero da 1 a 5'));

while(isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1){
    numeroUtente = Number(prompt('Ti ho detto un numero da 1 a 5'));
};

let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);

let somma = randomNumber + numeroUtente;

if((somma % 2 === 0 && pariODispari === 'pari') || (somma % 2 !== 0 && pariODispari === 'dispari')){
    alert('Bravo, hai vinto!La somma è: ' + somma);
}else{
    alert('Peccato, la somma è ' + somma + ' e tu hai scelto ' + pariODispari);
}
