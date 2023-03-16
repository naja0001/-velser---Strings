"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}

const result = greeting("Naima");
console.log(result);

/*

Hvad sker der hvis funktionen bare bliver kaldt, uden at en variabel bliver sat lig med den? Altså at der bare står greeting(“et navn”); på en linje?
    - vi gemme den ikke i en variable.
Hvad sker der hvis funktionen bliver kaldt ude i konsollen, altså du skriver greeting(“et navn”) og trykker enter?
    - Så virker det
Hvad sker der hvis funktionen kaldes direkte i en console.log? Altså console.log(greeting(“et navn”)); ?
    - så returnere den
Hvad sker der hvis funktionen kaldes uden en parameter?
    - Hello undefined
Hvad sker der hvis funktionen kaldes inde i en template string, fx const txt = `Greeting is ${greeting(“et navn”)}`;
    ----
*/