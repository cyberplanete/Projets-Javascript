let consommable = "tomate";

switch (consommable) {
    case "banane":
        console.log('ceci est un fruit');
        break;
    case "courgette":
    case "tomate"        :
    case "carotte":
        console.log('ceci est un légume');
            break;
    default:
        console.log("ceci n'est pas un légume, ni un fruit");
        break;
}

let x = prompt('Veuillez donner un chiffre !!') || "6";
//let x=6;
if (x > 3) {
    console.log('x est supérieur à 3');
} else {
    console.log('x est inférieur à 3');
}


 return x > 3 ? console.log('x est supérieur à 3') : console.log('x est inférieur à 3');