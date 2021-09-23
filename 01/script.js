// blocco-1: L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

let numero1 = Number(prompt('Inserisci un numero'));
let numero2 = Number(prompt('Inserisci un altro numero'));

if(numero1 > numero2){
    console.log(numero1);
}else{
    console.log(numero2);
}