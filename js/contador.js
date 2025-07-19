console.log('Contador');

const aumentar = document.getElementById("aumentar")
const disminuir = document.getElementById("disminuir")
const contador = document.getElementById("counter")

let valor = parseInt(contador.textContent)
// console.log(valor);



aumentar.addEventListener("click", function () {
    valor++
    contador.textContent = valor;
})

disminuir.addEventListener("click", () => {
    valor--
    contador.textContent = valor;
})