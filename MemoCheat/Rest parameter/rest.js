function addition(...nombres) // rest parameter
{
    let total = 0;
    for (let nombre of nombres) {// on parcourt le tableau
        total += nombre;// on additionne les nombres
    }
    return total;// on retourne le total
}


console.log(addition(1, 2, 3, 4, 5)) ; // 15