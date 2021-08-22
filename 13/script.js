// Chiedi all’utente il cognome,
// inseriscilo in un array con altri cognomi,
// stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana"
// della lista in cui il nuovo utente si trova.

let listaCognomi = ['Meago', 'Giovanazzi', 'Bianchini', 'Franceschini'];

let cognome = prompt('Inserisci il tuo cognome.');

cognome = cognome[0].toUpperCase() + cognome.slice(1);

listaCognomi.push(cognome);

listaCognomi.sort().forEach(function(element, index){
    console.log('Il cognome: ' + element + ', si trova in posizione ' + (index + 1));
})

