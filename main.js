$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#btnCancelar').click(function (e) { 
        $('form').slideUp();
        
    });

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoImg = $('#urlAddImg').val();
        const novaImg = $('<li style="display: none"></li>');
        $(`<img src="${enderecoImg}" />`).appendTo(novaImg);
        $(`<div class="overlay-img-li">
                <a href="${enderecoImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novaImg);
        $(novaImg).appendTo('ul');
        $(novaImg).fadeIn();
        $('#urlAddImg').val('')
    })

    
})
