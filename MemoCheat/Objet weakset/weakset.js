let voitures= new WeakSet(); // on crée un set vide
let voiture1 = {'marque': 'Peugeot', 'modele': '206', 'annee': '2010'};// on crée un objet
let voiture2 = {'marque': 'Renault', 'modele': 'Megane', 'annee': '2010'};
let voiture3 = {'marque': 'Renault', 'modele': 'Megane', 'annee': '2010'};

voitures.add(voiture1);// on ajoute l'objet dans le set
voitures.add(voiture2);
voitures.add(voiture3);

console.log(voitures);// on affiche le set

voitures.delete(voiture1);// on supprime l'objet du set