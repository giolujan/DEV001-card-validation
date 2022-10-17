import validator from './validator.js';

//console.log(validator);

const buttonVerify = document.getElementById('boton')
buttonVerify.addEventListener('click',(e) => {
   e.preventDefault()
   //evitar refrescar la pag
    const number = document.getElementById('numero');
    //document.getElementById('numero') atajo de busqueda
    if (validator.isValid(number.value)){
        alert("tarjeta valida")}
        else {
            alert("tarjeta invalida")}
            // no requiere condicionante porq es un true or false
    const numeromichificado = validator.maskify(number.value);
    console.log(numeromichificado)
    number.value = numeromichificado
    // 
})
