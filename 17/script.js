// Trasformiamo la prima lettera di ogni parola di una stringa con la lettera maiuscola

// let stringa = 'domani vado al lago e faccio un po di canoa';

// let arrayStringa = stringa.split(" ");
// console.log(arrayStringa);
// let arrayStringa2 = [];

// arrayStringa.forEach(element => {
//     // console.log(element[0].toUpperCase);
//     let parola = element[0].toUpperCase() + element.slice(1);
//     arrayStringa2.push(parola);
// });

// let stringa2 = arrayStringa2.join(' ');
// console.log(stringa2);

//Troncare una stringa sole se più lunga di 16 e aggiungere ...

// let stringa = 'Oggi e una bellissima giornata e io ho voglia di sole';
// let stringa2;

// for(let i = 0; i <= stringa.length; i++){
//     if(i === 16){
//         stringa2 = stringa.slice(0, i) + '...';
//     }
// }

// console.log(stringa2);

// Generare un numero intero casuale tra 2 numeri ricevuti in input:

// let numero1 = Number(prompt('Inserisci un numero'));
// let numero2 = Number(prompt('Inserisci un altro numero più grande almeno di 10'));

// let numeroRandom = Math.floor(Math.random() * (numero2 - numero1) + numero1);
// console.log(numeroRandom);

// far inserire all' utente numeri fino a quando il numero sarà pari e mostrare i numeri inseriti:

// let numero = Number(prompt('Inserisci un numero'));
// let arrayNumeri = [];
// arrayNumeri.push(numero);

// while(numero % 2 !== 0){
//     numero = Number(prompt('Inserisci un numero'));
//     arrayNumeri.push(numero);
// }

// console.log(arrayNumeri);