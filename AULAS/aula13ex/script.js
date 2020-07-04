function verificar() {
    // ano atual
    var data = new Date()
    var ano = data.getFullYear()

    var fano = document.getElementById('ano')
    var res = document.getElementById('res')

    // caso o ano nao seja nada ou maior que o atual
    if (fano.value.length == 0 || fano.value > ano || fano.value == ano) {
        window.alert('[ERROR] Tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) // idade
        var img = document.createElement('img') // cria um id pra imagem
        img.setAttribute('id', 'foto') // seta o id da imagem para "foto"
        
        var genero = ''

        if (fsex[0].checked) { // checa se é macho opressor
            genero = 'homem'
            if (idade > 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'homem_crianca.png')
            }
            else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'homem_jovem.png')    
            }
            else if (idade <= 40){
                //adulto
                img.setAttribute('src', 'homem_adulto.png')
            }
            else {
                //veio
                img.setAttribute('src', 'homem_velho.png')
            }

        } 
        else if (fsex[1].checked){ // checa se é cuie
            genero = 'mulher'
            if (idade > 0 && idade < 10) {
                // crianca
                img.setAttribute('src', 'mulher_crianca.png')
            }
            else if (idade <= 20) {
                //jovem
                img.setAttribute('src', 'mulher_jovem.png')    
            }
            else if (idade <= 40){
                //adulto
                img.setAttribute('src', 'mulher_adulta.png')
            }
            else {
                //veio
                img.setAttribute('src', 'mulher_velho.png')
            }
            
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}