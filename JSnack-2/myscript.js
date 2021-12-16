/*JSnack 2
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100.
Ogni volta che ne crei uno, stampalo a schermo. */

//richiedo all'utente un numero
let userInput = parseInt(prompt("Inserisci un numero!"));
console.log(userInput);

for (i=0; i < userInput; i++)
{
    let userArray = [];
    for(k=0; k < 10; k++)
    {
        userArray.push(Math.floor(Math.random()*100+1));
    }
    document.writeln(userArray);
}
