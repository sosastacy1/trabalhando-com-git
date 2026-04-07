const readline = require('readline-sync')

let idade = readline.questionInt("Informe sua idade: ")

console.log("======= ENTRADA FESTINHA +18 ========")
if(idade >= 18){
    console.log("Você pode entrar no evento!")
}else{
    console.log("Sai daqui criança!")   
}