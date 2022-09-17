let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,10,5,6];// Création d'un tableau
let monSet = new Set(nombres);// Création d'un set à partir du tableau

console.log(monSet); 
monSet.add(11);// Ajout d'un élément
console.log(monSet);// Affichage du set
monSet.delete(11);// Suppression d'un élément
console.log(monSet);// Affichage du set
console.log(monSet.has(11));// Vérification de l'existence d'un élément
console.log(monSet.size);// Affichage de la taille du set
console.log(monSet.has(10));// Vérification de l'existence d'un élément
console.log(monSet.values());// Affichage des valeurs du set