//file:///media/MesDocs/Developpement/MesProjetsDev/Projets%20Javascript/MemoCheat/DOM%20Document%20Object%20Model/Supprimer%20des%20elements/index.html

//Supprimer des éléments
document.querySelector('#a-supprimer').remove();// remove the first h1 element


//Creation d'un header
let titre = document.createElement('header');
//creation d'un menu
let menu = document.createElement('div');
//Creation d'un paragraphe
let paragraphe = document.createElement('p');


//Personnalisation du header
titre.textContent = 'Bienvenue sur mon site';
titre.style.backgroundColor = '#e3b04b';
titre.style.color = 'white';
titre.style.padding = '20px';
titre.style.textAlign = 'center';
titre.style.fontSize = '2em';


//Personnalisation du menu
menu.innerHTML = '<a href="#">Accueil</a> / <a href="#">Une Autre page</a> / <a href="#">A propos</a>';
menu.style.backgroundColor = '#f1d6ab';
menu.style.padding = '20px';

//Personnalisation du paragraphe
paragraphe.textContent = 'Ceci est un paragraphe';
paragraphe.style.padding = '20px';

//Ajout du header au body
document.body.appendChild(titre);
//Ajout du menu au body
document.body.appendChild(menu);
//Ajout du paragraphe au body
document.body.appendChild(paragraphe);












