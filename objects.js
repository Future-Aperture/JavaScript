
// objects study

var getName = function() {
    console.log(this.name)
}

let info = {
    name: "Theo",
    age: "15",
    getName: getName
}

let carros = {
    name: "Gol",
    marca: "VW",
    getName: getName
}


info.getName()
carros.getName()
