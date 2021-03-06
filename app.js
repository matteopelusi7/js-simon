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

const number = [];

function generateNumber (num) {
    
    do {
    
        const randomNum = getRandomInt(1, 100);
        
        if(!number.includes(randomNum)) {
            number.push(randomNum);
        }
    
    } while ( number.length < num )

    return number;
    
}

const arrayCompleteRandom = generateNumber(5);

const dNum = alert(`I numeri casuali generati da ricordare sono: ${number.join(' ')}`);

let time = 30;

setTimeout(timerPrincipal, 31000);
const timerUser = setInterval( timer, 1000);

function timer() {

    if (time == 0) {
        time = 0;
    } else {
        console.log(`Mancano ${time--} secondi`);
    }

}

function timerPrincipal() {

    const numUserArray = [];
    
    do {
    
        const numUser = parseInt( prompt ('Inserisci 5 numeri da ricordare') );
        numUserArray.push(numUser);
    
    } while ( numUserArray.length < 5 )

    comparaArray(numUserArray);
    
    console.log(`I numeri erano ${number.join(' ')}. Hai indovinato ${sum} numeri: ${resultVerify.join(' ')} e non hai indovinato ${resultError.join(' ')}`);
    
}

const resultVerify = [];
const resultError = [];
let sum = 0;

function comparaArray (arraySecond) {
    
    for( let i = 0; i < arraySecond.length; i++ ) {
        
        const element = arraySecond[i];
        
        if (number.includes(element)){
            resultVerify.push(element);
            sum++;
        } else {
            resultError.push(element);
        }

    }
    
}