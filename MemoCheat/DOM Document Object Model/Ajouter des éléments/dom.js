//file:///media/MesDocs/Developpement/MesProjetsDev/Projets%20Javascript/MemoCheat/DOM%20Document%20Object%20Model/Modifier%20les%20%C3%A9l%C3%A9ments/index.html

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


// Modifier les éléments
titre.textContent = 'Mon titre';// change the text content of the first h1 element
titre.innerHTML = 'Mon <span>titre</span>';// change the html content of the first h1 element
titre.style.color = 'red';// change the color of the first h1 element
titre.style.fontSize = '2em';// change the font size of the first h1 element
titre.style.textTransform = 'uppercase';// change the text transform of the first h1 element
titre.style.textDecoration = 'underline';// change the text decoration of the first h1 element

// Ajouter des éléments
document.write('<p>Mon paragraphe</p>');// add a paragraph element to the end of the document
document.body.innerHTML += '<p>Mon paragraphe</p>';// add a paragraph element to the end of the body element

let nouveauTitre = document.querySelector('h1');// create a new h1 element
nouveauTitre.textContent = 'Mon nouveau titre';// change the text content of the new h1 element
nouveauTitre.innerHTML = 'Mon <span>nouveau titre</span>';// change the html content of the new h1 element
nouveauTitre.append(' Mon paragraphe');// add a paragraph element to the end of the new h1 element

// Ajouter des éléments objets paragraph
let nouveauParagraphe = document.createElement('p');// create a new paragraph element
nouveauParagraphe.textContent = 'Mon paragraphe';// change the text content of the new paragraph element
nouveauParagraphe.innerHTML = 'Mon <span>paragraphe</span>';// change the html content of the new paragraph element
document.body.append(nouveauParagraphe);// add the new paragraph element to the end of the body element

// Ajouter des éléments objets header
let nouveauHeader = document.createElement('header');// create a new header element
nouveauHeader.textContent = 'Mon header';// change the text content of the new header element
nouveauHeader.innerHTML = 'Mon <span>header</span>';// change the html content of the new header element
document.body.append(nouveauHeader);// add the new header element to the end of the body element

