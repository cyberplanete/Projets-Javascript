
let panier =['poires', 'pommes', 'bananes', 'cerises', 'fraises'];// on crée un tableau
console.log(panier);// on affiche le tableau
console.log('####################### Boucle for in #############################');
for (const fruit in panier) {// on parcourt le tableau
    console.log(panier[fruit]);// on affiche le fruit
}
console.log('####################### Boucle for of ###########################');
for (const fruit of panier) {// on parcourt le tableau
    console.log(fruit);// on affiche le fruit
    
}

for (const fruit of panier) {// on parcourt le tableau
    console.log(panier.indexOf(fruit));// on affiche l'index du fruit
    
}
console.log('####################### Boucle forEach ###########################');
let listeDePays = ['France', 'Espagne', 'Italie', 'Portugal', 'Belgique'];// on crée un tableau
listeDePays.forEach(function(pays) {// on parcourt le tableau
    console.log(pays);// on affiche le pays
}   );

let listeDeVilles = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux'];
listeDeVilles.forEach( ville => console.log(ville)) ;

console.log('####################### Boucle for tableauAssociatif ###########################');
let tableauAssociatif = {'Prénom' : 'Mark', 'Nom' : 'Zuckerberb', 'Poste' : 'PDG de Facebook' };// on crée un tableau associatif
let chainesDeCaracteres = [];// on crée un tableau vide
for (const cle in tableauAssociatif) {// on parcourt le tableau associatif
    chainesDeCaracteres +=(cle + ':' + tableauAssociatif[cle] +'\n');  // +(cle + ':' + tableauAssociatif[cle]);// on ajoute la clé et la valeur dans le tableau
   
} console.log(chainesDeCaracteres);// on affiche le tableau