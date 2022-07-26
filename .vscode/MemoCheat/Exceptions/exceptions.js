

try  {
    alert(hello);
} catch (error){
    console.log('erreur détectée:  ' +  error.stack);
    console.log('erreur détectée:  ' +  error.name);
    console.log('erreur détectée:  ' +  error.message);

}


try  {
    let recompense = prompt("choisissez une récompense: épée, arc, haches ");
    let degats;
    switch (recompense) {
        case "épée":
            degats = 40;
            break;
        case "arc":
            degats = 30;
            break;
        case "hache":
            degats = 20;
            break;
        default:
            throw new Error('Vous ne pouvez pas tricher');
           
    }
    alert('Vous avez choisi :' + recompense + '('+ degats + 'degats)');

} catch (error){
    alert(error);


}finally { alert ('Fin du programme');}