console.log('Tablas');

const inputNumero = document.getElementById("number")
const inputLimite = document.getElementById("limit")
const boton = document.getElementById("generar-tabla")
const textarea = document.getElementById("result")

boton.addEventListener("click",function() {
    if(inputNumero.value.trim() && inputLimite.value.trim() != "") {
        // alert('hay valor')
        let numero = parseInt(inputNumero.value)
        let limite = parseInt(inputLimite.value)
        
        // creacion de tabla
        let resultado = ""
        for(let i = 0; i <= limite; i++) {
            resultado += `${numero} x ${i} = ${numero*i}\n`
        }
        
        // Mostrar el resultado
        textarea.value = resultado

        // inputLimite.value = ""
        // inputNumero.value = ""
    } else {
        alert("no hay valor")
    }
})



