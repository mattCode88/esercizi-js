// blocco-6: Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

let numeroUtente = Number(prompt('Inserisci un numero'));

for(let i = 1; i <= numeroUtente; i++){
    console.log(Math.pow(i, 3));
}
