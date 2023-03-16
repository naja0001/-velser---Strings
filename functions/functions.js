"use strict";

//parameter firstname er inde i funktionen say hello

function sayHello(firstname) {
  console.log(`Hello ${firstname}`);
}

//sayHello skal spytte myName
//sayHello skal spytte noget andet

/*const myName = "Naima";
sayHello(myName);
sayHello("Noget andet");*/

const myName = "Naima";
const lastname = "jama";
sayHello(lastname, myName);

/*
Hvad sker der hvis funktionen bliver erklæret i bunden af js-filen, men kaldt i toppen?

    - ikke noget
Hvad sker der hvis funktionen kaldes med en variabel der hedder firstName?
const firstName = "Peter";
sayHello( firstName );

    - ikke noget
Hvad sker der hvis funktionen kaldes uden en parameter? Hvis der stadig findes en variabel der hedder firstName, og hvad hvis der ikke længere findes en variabel?
    - undefined

Hvad sker der hvis funktionen kaldes med firstName og lastname, altså der er lavet variabler for begge, og den kaldes med:
sayHello( firstName, lastName );
    - hello naima

Hvad hvis de to bliver byttet om, så den kaldes med:
sayHello( lastName, firstName );
    - hello jama


*/
//not defined
// hello undefined
// hello undefined omvendt
