/* Lösning till uppgift 2 av Molly Karlsson 2026*/
"use strict";

let price = 200;
console.log("Pris: " + price + " kr"); //Pris

let amount = 5;
console.log("Antal: " + amount); //Antal

let total = price * amount;
console.log("Totalt: " + total + " kr"); //Totalt

let moms = 0.25; //Moms

let totalWithMoms = total * (1 + moms);
console.log("Totalt med moms: " + totalWithMoms + " kr"); //Totalt med moms
