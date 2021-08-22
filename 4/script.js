// blocco-4: In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let arrayInvitati = ['Matteo', 'Martina', 'Andrea', 'Francesca', 'Tiziana'];
let verifica = false;
let nomeUtente = prompt('Come ti chiami?');
nomeUtente = nomeUtente[0].toUpperCase() + nomeUtente.slice(1);

arrayInvitati.forEach(element => {
    if(element === nomeUtente){
        verifica = true;   
    }
});

if(verifica === true){
    console.log('Nome verificato, entra');
}else{
    console.log('Non sei in lista, mi spiace');
}
