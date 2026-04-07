const readline = require('readline-sync')

let paginasTotal = 300

console.log("------------------")
console.log("|   BIBLIOTECA   |")
console.log("------------------")

let paginasLidas = readline.questionInt("Informe quantas paginas voce leu: ")

let diferenca = paginasTotal - paginasLidas

console.log("----------RESULTADO---------")
console.log(`Você já leu ${Math.round((paginasTotal/paginasLidas) * 100)}% do livro, faltam ${diferenca} páginas para completar sua leitura!`)
