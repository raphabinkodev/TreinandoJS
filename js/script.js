let button = document.querySelector("#button")
let button2 = document.querySelector("#button2")
let reset = document.getElementById('reset')
let reset2 = document.querySelector('#reset2')

button.addEventListener("click", exibirNumero)
button2.addEventListener("click", transformarEmCentimetro)
reset.addEventListener("click", resetarTela)
reset2.addEventListener("click", resetarTela)

function exibirNumero() {
    let mensagem = document.querySelector('div.mensagem')
    let pegarNumero = document.getElementById('number')
    let valor = pegarNumero.value
    if(valor == null || valor == ""){
        mensagem.innerHTML = `<p>Verifique o número digitado!</p>`
        pegarNumero.value = ''
    }else if ( valor >= 0) { 
        mensagem.innerHTML = `<p>O número descrito foi ${valor}!</p>`
        pegarNumero.value = ''
    }else {
        mensagem.innerHTML = `<p>Valor inválido! Permitidos apenas número igual ou superior a 0!</p>`
        pegarNumero.value = ''
    }
}

function transformarEmCentimetro() {
    let mensagem2 = document.querySelector('div.mensagem2')
    let pegarMetros = document.getElementById('metros')
    let valorInput = pegarMetros.value
    let valorCentimetro = valorInput * 100

    if (valorInput == null || valorInput == "") {
        mensagem2.innerHTML = `<p>Valor inválido!</p>`
        pegarMetros.value = ''
    } else if (valorInput > 0) {
        mensagem2.innerHTML = `<p> ${valorInput}m é equivalente à ${valorCentimetro}cm</p>`
        pegarMetros.value = ''
    } else {
        mensagem2.innerHTML = `<p>Valor inválido! Permitidos apenas número superior a 0</p>`
        pegarMetros.value = ''
    }
}

function resetarTela() {
    let mensagem = document.querySelector('div.mensagem')
    let mensagem2 = document.querySelector('div.mensagem2')
    mensagem.innerHTML = ''
    mensagem2.innerHTML = ''
}