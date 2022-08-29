
console.log("####################################monTableau2D##################################");
let monTableau1 = new Array("un","deux","trois");
let monTableau2 =  Array("un","deux","trois");

let monTableau = ["un","deux","trois"];
//Récuperer les donner de mon tableau
console.log("#Afficher la premiere lettre de UN #");
console.log(monTableau[0][0]); // u
console.log("#Afficher le mot UN #");
console.log(monTableau[0]); // un
console.log("#Afficher l'index du mot UN #");
//Afficher l'indexOf mon tableau
console.log(monTableau.indexOf()); 
//Concatener mon tableau
console.log("Concatener mon tableau avec join() #");
console.log(monTableau.join('')); 
console.log("Concatener mon tableau avec join() separé par  - #");
console.log(monTableau.join(' - ')); 

let monTableau2D_2 = new Array(Array('Mark', 'Jeff', 'Bill') , Array('Zuckerberb', 'Bezos','Gates'));
let monTableau2D = [['Mark', 'Jeff', 'Bill' ],['Zuckerberb', 'Bezos','Gates']];
console.log("####################################monTableau2D##################################");
console.log("#Récuperation des données#");

//Récuperer les donner de mon tableau
console.log(monTableau2D[0][1] + ' ' + monTableau2D[1][1]); // Jeff Bezos
console.log("#Ajout de toto#");
//Ajouter des données à mon tableaux
monTableau2D[0].push('toto');
console.log(monTableau2D);
console.log("#Ajout de titi avec push() #");
monTableau2D[1].push('titi');
console.log(monTableau2D);

//Ajouter des données à mon tableaux au debut
console.log("#Ajout de auDebut avec unshift#");
monTableau2D[1].unshift('auDebut');
console.log(monTableau2D);
//Retirer des données à mon tableaux au debut
console.log("#retrait de auDebut avec shift#");
monTableau2D[1].shift();
console.log(monTableau2D);
//Retirer des données à mon tableaux a la fin
console.log("#retrait de titi avec pop#");
monTableau2D[1].pop();
console.log(monTableau2D);
//Concatener mon tableau
console.log("Concatener mon tableau avec join() separé par  - *");
console.log(monTableau2D[0].join(' * ')); 
console.log(monTableau2D);

console.log("####################################monTableauAssociatif##################################");
let monTableauAssociatif = {'Prénom' : 'Mark', 'Nom' : 'Zuckerberb', 'Poste' : 'PDG de Facebook' };
//Récuperer les donner de mon tableau
console.log("#Récuperer des données#");
console.log(monTableauAssociatif['Poste']);
console.log("#Ajout de la nationalité#");
//Ajouter des données à mon tableaux
monTableauAssociatif['Nationalité'] = 'Américaine';
console.log(monTableauAssociatif);
//Retirer des données à mon tableauAssociatif
console.log("#Retrait du poste avec delete ");
//supprimer des données à mon tableaux
delete(monTableauAssociatif.Poste);
console.log(monTableauAssociatif);


//Utilisation de splice
console.log("#################################### MonTableau2D - SPLICE ##################################");
console.log('Suppression de Mark');
console.log(monTableau2D);
monTableau2D[0].splice(0,1);
console.log(monTableau2D);
console.log("Ajout d'une liste de mot comme troisième tableau");
monTableau2D.splice(0,0,['toto','titi']);
console.log(monTableau2D);

let monTirageDuLoto = [01, 25, 33, 40, 48, 08];
monTirageDuLoto.splice(0, 2, 48, 54);
console.log(monTirageDuLoto);