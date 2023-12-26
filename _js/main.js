const form = document.getElementById("form_deposito")

function validaNumeros(numero1, numero2){
    return numero1 > numero2;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const numero1 = document.getElementById('primeiro_numero');
    const numero2 = document.getElementById('segundo_numero');
    const msgSucesso = `O número <b>${numero1.value}</b> é maior que <b>${numero2.value}</b>`;

    console.log(numero1.value)
    console.log(numero2.value)
    if (validaNumeros(numero1.value, numero2.value)){
        const containerMsgSucesso = document.querySelector('.success_message');
        containerMsgSucesso.innerHTML = msgSucesso;
        containerMsgSucesso.style.display = 'block'
        alert("tudo certo");
    } else { alert("O número 1 deve ser maior que o número 2!")}

    console.log(validaNumeros(numero1.value, numero2.value))
})
