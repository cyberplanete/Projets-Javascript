//file:///media/MesDocs/Developpement/MesProjetsDev/Projets%20Javascript/MemoCheat/DOM%20Document%20Object%20Model/Supprimer%20des%20elements/index.html

//Supprimer des éléments
let a = document.querySelector('a');//Creation d'un header
let button = document.querySelector('button');

backgroundColor = () => {           //fonction pour changer la couleur du body en blanc         
    document.body.style.backgroundColor = 'white';//change la couleur du body en blanc
};

a.addEventListener('click', (e) =>{


        console.log(e);//affiche l'evenement
        console.log(e.target);//affiche l'element cible
        console.log(e.target.href);//affiche l'element cible
        

}   );

button.addEventListener('mouseover', (e) => {
    document.body.style.backgroundColor = 'red';//change la couleur du body en rouge
    
}   );

button.addEventListener('mouseout', backgroundColor );

button.addEventListener('mouseout', (e) => {
    
    document.body.style.fontFamily = 'Arial'; //change la police du body en Arial
    document.body.style.fontSize = '20px'; //change la taille de la police du body en 20px
    document.body.style.fontWeight = 'bold'; //change la taille de la police du body en gras
    document.body.style.font = 'red'; //change la couleur du body en rouge
    document.body.style.textAlign = 'center'; //change l'alignement du texte du body au centre

}   );




button.removeEventListener('mouseout', backgroundColor);//supprime l'evenement mouseout