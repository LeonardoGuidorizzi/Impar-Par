/*************************************************************************
 * Objetivo: Arquivo que contem todas as funcoes para calculos matematicos
 * Autor: Leonardo Moreira
 * Data Criacao: 21/08/2022
 * Versao: 1.0
 ************************************************************************/

const { filterEven, filterOdd, generateArray } = require('./modules/mudar')
var readline = require('readline')
const { exit } = require('process')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Entrada de Dados

entradaDados.question('Digite o numero inicial \n', function (number) {
    let init = number
    if(init < 0 ||init < 500){
        console.log('Digite um numero entre 0 e 100')
    }
    entradaDados.question('Digite o numero final \n', function(number){
        let end = number
        if(end < 100 || end < 1000){
            console.log('Coloque um numero entre 100 e 1000')
        }
        const array = generateArray(init, end)
        const evens = filterEven(array)
        const odds = filterOdd(array)
        entradaDados.question('Digite se voce quer os numeros impares ou pares ou os dois: digitando "par" "impar" "ambos"\n', function(text){
            const choose = text.toLowerCase()
           if(choose == 'par'){
                console.log(evens)
                console.log (`O numero de elementos pares que tem entre ${init} e ${end} é ${evens.length}`)
           }else if (choose == 'impar'){
                console.log(odds)
                console.log (`O numero de elementos impares que tem entre ${init} e ${end} é ${odds.length}`)
           }else if (choose == 'ambos')
                console.log(evens, odds)
        })
    })

})
