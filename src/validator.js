
const validator = {
  isValid: (number) => {
    let fragmentar = number.split("")
    fragmentar.reverse()
    let suma1 = 0;
    let suma2 = 0;
    let sumaTotal = 0;
    for (let i = 0; i < fragmentar.length; i++) {
      let NumeroElegido = fragmentar[i]
      if (i % 2 != 0){
        NumeroElegido = fragmentar[i]*2 ;
        if (NumeroElegido > 9) {
          let sumaDigitos = NumeroElegido - 9 ;
        suma1 += sumaDigitos}
        else {
        suma1 += NumeroElegido}}
      else{
        suma2 += Number(NumeroElegido)
      }
    sumaTotal = suma1 + suma2}
    if (sumaTotal % 10 == 0){
      return true
    }
    else {
      return false}
  },
  maskify:(number) => {
    let resultado = "";
    //cadena
    for (let i = 0; i < number.length; i++){
      if (i < number.length-4){
        resultado = resultado+ "#"
        //por numero sale un michi
      } 
      else {
        resultado = resultado+ number[i]
      }
    }
      return resultado
     }
    }

export default validator;
