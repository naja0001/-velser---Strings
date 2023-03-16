"use strict";

function myFunc(internparm) {
  console.log(parm);
  internparm = "en ny værdi";
  console.log(internparm);
}

const parm = "første værdi";

console.log(parm);
//den første der bliver kaldt da de først kalder på functionene efter console.log
myFunc(parm);
console.log(parm);

/*

Hvad sker der hvis funktionen bliver kaldt uden parameter?
Hvad sker der hvis funktionen bliver kaldt med “en tredje værdi” i stedet for parm?
Hvad sker der hvis der bliver oprettet en ny let parm = “noget helt nyt” inde i funktionen?
Hvad sker der hvis parameteren i funktionserklæringen ændres fra parm til parm1? 

*/
