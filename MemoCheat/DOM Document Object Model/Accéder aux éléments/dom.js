//file:///media/MesDocs/Developpement/MesProjetsDev/Projets%20Javascript/MemoCheat/DOM%20Document%20Object%20Model/index.html

let enTete = document.getElementsByTagName('header'); // returns an array of all header elements
let logo = document.getElementById('logo'); // returns the first logo element
let conteneur = document.getElementsByClassName('container'); // returns an array of all container elements
let titre = document.querySelector('h1');// returns the first h1 element
let p = document.querySelectorAll('p');// returns an array of all p elements

console.log(enTete);
console.log(logo);
console.log(conteneur);
console.log(titre);
console.log(p);