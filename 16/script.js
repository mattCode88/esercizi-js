// Il computer deve generare 16 numeri casuali tra 1 e 100.
// In seguito deve chiedere all’utente di inserire un numero alla
// volta, sempre compreso tra 1 e 100.
// Se il numero è presente nella lista dei numeri generati, la partita
// termina, altrimenti si continua chiedendo all’utente un altro
// numero.
// La partita termina quando il giocatore inserisce un numero
// “vietato” o raggiunge il numero massimo possibile di numeri
// consentiti.
// Al termine della partita il software deve comunicare il punteggio,
// cioè il numero di volte che l’utente ha inserito un numero
// consentito.
// BONUS: all’inizio il software richiede anche una difficoltà
// all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> tra 1 e 100, con difficoltà 1 => tra 1 e 80, con
// difficoltà 2=> tra 1 e 50

function randomNumber(num){
    return Math.floor(Math.random() * (num - 1) + 1);
}
function pushArrayRandom(array, num){
    if(array.indexOf(num) === - 1){
        array.push(num);
    }
}
function controlArray(array, num){
    if(array.indexOf(num) === - 1){
        return true;
    }else{
        return false;
    }
}
function controlNumber(num){
    if(num <= 0 || num > 100 || isNaN(num)){
        return true;
    }else{
        return false;
    }
}
function controlloDifficolta(difficolta){
    if(difficolta === 'f' || difficolta === 'm' || difficolta === 'd'){
        return false;
    }else{
        return true;
    }
}

let numeroMax;
let difficolta = prompt('Scegli una difficoltà tra difficile(d), medio(m), facile(f).');

while(controlloDifficolta(difficolta)){
    difficolta = prompt('Inserisci f, m, d');
}

if(difficolta === 'f'){
    numeroMax = 101;
}else if(difficolta === 'm'){
    numeroMax = 81;
}else if(difficolta === 'd'){
    numeroMax = 51;
}

console.log(numeroMax);

let listaNumeriRandom = [];

while(listaNumeriRandom.length <= 15){
    let numeroRandom = randomNumber(numeroMax);
    pushArrayRandom(listaNumeriRandom, numeroRandom);
}

console.log(listaNumeriRandom);

let numeroUtente;
let listaNumeriUtente = [];

while(listaNumeriRandom.indexOf(numeroUtente) === - 1){
    numeroUtente = Number(prompt('Inserisci un numero da 1 a 100'));

    while(controlNumber(numeroUtente)){
        alert('Inserisci un numero valido')
        numeroUtente = Number(prompt('Inserisci un numero da 1 a 100'));
    }
        
    if(controlArray(listaNumeriUtente, numeroUtente)){
        listaNumeriUtente.push(numeroUtente);
    }else{
        alert('Inserisci un numero non ripetuto!!!');
    }
}

alert('Hai inserito correttamente ' + listaNumeriUtente.length + ' numeri!!!');