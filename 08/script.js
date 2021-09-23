// 8: Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let numero = prompt('Inserisci un numero di quattro cifre');

while(numero.length < 4 || numero.length > 4){
    numero = prompt('Inserisci un numero di quattro cifre');
}

let somma = 0;
for(let i = 0; i < numero.length; i++){
    somma += Number(numero[i]);
};

console.log(somma);