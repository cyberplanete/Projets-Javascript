//file:///media/MesDocs/Developpement/MesProjetsDev/Projets%20Javascript/MemoCheat/DOM%20Document%20Object%20Model/Supprimer%20des%20elements/index.html


let article = document.querySelector('article');//Creation d'un header
let h1 = document.querySelector('h1');


article.addEventListener('click', (e) => {//ajoute un evenement click sur l'element article

    console.log(e);//affiche l'evenement
   alert('Vous avez cliqué sur l\'article');//affiche un message d'alerte
}   );


h1.addEventListener('click', (e) => {//ajoute un evenement click sur l'element h1
    alert('Vous avez cliqué sur le h1');//affiche un message d'alerte
    e.stopPropagation();//arrete la propagation de l'evenement
}   );