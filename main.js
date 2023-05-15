$(document).ready(function(){
    $('#novaTarefa').click(function(){
        $('form').slideDown()
    })
    $('#btnCancel').click(function(){
        $('form').slideUp()
    })
    $('form').on('submit', function(e){
        e.preventDefault()

        const inputTarefa = $('#inputTarefa').val()
        if (inputTarefa !== ''){
            let item = $('<li>').text(inputTarefa)
            $('#alterando').append(item)

            item.click(function(){
                $(this).toggleClass('checked')
            })
            $('#inputTarefa').val('')
        }
    })
})
