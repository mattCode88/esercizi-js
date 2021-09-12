// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore

let bici = [
    {
        "nome" : "runner",
        "peso" : 25
    },
    {
        "nome" : "blade",
        "peso" : 30
    },
    {
        "nome" : "ginger",
        "peso" : 22
    },
    {
        "nome" : "glasko",
        "peso" : 11
    },
    {
        "nome" : "jamaica",
        "peso" : 40
    }
];

let pesoBici = [];

bici.forEach(element => {
   pesoBici.push(element.peso);
});

let min = Math.min( ...pesoBici );

bici.forEach(element => {
   if(element.peso === min){
       console.log(`La bici ${element.nome} è quella che pesa meno: ${element.peso} kg`);
   }
});