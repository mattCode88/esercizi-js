// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato
// Gioco dei dadi, chi fa di più vince.
// Generare un numero random da 1 a 6, sia per il
// giocatore sia per il compute. Stabilire il
// vincitore, in base a chi fa il punteggio più alto.

const emailList = ['matteo@gmail.com', 'andrea@gmail.com', 'francesca@gmail.com', 'martina@gmail.com', 'tiziana@gmail.com'];

let email = prompt('Inserisci la tua mail e vediamo se vinci..');

function controlValidMail(mail){
    let chiocciola;
    let punto;
    if(mail.indexOf('@', 1) !== -1){
        chiocciola = mail.indexOf('@');
    }
    if(chiocciola){
        if(mail.indexOf('.', (chiocciola + 2)) !== -1){
            punto = mail.indexOf('.');
        }
    }
    if(mail.length > (punto + 2) && mail.length < (punto + 5)){
        return false;
    }
    return true;
}

while(controlValidMail(email)){
    email = prompt('Inserisci una mail valida!');
}

let control = false;
emailList.forEach(element => {
    if(element !== email){
        constrol = false;
    }else{
        control = true;
    }
});

if(control === true){
    alert('Email verificata..Controlla se hai vinto');
    let numeroComputer = Math.floor(Math.random() * (11 - 1) + 1);
    let tuoNumero = Math.floor(Math.random() * (11 - 1) + 1);
    if(tuoNumero > numeroComputer){
        alert('Bravo...hai vinto!!!');
    }else if(tuoNumero === numeroComputer){
        alert('Pareggio!!!');
    }else{
        alert('Peccato...hai perso!!!')
    }
}else{
    alert('Mi spiace, non sei in lista.')
}