function atualizar() {
    let data = new Date() // from datetime import kjkj
    let dia = data.getDate() // pega o dia
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let res = document.getElementById('circulo') // variavel da resposta
    let hora = data.getHours() // pega a hora
    let minuto = data.getMinutes() // pega o minuto
    res.innerHTML = `Dia: ${dia}//${mes}//${ano}` + ' ' + `Hora: ${hora}:${minuto}`
}   