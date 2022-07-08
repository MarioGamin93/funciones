
const rojo = document.getElementById('a');
const verde = document.getElementById('s');
const amarillo = document.getElementById('d');
const azul = document.getElementById('f');
const body = document.querySelector("body");

document.addEventListener('keydown', (e) =>{
    if(e.key == 'a'){
        console.log('haz presionado la tecla a');
        rojo.style.backgroundColor = 'red';
    }else if(e.key == 's'){
        console.log('haz presionado la tecla s');
        verde.style.backgroundColor = 'green';
    }else if(e.key == 'd'){
        console.log('haz presionado la tecla r');
        amarillo.style.backgroundColor = 'yellow';
    }else if(e.key == 'f'){
        console.log('haz presionado la tecla f');
        azul.style.backgroundColor = 'blue';
    }
}) 

const pintar = () =>{
    rojo.addEventListener('click', () =>{
        rojo.style.backgroundColor = 'red';
    })
    verde.addEventListener('click', () =>{
        verde.style.backgroundColor = 'green';
    })
    amarillo.addEventListener('click', () =>{
        amarillo.style.backgroundColor = 'yellow';
    })
    azul.addEventListener('click', () =>{
        azul.style.backgroundColor = 'blue';
        pintar('rojo');
    })
}

pintar('rojo');
pintar('verde');
pintar('amarillo');
pintar('azul');




