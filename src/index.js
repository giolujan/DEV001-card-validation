import validator from './validator.js';

const tarjeta = document.querySelector('#tarjeta');
const btnFormulario = document.querySelector('#btnFormulario');
const formulario = document.querySelector('#formulario-de-tarjeta')

// mosntrarfrente si tiene la clase desactivada
const mostrarFrente = () => {
    if (tarjeta.classList.contains('active')) {
        tarjeta.classList.remove('active');
    }
};

// mosntrartrasera si tiene la clase desactivada
const mostrartrasera = () => {
    if (!tarjeta.classList.contains('active')) {
        tarjeta.classList.add('active');
    }
};


// abrir el formulario
btnFormulario.addEventListener('click', () => {
    btnFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

//rotar la tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

// select del mes  generado dinamicamente
for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    option.value = i;
    // innertext el texto dentro de la variable
    option.innerText = i;
    formulario.selectMes.appendChild(option);
}


// select del año generado dinamicamente
// metodo que obtiene el año actual
const actualYear = new Date().getFullYear();

for (let i = actualYear; i <= actualYear + 8; i++) {
    let optionYear = document.createElement("option");
    optionYear.value = i;
    optionYear.innerText = i;
    formulario.selectYear.appendChild(optionYear);
}

const tarjetaName = document.querySelector('#tarjeta .nombre1')
const inputTitular = document.getElementById('titular');
const firmatarjeta = document.querySelector('#tarjeta .firma')

inputTitular.addEventListener("keyup", (e) => {
    let valueInput = e.target.value;
    formulario.titular.value = valueInput.replace(/[0-9]/g, '');
    tarjetaName.textContent = valueInput;
    firmatarjeta.textContent = valueInput;

    if (valueInput == '') {
        tarjetaName.textContent = 'Jhon Doe';
    }
    mostrarFrente();
})

const tarjetaNumber = document.querySelector('#tarjeta .numero1')
const inputNumber = document.getElementById('numero');

inputNumber.addEventListener("keyup", (e) => {
    let valueInput = e.target.value;
    formulario.numero.value = valueInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
        // Ponemos espacio cada cutro numeros
        //.replace(/([0-9]{4})/g, '$1 ')
        // Elimina el ultimo espaciado
        .trim();
    tarjetaNumber.textContent = valueInput;
    if (valueInput == '') {
        tarjetaNumber.textContent = "#### #### #### ####";
    }

    mostrarFrente();
})

// seleccion del año y el mes 
const year = document.getElementById('selectYear');
const yeartarjeta = document.querySelector('#tarjeta .year');
const week = document.getElementById('selectMes');
const weektarjeta = document.querySelector('#tarjeta .mes');

year.addEventListener('change', (e) => {
    yeartarjeta.textContent = e.target.value;
    mostrarFrente();
})

week.addEventListener('change', (e) => {
    weektarjeta.textContent = e.target.value;
    mostrarFrente();
})

// seleccion del ccv
const inputCvv = document.querySelector('.cvv-input');
const tarjetaccv = document.querySelector('#tarjeta .ccv')

inputCvv.addEventListener("keyup", (e) => {
    let valueInput = e.target.value;
    inputCvv.value = valueInput
        // Eliminamos espacios en blanco
        .replace(/\s/g, '')
        // Eliminar las letras
        .replace(/\D/g, '')
    tarjetaccv.textContent = valueInput;
    mostrartrasera();
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
