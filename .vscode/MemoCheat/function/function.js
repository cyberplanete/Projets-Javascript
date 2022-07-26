
sayHello('pascal');
function sayHello(prenom) {

   // alert('Bonjour ' + prenom);

}

let nombreUn = 4, nombreDeux = 7;

function addition(nombreUn, nombreDeux) {

let somme = nombreUn + nombreDeux;

    return somme;

}

console.log(addition(nombreUn,nombreDeux));



function cuisiner(nombreGateaux, minutestPreparation = 10, minutesCuisson = 15) {

let resultat = nombreGateaux * (preparation + cuisson);

    return resultat;

}

let tempsPreparationChocolat = cuisiner(4);
let tempsPreparationFraisier = cuisiner(1);
console.log(tempsPreparationChocolat + tempsPreparationFraisier);
