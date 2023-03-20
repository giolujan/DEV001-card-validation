import validator from './validator.js';

const tarjeta = document.querySelector('#tarjeta');
let number = 0
tarjeta.addEventListener('click', (e) => {
    //tarjeta.classList.toggle('active');
    e.preventDefault();
    //console.log(e);
    if (number === 0) {
        tarjeta.classList.add('active');
        number = 1;
        console.log(number);
    }
    else {
        tarjeta.classList.remove('active')
        number = 0
        console.log(number);
    }
});



const buttonVerify = document.getElementById('boton')
buttonVerify.addEventListener('click', (e) => {
    e.preventDefault()
    //evitar refrescar la pag
    const number = document.getElementById('numero');
    if (validator.isValid(number.value)) {
        alert("tarjeta valida")
    }
    else {
        alert("tarjeta invalida")
    }
    // no requiere condicionante porq es un true or false
    const numeromichificado = validator.maskify(number.value);
    //console.log(numeromichificado)
    number.value = numeromichificado
    // 
})
