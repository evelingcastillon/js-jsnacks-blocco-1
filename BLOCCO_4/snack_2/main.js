var a = 14;
var b = 48;




var area = (a * b) / 2 ;
console.log(area, 'cm^2 è area');

var b2 = Math.pow(a,2)
var a2 = Math.pow(b,2)
console.log(b2, a2);

var c2 = b2 + a2;
console.log(c2, " cm al quadrato");

var c = Math.sqrt(c2)
console.log(c, " cm ipotenusa");

var perimetro = c + a + b ;
console.log(perimetro, ' cm è perimetro');