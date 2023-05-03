const button = document.getElementById('btn')

button.addEventListener('click', validate)

function validate(e){
    e.preventDefault()
    
    const numberA = document.getElementById('numberA')
    const numberB = document.getElementById('numberB')
    const mensagemOk = 'PERFEITO!'

    if (numberA.value >= numberB.value){
        alert('Campo A deve ser menor que o campo B.')
    } else {
        alert('Tudo certo! Campo B é maior que o Campo A!')
        const ContainerMensagemOk = document.querySelector('.success')
        ContainerMensagemOk.innerHTML = mensagemOk
        ContainerMensagemOk.style.display = 'block'

        numberA.value = ''
        numberB.value = ''
    }
}
