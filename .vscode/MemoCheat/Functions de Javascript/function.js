
let age;

askAge();
function askAge()
{
   age = prompt("Quel est votre age?");
  
}

if (age != null || ! age.isEmpty()) {
    alert("Vous avez " + age + "ans");
} else {
    alert("Veuillez entrer votre age!!");
}
