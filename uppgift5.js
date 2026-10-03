/* Lösning till uppgift 5 av Molly Karlsson 2026*/
"use strict";

const matratter = ["Pizza", "Tacos", "Sushi", "Pasta", "Soppa"];

console.log("Hela: " + matratter); //1
console.log("Första: " + matratter[0]); //2
console.log("Sista: " + matratter[4]); //3

matratter.push("Lasagne"); //4
matratter.shift(); //5

console.log("Efter: " + matratter); //6
