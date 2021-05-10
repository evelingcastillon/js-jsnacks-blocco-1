var triangolo = {
    altezza : 14,
    base : 48
}

var area = (triangolo.altezza * triangolo.base) / 2 ;
console.log(area, 'cm^2 è area');

var b2 = Math.pow(triangolo.base,2)
var a2 = Math.pow(triangolo.altezza,2)
console.log(b2, a2);

var c2 = b2 + a2;
console.log(c2, " cm al quadrato");

var c = Math.sqrt(c2)
console.log(c, " cm ipotenusa");

var perimetro = c + triangolo.altezza + triangolo.base ;
console.log(perimetro, ' cm è perimetro');