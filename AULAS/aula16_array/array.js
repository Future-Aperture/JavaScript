lista = [1, 2, 3, 4, 5]

// for (let c=0; c < lista.length;c++) {
//     console.log(`A posição é ${lista[c]}° `)
// }

// for (let pos in lista) {
//     console.log(`A posição ${pos} tem o valor de ${lista[pos]}`)
// }

let procurarNumero = lista.indexOf(8)

if (procurarNumero == -1) {
    console.log(`Não consegui encontrar o valor`)
}
else {
    console.log(`O número está na posição ${procurarNumero}`)
}

