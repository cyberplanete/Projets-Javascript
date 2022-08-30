let utilisateurs = new Map();


utilisateurs.set('Bill', {'nom': 'Gates', 'age': 23});


utilisateurs.set('Mark', {'nom': 'Zuckerberg', 'age': 23});

for (let [key, value] of utilisateurs) {
    console.log(key + ': ' + value.nom + ' ' + value.age);
}