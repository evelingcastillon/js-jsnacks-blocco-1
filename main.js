var parola_1 = prompt("Inserisci prima parola")
var parola_2 = prompt("Inserisci seconda parola")

var n_1 = parola_1.length
var n_2 = parola_2.length

if (n_1 > n_2) {
    console.log(parola_1 + " " + parola_2);
} else if (n_2 > n_1) {
    console.log(parola_2 + " " + parola_1);
}