/* var n1 = parseInt(prompt("Inserire numero 1"));
var n2 = parseInt(prompt("Inserire numero 2"));
var n3 = parseInt(prompt("Inserire numero 3"));
var n4 = parseInt(prompt("Inserire numero 4"));
var n5 = parseInt(prompt("Inserire numero 5"));
var n6 = parseInt(prompt("Inserire numero 6"));
var n7 = parseInt(prompt("Inserire numero 7"));
var n8 = parseInt(prompt("Inserire numero 8"));
var n9 = parseInt(prompt("Inserire numero 9"));
var n10 = parseInt(prompt("Inserire numero 10"));
 */
//var somma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10

somma = 0

for ( var i = 0; i < 9; i++ ){
    var n = parseInt(prompt("Inserire numero"));
    var somma = somma + n
}
document.getElementById("somma").innerHTML = somma