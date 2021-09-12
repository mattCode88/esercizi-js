// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.

let studente = {
    "nome" : "Matteo",
    "cognome" : "Meago",
    "eta" : 32
}

for(prop in studente){
    console.log(`${prop} : ${studente[prop]}`);
}

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

let studenti = [
    {
        "nome": "Matteo",
        "cognome" : "Meago",
        "eta" : 32
    },
    {
        "nome": "Francesca",
        "cognome" : "Giovanazzi",
        "eta" : 29
    },
    {
        "nome": "Martina",
        "cognome" : "Meago",
        "eta" : 27
    },
    {
        "nome": "Sonia",
        "cognome" : "Franceschini",
        "eta" : 56
    }
];

studenti.forEach(element => {
    for(prop in element){
        console.log(`${prop} : ${element[prop]}`);
    }
});

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

let studenteUtente = {};

studenteUtente.nome = prompt('Inserisci il tuo nome');
studenteUtente.cognome = prompt('Inserisci il tuo cognome');
studenteUtente.eta = Number(prompt('Inserisci la tua eta'));

for(prop in studenteUtente){
    console.log(`${prop} : ${studenteUtente[prop]}`);
}

studenti.push(studenteUtente);
console.log(studenti);