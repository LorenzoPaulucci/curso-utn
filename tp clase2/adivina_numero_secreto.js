const {crear_numero_aleatorio} = require("./numero_aleatorio");
const readlineSync = require("readline-sync");
let numero_aleatorio = crear_numero_aleatorio();


while(true){
    let numero_ingresado = readlineSync.question("Ingrese un numero del 1 al 100: ");
    
    if (/^\d+$/.test(numero_ingresado)){
        let numero_entero = parseInt(numero_ingresado);
        
        if(numero_entero > 100 || numero_entero < 1){
            console.log("El numero ingresado es invalido");
        }
        else{
            if(numero_entero == numero_aleatorio){
                console.log("Felicitaciones adivinaste el numero");
                break;
            }
            else{
                console.log("Incorrecto, intentalo otra vez");
            }
        }
    }
    else{
        console.log("Ingrese UNICAMENTE numeros")
    }
    
    
}
