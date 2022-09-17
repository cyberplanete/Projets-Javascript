let utilisateurs = new Map();// Création d'une map


utilisateurs.set('Bill', {'nom': 'Gates', 'age': 23});


utilisateurs.set('Mark', {'nom': 'Zuckerberg', 'age': 23});


for (let [key, value] of utilisateurs) // On parcourt la map
{
    console.log(key + ': ' + value.nom + ' ' + value.age);
}