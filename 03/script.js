// blocco-3: Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.

// let somma = 0;
// for(let i = 1; i <= 5; i++){
//     let numero = Number(prompt('Inserisci un numero'));
//     somma = somma + numero;
// }
// console.log(somma);

let somma = 0;
let count = 1;
while(count <= 5){
    let numero = Number(prompt('Inserisci un numero'));
    somma = somma + numero;
    count++;
}
console.log(somma);