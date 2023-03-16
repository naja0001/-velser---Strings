"use strict";

function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName} I have a ${animalType} called ${animalName}`
  );
}

const firstName = "Naima";
const animalType = "dog";
const animalName = "mary";
presentPet(firstName, animalType, animalName);

/* 
Hvad sker der hvis funktionen kaldes med variabler der hedder det samme som parametrene?
    - intet
Hvad sker der hvis funktionen kaldes med variabler der hedder noget andet?
    -intet
Hvad sker der hvis den udelukkende kaldes med strenge?
    - intet
Hvad sker der hvis den kaldes med et mix af strenge og variabler?
    - intet
Hvad hvis du laver variablerne: firstName = “cat”, animalType=”Mandu” og animalName=”Peter” og kalder funktionen med de variabler?
    -det du skriver ind så my name is cat....
Hvad hvis du kalder den med de variabler men som presentPet(animalName, firstName, animalType); ?
    - så "my name dog i have a naima called mary"
Hvad sker der hvis du bytter om på variablerne?
    -Bytte om på værdierne for variablernes rækkefølge
    
det eneste der betyder er rækkefølgen eller strenegene.
*/
