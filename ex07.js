const readline = require('readline-sync')

let nota = readline.questionFloat("Escreva a nota que você tirou: ")

console.log("======== RESULTADO =========")

if(nota >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}