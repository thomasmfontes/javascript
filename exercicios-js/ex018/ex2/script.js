function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
    // var hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha.png'
        msg2.innerHTML = 'Bom dia!'
        document.body.style.background = '#b9b58f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.png'
        msg2.innerHTML = 'Boa tarde!'
        document.body.style.background = '#c48343'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.png'
        msg2.innerHTML = 'Boa noite!'
        document.body.style.background = '#1f1821'
    }
}


