/*JSnack 3
Crea due tag div con due id diversi:
un div avrà il testo colorato di rosso mentre l’altro di verde.
Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari 
e in verde i numeri pari. */

//creo due div diversi
let elementDiv1 = document.createElement("div");
let elementDiv2 = document.createElement("div");

//gli assegno il colore rosso e verde
elementDiv1.style.color = "red";
elementDiv2.style.color = "green";

//attribuisco gli id ad entrambi
elementDiv1.setAttribute("id", "red-container");
elementDiv2.setAttribute("id", "green-container");

//attribuisco la classe per centrarli tramite anche classi Bootstrap
elementDiv1.setAttribute("class", "text-center m-5");
elementDiv2.setAttribute("class", "text-center");

//li butto nell'html
document.body.appendChild(elementDiv1);
document.body.appendChild(elementDiv2);

//definisco la mia array con un po di numeri
let myArray = [1,2,11,14,19,22,27,28,31,35,40,45,48,50];

//creo un ciclo lungo quanto gli elementi della mia array 
//e se il numero è pari va nel rosso, se è dispari nel verde
for (i=0; i < myArray.length; i++){
    if(myArray[i]%2==0){
        elementDiv1.innerHTML += myArray[i] + " ";
    }else{
        elementDiv2.innerHTML += myArray[i] + " ";
    }
}