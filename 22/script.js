// creiamo una serie di utenti con nomi e cognomi non duplicati, utilizzando i generatori

let nomi = ['Matteo', 'Camilla', 'Andrea', 'Luisa', 'Marco', 'Fiorenzo'];
let cognomi = ['Meago', 'Fiorina', 'Folini', 'Spalanzani', 'Giovanazzi', 'Romegialli'];

function* generaUtente(nomi, cognomi){
    while(nomi.length > 0){
        let indexNomi = (Math.random() * nomi.length) | 0,
            indexCognomi = (Math.random() * cognomi.length) | 0,
            nome = nomi[indexNomi],
            cognome = cognomi[indexCognomi];
        nomi.splice(indexNomi, 1);
        cognomi.splice(indexCognomi, 1);
        yield {nome, cognome};
    }
}

for(let user of generaUtente(nomi, cognomi)){
    console.log(user);
}

