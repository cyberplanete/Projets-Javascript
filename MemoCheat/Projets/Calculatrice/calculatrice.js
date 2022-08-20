let choixCalcul ;
let number1;
let number2;
let continuer;
startCalcul();

function startCalcul ()
{
do {
     choixCalcul =  prompt('Choisir le mode de calcul \n\n' +  
                '1. Addition \n' +
                '2. Multiplication \n' +
                '3. Soustraction \n' +
                '4. Division \n'
);

    
} while (choixCalcul == null || choixCalcul == '');

}

try {
    switch (choixCalcul) {
    case '1':
        addition();
        break;
     case '2':
        multiplication();
        break;
    case '3':
        soustraction();
        break;
    case '4':
        division();
        break;
    default:
        startCalcul();
        break;
}
} catch (error) {
    
}


function addition() {
    do {
        number1 = prompt(' Veuillez entrer le premier nombre');
    } while (number1 == null || number1 == '');

    do {
        number2 = prompt(' Veuillez entrer le second nombre');
    } while (number2 == null || number2 == '');
    let somme = parseInt(number1) + parseInt(number2);

    alert( 'La somme est :' +  somme);
   continuerCalculOrStop();
    
}

function soustraction() {
    do {
        number1 = prompt(' Veuillez entrer le premier nombre');
    } while (number1 == null || number1 == '');

    do {
        number2 = prompt(' Veuillez entrer le second nombre');
    } while (number2 == null || number2 == '');
    let difference = parseInt(number1) - parseInt(number2);

    alert( 'Le resultat de la soustraction est :' +  difference);
    continuerCalculOrStop() ;
}

function multiplication() {
    do {
        number1 = prompt(' Veuillez entrer le premier nombre');
    } while (number1 == null || number1 == '');

    do {
        number2 = prompt(' Veuillez entrer le second nombre');
    } while (number2 == null || number2 == '');
    let produit = parseInt(number1) * parseInt(number2);

    alert( 'Le produit est :' +  produit);
    continuerCalculOrStop() ;
}

// TODO Rendre impossible la division par zero
function division() {
    do {
        number1 = prompt(' Veuillez entrer le premier nombre');
    } while (number1 == null || number1 == '');

    do {
        number2 = prompt(' Veuillez entrer le second nombre');
    } while (number2 == null || number2 == '');
    let quotient = parseInt(number1) / parseInt(number2);

    alert( 'Le quotient est :' +  quotient);
    continuerCalculOrStop() ;
    
}



function continuerCalculOrStop() 
{
    
    do {
         continuer = prompt('Voulez vous continuer? oui ou non');
    } while (continuer == '' || continuer == 'nul');
    
    try {
        switch (continuer) {
            case 'oui':
                number1 = '';
                number2 = '';
                continuer = '';
                startCalcul();
                break;
            case 'non':
                alert('Fin du calcul');
                break;
            default:
                alert('Fin du calcul');
                break;
        }
    } catch (error) {
        console.log('Error detected: ' + error.message);
    }


}