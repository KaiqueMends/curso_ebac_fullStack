document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores dos campos de entrada
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Cria uma nova linha na tabela
    const table = document.getElementById('contactTable');
    const newRow = table.insertRow();

    // Adiciona células com os valores do contato
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = name;
    cell2.textContent = phone;

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});