"use strict";

//-------------FULLNAME-----------------------------

function writeFullName(efterNavn, forNavn, mellemNavn) {
  console.log(` ${efterNavn} ${forNavn} ${mellemNavn}`);
}

const forNavn = "Naima";
const mellemNavn = "Farhan";
const efterNavn = "Jama";

writeFullName(forNavn, mellemNavn, efterNavn);

//-------------FULLNAME DEL 2-----------------------------

function getFullName(efterNavn2, forNavn2, mellemNavn2) {
  return `${forNavn2} ${mellemNavn2} ${efterNavn2} `;
}

const result = getFullName("Jama", "Naima", "Farhan");
const result2 = getFullName("Naima", "Farhan");
console.log(result);
console.log(result2);
