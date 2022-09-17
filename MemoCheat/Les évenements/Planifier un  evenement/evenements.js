
//Planifier un évenement

//let timer = setTimeout(() => {alert('Vous avez 5 secondes pour cliquer sur le bouton');}, 5000);//affiche un message d'alerte apres 5 secondes d'attente
//setInterval(() => {alert('Vous avez 5 secondes pour cliquer sur le bouton');}, 5000);//affiche un message d'alerte toutes les 5 secondes

//clearTimeout(timer);//arrete le timer

// ############################################ Petit programme pour tester les evenements ############################################
let secondes=10;//initialise le nombre de secondes
let p = document.body.appendChild(document.createElement('p'));//ajoute un paragraphe au body

function decompte() {//fonction decompte

    
 let timer = setInterval((e) => {//initialise le timer
    if (secondes === 0) {//si le nombre de secondes est egal a 0
        clearInterval(timer);//arrete le timer
    }
        console.log(secondes);//affiche le nombre de secondes
        p.appendChild(document.createTextNode(secondes));//ajoute le nombre de secondes au paragraphe
        //Nouvelle ligne
        p.appendChild(document.createElement('br'));//ajoute un saut de ligne au paragraphe
        
        secondes--;//decremente le nombre de secondes
    }   , 1000);


}


let button = document.querySelector('button');//selectionne le bouton
button.addEventListener('click', decompte);//ajoute un evenement click sur le bouton




// ############################################ Petit programme pour tester les evenements ############################################

let bouton = document.body.appendChild(document.createElement('button'));//ajoute un bouton au body
bouton.appendChild(document.createTextNode('Cacher'));//ajoute du texte au bouton
hidden = true;//initialise la variable isClicked a false
let paragraphe = document.body.appendChild(document.createElement('p'));
paragraphe.appendChild(document.createTextNode('Voici un paragraphe'));//ajoute du texte au paragraphe

bouton.addEventListener('click', () => {
    
    if(!hidden){//si la variable isClicked est egale a false
        bouton.removeChild(bouton.lastChild);//supprime le dernier enfant du bouton
        bouton.appendChild(document.createTextNode('Cacher'));//ajoute du texte au bouton
        
   //Affiche le paragraphe
        paragraphe.style.display = 'block';//affiche le paragraphe
    
        hidden = true;//change la valeur de isClicked a false
    }else{//sinon
           //cahcher le paragraphe
        paragraphe.style.display = 'none';//cache le paragraphe
        bouton.removeChild(bouton.lastChild);//supprime le dernier enfant du bouton
        bouton.appendChild(document.createTextNode('afficher'));//ajoute du texte au bouton
        
        hidden = false;//change la valeur de isClicked a true
    }
    
}   );


