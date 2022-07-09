//* Ejemplo
function example(a, b, c){
    return a+b+c
}

//* Transformacion a una funcion de expresión

const suma = function(a, b, c){
    return a+b+c
}

console.log(suma(1,2,3));


const suma2 = function(a, b, c){
    console.log(a+b+c)
}

suma2(1,2,3);
suma2(5,10,15);
