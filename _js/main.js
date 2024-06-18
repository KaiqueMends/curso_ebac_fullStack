const form = document.getElementById("myForm")

function validaNumeros(numero1, numero2){
    return numero2 > numero1;
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

     // Obter os valores dos campos A e B
    var campoA = parseInt(document.getElementById('primeiro_numero').value);
    var campoB = parseInt(document.getElementById('segundo_numero').value);
    
     // Verificar se B é maior que A
    if (campoB > campoA) {
        showMessage(true);
    } else {
        showMessage(false);
    } });

function showMessage(valid) {
    var messageElement = document.getElementById('message');
    
    if (valid) {
        messageElement.textContent = 'Formulário válido! O número 2 é maior que o 1.';
        messageElement.classList.add('valid');
        messageElement.classList.remove('invalid');
    } else {
        messageElement.textContent = 'Formulário inválido! O número 2 precisa ser maior que 1.';
        messageElement.classList.add('invalid');
        messageElement.classList.remove('valid');
    }
    
    messageElement.style.display = 'block';

    console.log(validaNumeros(numero2.value, numero1.value))
}