"use strict";

const tekst = "my name is naima";

const start = tekst.lastIndexOf(" ") + 1;
const slut = tekst.length;

const myName = tekst.substring(start, slut);

console.log(`_${myName}_`);


