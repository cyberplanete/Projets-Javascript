let chien = { race: 'Shiba', poil: 'Court', aboyer:'whouaf whouaf' };

let aboyer = () => chien.aboyer;

console.log(aboyer());


let magicien = { attaquer: ()=> console.log('La magicien lance un sort')};

let guerrier = { attaquer: ()=> console.log('Le guerrier prend une epee')};

guerrier.attaquer();
magicien.attaquer();