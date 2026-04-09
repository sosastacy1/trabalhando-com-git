const readline = require('readline-sync')

let armazenamento = 20
let qtdBaixado = readline.questionInt("Quantos 6B foram baixados?: ")

let percentual = (qtdBaixado - armazenamento)

console.log (`Você tem ${Math.round((qtdBaixado / armazenamento)* 100)}% do armazenamento`)