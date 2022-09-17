let voitures= new WeakMap(); // on crée un set vide
let peugeot_206 = {'marque': 'Peugeot', 'modele': '206', 'annee': '2010'};// on crée un objet
let renault_megane = {'marque': 'Renault', 'modele': 'Megane', 'annee': '2010'};// on crée un objet
let renault_super5 = {'marque': 'Renault', 'modele': 'Super5', 'annee': '2010'};// on crée un objet

let index = {id: 1};// on crée un objet

voitures.set(index, peugeot_206);// on ajoute l'objet dans le set


console.log(voitures);// on affiche le set

voitures.delete(index);// on supprime l'objet du set

console.log(voitures);// on affiche le set