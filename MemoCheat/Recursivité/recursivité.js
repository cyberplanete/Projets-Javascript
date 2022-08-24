var addition=0;
let number;
function somme(number)
{   
    if(number == 1)
    {
        addition += parseInt(number) ;
        alert("La somme est: " + addition);
    }else 
    {  addition += parseInt(number) ;
    somme(number-1);
}
  


}

number = prompt("Donne un chiffre entre 1 et 10 ?");
somme(number);