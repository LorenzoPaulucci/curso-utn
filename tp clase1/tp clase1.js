function calcularPromedio(numeros){
    let suma = 0;  
    for (numero in numeros){
        suma += numeros[numero];
    }
    
    let promedio = suma/(numeros.length);
    return promedio;
}

let numeros = [2,4,5,20,30,26];
console.log(calcularPromedio(numeros));