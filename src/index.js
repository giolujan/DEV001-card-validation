import validator from './validator.js';

const tarjeta = document.querySelector('#tarjeta');
const btnFormulario = document.querySelector('#btnFormulario');
const formulario = document.querySelector('#formulario-de-tarjeta')

// abrir el formulario
btnFormulario.addEventListener('click',() => {
    btnFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

//rotar la tarjeta
//let number = 0
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
    /*e.preventDefault();
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
    }*/
});

// select del mes  generado dinamicamente
for(let i= 1; i <= 12; i++){
    let option = document.createElement("option");
    option.value = i;
    // innertext el texto dentro de la variable
    option.innerText = i;
    formulario.selectMes.appendChild(option);
}


// select del año generado dinamicamente
// metodo que obtiene el año actual
const actualYear = new Date().getFullYear();

for(let i= actualYear; i <= actualYear + 8; i++){
    let optionYear = document.createElement("option");
    optionYear.value = i;
    optionYear.innerText = i;
    formulario.selectYear.appendChild(optionYear);
}

const inputNumber = document.getElementById('titular')
console.log(inputNumber)
inputNumber.addEventListener('Keyup', () => {
    console.log("aqui")
  /*  let valueInput = e.target.value;
     formulario.numero.value = valueInput
    // Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();
    console.log(formulario.numero.value) */
})


const buttonVerify = document.getElementById('btn-enviar')
buttonVerify.addEventListener('click', (e) => {
    e.preventDefault()
    //evitar refrescar la pag
    let number = document.getElementById('numero');
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
