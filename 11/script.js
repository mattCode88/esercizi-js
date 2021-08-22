// Calcolo prezzo del treno:
// Il programma dovrà chiedere all’utente il
// numero di chilometri che vuole
// percorrere e l’età del passeggero.
// Sulla base di queste informazioni dovrà
// calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai
// km (0.21 € al km), ma va applicato uno
// sconto del 20% per i minorenni e del
// 40% per gli over 65.

let km = Number(prompt('Buongiorno, quanti chilometri desidera fare da 1 a 100?'));

while(km < 1 || km > 100){
   km = Number(prompt('Buongiorno, quanti chilometri desidera fare da 1 a 100?'));
}

let eta = Number(prompt('Quanti anni ha?'));

if(eta < 10){
    while(eta < 10){
        alert('ehi, dov è la tua mamma??');
        eta = Number(prompt('Quanti anni ha?'));
    }
}

if(eta > 100){
    while(eta > 100){
        alert('forse è meglio tornare all ospizio');
        eta = Number(prompt('Quanti anni ha?'));
    }
}

let prezzoIntero = km * 0.21;

let prezzoScontato;

if(eta < 18){
    prezzoScontato = prezzoIntero - (prezzoIntero * 20 / 100);
}else if(eta >= 65){
    prezzoScontato = prezzoIntero - (prezzoIntero * 40 / 100);
}else{
    prezzoScontato = prezzoIntero;
}

console.log('Il prezzo del suo biglietto è di: ' + prezzoScontato.toString().slice(0, 4) + ' euro');