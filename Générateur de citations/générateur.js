//file:///media/MesDocs/Developpement/MesProjetsDev/Projets%20Javascript/MemoCheat/DOM%20Document%20Object%20Model/Supprimer%20des%20elements/index.html

//Supprimer des éléments
let a = document.querySelector('a');//Creation d'un header
let button = document.querySelector('button');

a.onclick = function(){
    if(confirm('Voulez-vous supprimer cet élément ?')){
       // a.remove();
        location.href = 'https://www.google.com';
    }
};



//Autre methode
button.onmouseover = () => {
    document.body.style.backgroundColor = 'red';//change la couleur du body en rouge
};

button.onmouseout = () => {
    document.body.style.backgroundColor = 'white';//change la couleur du body en blanc
};













