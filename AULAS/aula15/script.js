function verificar() {
    // variaveis
    var inicio = document.getElementById('inicio')
    var final = document.getElementById('final')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')

    // caso nao tenha nenhum valor
    if (inicio.value.length == 0 ||final.value.length == 0 ||passo.value.length == 0) {
        alert('[ERROR] Está faltando dados! Tente novamente.')
    }
    
    res.innerHTML = 'Contando:'

    // variaveis
    var i = Number(inicio.value)
    var f = Number(final.value)
    var p = Number(passo.value)

    
    // calculo
    for (var c = i; c <= f; c += p)
    res.innerHTML += `${c}\n`
    
    
}