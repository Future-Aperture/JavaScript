function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(134, 214, 134)'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
    }
}