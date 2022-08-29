
let age;

askAge();
function askAge() {
    age = prompt("Quel est votre age?");
    //    age = parseInt(age);
    //    age = parseFloat(age);
    //    age = Number(age);

}

if (age != null || !age.isEmpty()) {
    alert("Vous avez " + age + "ans");
} else {
    alert("Veuillez entrer votre age!!");
}


let maFonction = function (parametre) {
    return parametre;
};
conqole.log(maFonction(age));