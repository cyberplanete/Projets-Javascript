let i = 1;// on initialise la variable i à 1

while (i < 5) // tant que i est inférieur à 5
{
    console.log(i + 1);// on affiche i + 1
    i++;// on incrémente i
}

let prenom;// on déclare la variable prenom
do {// on exécute le bloc de code
     prenom = prompt('Quel est votre prenom ?');
} while (prenom == "" || prenom == null);// tant que prenom est vide ou null

alert('Bonjour ' + prenom);// on affiche un message


for (let i = 1 ; i < 5; i++) {// on initialise i à 1, tant que i est inférieur à 5, on incrémente i
    
    console.log(i + 'toto');
}