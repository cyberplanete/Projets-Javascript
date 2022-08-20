let i = 1;

while (i < 5) 
{
    console.log(i + 1);
    i++;
}

let prenom;
do {
     prenom = prompt('Quel est votre prenom ?');
} while (prenom == "" || prenom == null);

alert('Bonjour ' + prenom);


for (let i = 1 ; i < 5; i++) {
    
    console.log(i + 'toto');
}