var agora = new Date()
data = agora.getDay() // dia de hoje
dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ] // lista dos dias da semana
diaHoje = dias[data] // dia de hoje

console.log(`O dia de hoje é ${diaHoje}`)