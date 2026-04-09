const readline = require('readline-sync')

let livroTotal = 300
        console.log("------------------")
        console.log("|   BIBLIOTECA   |")
        console.log("------------------")

let paginasLidas = readline.questionInt ("Informe quantas paginas voce leu: ")

let diferenca =  livroTotal - paginasLidas

console.log("----------RESULTADO---------")
       console.log(`Você já leu ${Math.round((paginasLidas/livroTotal)* 100)}% do livro, faltam ${diferenca} páginas para terminar!`)
