/*JSnack 1
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a 
quando la somma degli elementi è minore di 50. */

//creo un array vuoto
let numberList = [];

//chiedo all'utente di inserire un numero tramite prompt, lo inserisco nell'array e lo sommo;
let sum = 0;
do{
    let userInput = parseInt(prompt("Inserisci un numero!"))
    numberList.push(userInput);
    sum += userInput;
//ne esco quando ho raggiunto somma 50 
}while(sum <= 50);

//stampo per visione la mia array e la mia somma finale
document.writeln("Eccola tua lista di numeri!" + numberList);
document.writeln("Eccola tua somma!" + sum);
