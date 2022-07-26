let consommable = "carotte";

switch (consommable) {
    case "banane":
        console.log('ceci est un fruit');
        break;
    case "courgette":
    case "tomate"        :
    case "carotte":
        console.log('ceci est un légume');
            break;
    default:
        console.log("ceci n'est pas un légume, ni un fruit");
        break;
}