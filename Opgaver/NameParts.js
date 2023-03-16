"use strict";

let tekst = "Naima Farhan Jama";

let start1 = tekst.indexOf("N");
let slut1 = tekst.indexOf(" ");

let myName1 = tekst.substring(start1, slut1);

let start2 = tekst.indexOf(" ") + 1;
let slut2 = tekst.indexOf("n") + 1;

let myName2 = tekst.substring(start2, slut2);

let start3 = tekst.lastIndexOf(" ") + 1;
let slut3 = tekst.length;

let myName3 = tekst.substring(start3, slut3);

console.log(`Mit fornavn er: ${myName1}`);
console.log(`Mit mellemnavn er: ${myName2}`);
console.log(`Mit efternavn er: ${myName3}`);

//del2...........

function writeNameParts(fornavn, mellemnavn, efternavn) {
  console.log(`${fornavn} ${mellemnavn} ${efternavn}`);
}

const fornavn = "Naima";
const mellemnavn = "Farhan";
const efternavn = "Jama";

writeNameParts(fornavn, mellemnavn, efternavn);
