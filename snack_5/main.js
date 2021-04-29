//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array. 

var lista = []

for(var i = 1; i <= 6; i++ ) {
    var numeroUtente = Number(prompt("Inserisci numero"))
    if (numeroUtente % 2 != 0) {
        lista.push(numeroUtente);
    }
}
console.log(lista);






/* for (var i = 0; i < 6; i++) {
    numeri.push = Number(prompt("Inserisci un numero"))
    document.getElementById("numeri").innerHTML = numeri.push;
} */
