function compteur() {
    let secondes = 0;

    let maClosure = function () {
        secondes++;
        return secondes;
    };
    return maClosure;
}

let monCompteur = compteur();
console.log(monCompteur());
console.log(monCompteur());
console.log(monCompteur());

console.log('############## Deuxième exemple ##############');

// Compare this snippet from Functions de Javascript  - Closures/function.js:
let monCompteur_n2 = compteur();
console.log(monCompteur_n2());
console.log(monCompteur_n2());
