//Tableau
let informations = [ 'John',  'Doe',  '23 ans'];
//Sans Décomposition
let prenom = informations[0];
let nom = informations[1];
let age = informations[2];

//Avec Décomposition
let [prenomD,nomD, ageD] = informations;    //On décompose l'array en 3 variables

console.log(prenomD);
console.log(nomD);
console.log(ageD);
