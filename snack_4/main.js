//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitati = ["Anna" , "Luca" , "Andrea" , "Tommaso"];
var nomeUtente = prompt("Inserire nome");

var partecipante = false
for(var i = 0; i< invitati.length; i++) {
    var amico = invitati[i]
    if(amico == nomeUtente) {
        partecipante = true
    }
}

var message; 
if(partecipante) {
    message = "ACCESSO CONSENTITO"
} else {
    message = "ACCESSO NEGATO"
}
console.log(message);










/* 
if ((nomeUtente == "Anna") || (nomeUtente == "Luca") || (nomeUtente == "Andrea"))
 */
/* 
if (nomeUtente == invitati) {
    message = "ACCESSO CONSENTITO"
    document.getElementById("message").innerHTML = "ACCESSO CONSENTITO";
} else {
    message = "ACCESSO NEGATO"
    document.getElementById("message").innerHTML = "ACCESSO NEGATO";
}
 */