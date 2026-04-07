const readline = require('readline-sync')

let freteGrátis = 100

let valordaCompra = readline.questionFloat("Informe o valor da compra: ")

let diferenca = freteGrátis - valordaCompra

if(valordaCompra > freteGrátis){
    console.log("Você ganha o frete grátis")
}else{
    console.log("Você não recebe o frete grátis")
    console.log(`Falta ${diferenca} reais para ganhar`)
}