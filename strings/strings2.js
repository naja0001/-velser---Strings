"use strict";

const fullname = "Albus Percival Wulfric Brian Dumbledore";

//“Albus”
console.log(fullname.substring(0, 5));

//“Dumbledore”
console.log(fullname.substring(29));

//“Wulfric”
console.log(fullname.substring(15, 22));

//“ Wulfric “ – har du et godt tip til hvordan man kan se om der er kommet ekstra mellemrum med, eller ej?
//tjek hvad indexet før/efter er.
console.log(fullname.substring(14, 23));

//“ian”
console.log(fullname.substring(25, 28));

//“bus”
console.log(fullname.substring(2, 5));
