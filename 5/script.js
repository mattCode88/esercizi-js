// blocco-5: Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

let arrayNumeri = [];

for(let i = 1; i <= 5; i++){
    let numero = Number(prompt('Inserisci un numero.'));
    if(numero % 2 != 0){
        arrayNumeri.push(numero);
    }
}

console.log(arrayNumeri);