//Tableau
let informations = [ 'John',  'Doe',  '23 ans'];
//Sans Décomposition
let prenom = informations[0];// John
let nom = informations[1];// Doe
let age = informations[2];// 23 ans

//Avec Décomposition
let [prenomD,nomD, ageD] = informations;    //On décompose l'array en 3 variables

console.log(prenomD);// John
console.log(nomD);// Doe
console.log(ageD);// 23 ans
