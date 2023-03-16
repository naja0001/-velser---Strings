"use strict";

// -------------------------------- Del 1 -------------------------------

const firstSpace = fullName.indexOf(" ");
const lastSpace = fullName.lastIndexOf(" ");

const firstName = fullName.substring(0, firstSpace);
const middleName = fullName.substring(firstSpace + 1, lastSpace);
const lastName = fullName.substring(lastSpace + 1);

console.log(
  `first name: _${firstName}_ middle name: _${middleName}_  last name: _${lastName}_`
);
//eller nemmere måde

console.log({ firstName, middleName, lastName });

//---------------------------------- Del 2 ---------------------------------

const namePart = "naIMa";

const first = namePart.substring(0, 1);
const rest = namePart.substring(1);

const firstStor = first.toUpperCase();
const restLille = rest.toLowerCase();

const result = firstStor + restLille;

console.log(result);

//--------------------------------- del 2 --------------------

function writeCapitalized(namePart1) {
  const first1 = namePart1.substring(0, 1);
  const rest1 = namePart1.substring(1);

  const firstStor1 = first1.toUpperCase();
  const restLille1 = rest1.toLowerCase();

  const result1 = firstStor1 + restLille1;

  console.log(result1);

  // hvis return ---

  return result1;
}

writeCapitalized("naIMa");

//for retur har vi brug for en varialbe at gemme den i-----

//-----------------------return------------------

const capital = writeCapitalized("naIma");
console.log(capital);

//eller

console.log(writeCapitalized("naIma"));

//-----------------namepart 3 -------------

function getNameParts(fullName) {
  const firstSpace = fullName.indexOf(" ");
  const lastSpace = fullName.lastIndexOf(" ");

  const firstName = capitalize(fullName.substring(0, firstSpace));
  let middleName = fullName.substring(firstSpace + 1, lastSpace);
  const lastName = fullName.substring(lastSpace + 1);

  if (middleName === " ") {
    middleName = undefined;
  }

  return { firstName, middleName, lastName };
}

console.log(getNameParts("Naima Farhan Jama"));

function capitalize(namepart) {
  const first = namePart.substring(0, 1);
  const rest = namePart.substring(1);

  const firstStor = first.toUpperCase();
  const restLille = rest.toLowerCase();

  const result = firstStor + restLille;

  return result;
}
