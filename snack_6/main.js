//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente.
var n = Number(prompt("Inserisci il numero da stampare in cubo"))

/* for(var i = 1; i <= n; i++) {
    console.log(Math.pow(i, 3));
} */

var i = 1;
while(i <= n) {
    console.log(Math.pow(i, 3));
    i++;
}