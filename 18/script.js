// cre una funzione che accetta una stringa e restituisce le parole più lunga ivi contenute

// let parolaPiuLunga = (stringa) => {
//     let array = stringa.split(' ');
//     let lunghezzaParole = [];
//     let ParolePiuLunghe = [];
//     array.forEach(element => {
//         lunghezzaParole.push(element.length);
//     });
//     let parolaPiuLunga = Math.max(...lunghezzaParole);
//     for(let i = 0; i < array.length; i++){
//         if(parolaPiuLunga === array[i].length){
//             ParolePiuLunghe.push(array[i]);
//         }
//     }
//     return ParolePiuLunghe;
// };
// let scrivi = prompt('inserisci una frase');
// let parole = parolaPiuLunga(scrivi);
// parole.forEach(element => {
//     console.log(element)
// });

// ---------------------------------------------------------------------------------------------------------------

//scrivere una funzione che dato un valore x e un valore n esegua la potenza di x alla n

// let calcolaPotenza = (x, n) => x**n;
// console.log(calcolaPotenza(2, 2));

// ------------------------------------------------------------------------------------------------------------------

//scrivere una funzione che inverte il contenuto di una stringa

// let stringa = prompt('Inserisci una frase');
// let reverseString = stringa => {
//     let arrayStringa = stringa.split('');
//     let arrayStringaReverse = arrayStringa.reverse();
//     let nuovaStringa = arrayStringaReverse.join(' ');
//     return nuovaStringa
// }
// console.log(reverseString(stringa));

// --------------------------------------------------------------------------------------------------------------------

// definire una funzione che ritorna una stringa casuale di n caratteri

let stringaCasuale = n => {
    let alfabeto = ['a','b','c','d','e','f','g','h','i','l','m','n','o','p','q','r','s','t','u','v','z'];
    let arrayParola = [];
    for(let i = 0; i < n; i++){
        let numeroRandom = Math.floor(Math.random() * (alfabeto.length - 1) + 1);
        arrayParola.push(alfabeto[numeroRandom]);
    }
    let parola = arrayParola.join('');
    return parola;
}
let num = Number(prompt('Inserisci un numero, ti restituirò una parola composta da n caratteri.'));
console.log(stringaCasuale(num));