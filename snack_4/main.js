var invitati = ["Anna" , "Luca" , "Andrea" , "Tommaso"];
var nomeUtente = prompt("Inserire nome");

/* 
if ((nomeUtente == "Anna") || (nomeUtente == "Luca") || (nomeUtente == "Andrea"))
 */

if (nomeUtente == invitati) {
    message = "ACCESSO CONSENTITO"
    document.getElementById("message").innerHTML = "ACCESSO CONSENTITO";
} else {
    message = "ACCESSO NEGATO"
    document.getElementById("message").innerHTML = "ACCESSO NEGATO";
}
