var data = new Date
var hora = data.getHours()
var minuto = data.getMinutes()

var horario = (`\nhorário: ${hora}:${minuto}`)

console.log(horario) // diz o horário

if (hora < 12) { // bom dia
    console.log('\nBom Dia!\n')
}
else if (hora > 12 && hora < 18) {
    console.log('\nBoa Tarde!\n')
}
else {
    console.log('\nBoa Noite!')
}