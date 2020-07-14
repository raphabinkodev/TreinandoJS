let button = document.getElementById('button')
let reset = document.getElementById('reset')

button.addEventListener("click", exibirNumero)
reset.addEventListener("click", resetarTela)

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

function resetarTela() {
    let mensagem = document.querySelector('div.mensagem')
    mensagem.innerHTML = ''
}