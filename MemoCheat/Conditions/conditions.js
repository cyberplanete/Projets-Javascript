let consommable = "tomate";//

switch (consommable) {// on teste la valeur de la variable
    case "banane":// si la valeur est "banane"
        console.log('ceci est un fruit');
        break;
    case "courgette":// si la valeur est "courgette"
    case "tomate"        :// ou "tomate"
    case "carotte":// ou "carotte"
        console.log('ceci est un légume');// on affiche "ceci est un légume"
            break;// on sort du switch
    default:// si la valeur n'est ni "banane", ni "courgette", ni "tomate", ni "carotte"
        console.log("ceci n'est pas un légume, ni un fruit");
        break;  // on sort du switch
}

let x = prompt('Veuillez donner un chiffre !!') || "6";// on demande à l'utilisateur de saisir un chiffre
//let x=6;
if (x > 3) {// si x est supérieur à 3
    console.log('x est supérieur à 3');// on affiche "x est supérieur à 3"
} else {
    console.log('x est inférieur à 3');// sinon on affiche "x est inférieur à 3"
}


 return x > 3 ? console.log('x est supérieur à 3') : console.log('x est inférieur à 3');// on affiche "x est supérieur à 3" si x est supérieur à 3, sinon on affiche "x est inférieur à 3"