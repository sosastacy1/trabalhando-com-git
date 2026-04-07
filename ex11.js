const readline = require('readline-sync')

let tamanhoTotal = 20
let qtdBaixado = readline.questionInt("Quantos 6B foram baixados?: ")

let percentual = (qtdBaixado / tamanhoTotal) * 100

console.log(percentual)
