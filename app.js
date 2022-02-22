// Visualizzare in pagina 5 numeri casuali. ( con un alert )
// Dopo la chiusura dell’alert parte un timer di 30 secondi.
// Alla fine dei 30 secondi l’utente dovrà inserire, 
// uno alla volta, i numeri che ha visto precedentemente ( se li ricorda ), 
// tramite il prompt() (servirà un ciclo…?).
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const num = [];

do {

    const randomNum = getRandomInt(1, 100);
    
    if(!num.includes(randomNum)) {
        num.push(randomNum);
    }

} while ( num.length < 5 )

const dNum = alert(`I numeri casuali generati da ricordare sono: ${num.join(' ')}`);

let time = 30;

const timerUser = setInterval( timer, 1000);

function timer() {

    if (time == 0) {
        time = 0;
    } else {
        console.log(`Mancano ${time--} secondi`);
    }

}

setTimeout(timerPrincipal, 30000);

function timerPrincipal() {

    const numUserArray = [];
    
    do {
    
        const numUser = prompt ('Inserisci 5 numeri da ricordare');
        numUserArray.push(numUser);
    
    } while ( numUserArray.length < 5 )

}