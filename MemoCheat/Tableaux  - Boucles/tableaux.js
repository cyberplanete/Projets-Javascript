
let panier =['poires', 'pommes', 'bananes', 'cerises', 'fraises'];
console.log(panier);
console.log('####################### Boucle for in #############################');
for (const fruit in panier) {
    console.log(panier[fruit]);
}
console.log('####################### Boucle for of ###########################');
for (const fruit of panier) {
    console.log(fruit);
    
}

for (const fruit of panier) {
    console.log(panier.indexOf(fruit));
    
}
console.log('####################### Boucle forEach ###########################');
let listeDePays = ['France', 'Espagne', 'Italie', 'Portugal', 'Belgique'];
listeDePays.forEach(function(pays) {
    console.log(pays);
}   );

let listeDeVilles = ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Bordeaux'];
listeDeVilles.forEach( ville => console.log(ville)) ;

console.log('####################### Boucle for tableauAssociatif ###########################');
let tableauAssociatif = {'Prénom' : 'Mark', 'Nom' : 'Zuckerberb', 'Poste' : 'PDG de Facebook' };
let chainesDeCaracteres = [];
for (const cle in tableauAssociatif) {
    chainesDeCaracteres +=(cle + ':' + tableauAssociatif[cle] +'\n');  // +(cle + ':' + tableauAssociatif[cle]);
   
} console.log(chainesDeCaracteres);