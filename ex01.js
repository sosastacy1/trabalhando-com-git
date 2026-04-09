const readline = require("readline-sync")

// Seu objetivo é criar um programa que solicite ao usuário as seguintes informações:
// Nome do aluno
// Curso que está matriculado
// Idade


// Solicita os dados dos usuários
let nome = readline.question("Informe seu nome: ")
let curso = readline.question("Informe o curso: ")
let idade = readline.questionInt("Informe sua idade: ")

console.log("========== SISTEMA DE CADASTRO ============")
console.log(`Nome do usuário: ${nome}`)
console.log(`Curso do usuário: ${curso}`)
console.log(`Idade do usuário: ${idade}`)

