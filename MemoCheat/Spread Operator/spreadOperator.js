let fruits = ['pomme', 'poire', 'fraise', 'tomate', 'orange'];// on crée un tableau
let aliments = ['pâte', 'fromage', 'lait', 'saucisse', 'chocolat'];
let legumes = ['chou', 'carotte', 'celeri', 'poivron', 'chou-fleur'];

let total=aliments.concat(fruits, legumes);// on concatène les 3 tableaux

console.log(total);

//Autre solution
let avioparts = ['cockpit', 'fuselage', 'wings', 'tail'];// on crée un tableau
let avion = ['airbus', 'boeing', 'airbus', 'boeing',...avioparts];// on utilise le spread operator pour concaténer les tableaux

console.log(avion);// on affiche le tableau final


//Autre solution
let phrase = "Hello World";// on crée une phrase
let lettres = [...phrase];// on utilise le spread operator pour transformer la phrase en tableau

console.log(lettres);// on affiche le tableau final

//Autre solution
let devises = ['euro', 'dollar', 'livre', 'yen'];// on crée un tableau
let [premiereDevise, secondeDevise, ...reste] = devises;// on utilise le spread operator pour extraire les éléments du tableau

console.log(premiereDevise);// on affiche la première devise
console.log(secondeDevise);// on affiche la seconde devise
console.log(reste);// on affiche le reste du tableau