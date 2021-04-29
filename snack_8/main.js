//Chiedi un numero di 4 cifre all’utente
//calcola la somma di tutte le cifre che compongono il numero.

var n = prompt("Inserisci numero di 4 cifre")
var n_array = n.split("")
console.log(n_array);
var somma = 0;

for(var i = 0; i < n_array.length; i++) {
    somma += Number(n_array[i]);
}
console.log(somma);