$(document).ready(function(){
    // Ao submeter o formulário, adiciona uma nova tarefa
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        var tarefa = $('#taskInput').val().trim();
        
        if(tarefa !== "") {
        // Cria um novo <li> com a tarefa
        $('#taskList').append('<li>' + tarefa + '</li>');
        $('#taskInput').val('');
        }
    });
    
    // Evento de clique para marcar/desmarcar a tarefa concluída
    $('#taskList').on('click', 'li', function(){
        $(this).toggleClass('completed');
    });
    });