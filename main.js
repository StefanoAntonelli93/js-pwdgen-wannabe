'use strict';
// commento

// console.log("ciao");

// alert("errore")

// console.log(document.getElementById("mio_nome").innerHTML = "Federico");
// document.getElementById("mio_nome").innerHTML = "Federico";


// const
// const miaVariabile = 'testo iniziale';
// console.log(miaVariabile);


// let
// let variable ='Stefano';
// variable ='Federico';
// console.log(variable);

// let myName = 'ste';
// myName = '2';
// console.log(myName);

// let myVar =3;
// console.log(myVar);


// prompt
// const userName = prompt('Inserisci il tuo nome');

// const userLastName = prompt('Inserisci il tuo cognome');

// console.log(`${userName} ${userLastName}`);


console.log(document.getElementById('myUsername'));



// esercizio

let currentText = document.getElementById('myUsername').innerHTML;

const userName = prompt('Inserisci il tuo nome');
const userLastName = prompt('Inserisci il tuo cognome');
const color = prompt('Inserisci il tuo colore preferito');
// const number = 21;

// bonus numero casuale**********************
let casualNumber = Math.random() * 1000;
// bonus numero casuale**********************

// interpolazione backtick

currentText = `${userName} ${userLastName} ${color} ${casualNumber}`;

// console

console.log(currentText);


// browser

document.getElementById('myUsername').innerHTML = currentText;




// // esercizio in classe

// let currentElement = document.getElementById('myUsername');
// let currentText = currentElement.innerHTML;

// const userName = prompt('Inserisci il tuo nome');
// const userLastName = prompt('Inserisci il tuo cognome');

// // interpolazione backtick

// currentText = `${currentText}  ${userName} ${userLastName}`;

// // console

// console.log(currentText);

// // browser

// currentElement.innerHTML = currentText;