/*************************************************************************
 * Objetivo: Arquivo que contem todas as funcoes para calculos matematicos
 * Autor: Leonardo Moreira
 * Data Criacao: 21/08/2022
 * Versao: 1.0
 ************************************************************************/

function filterEven(number) {
    const result = number.filter((value) => {
        return value % 2 == 0
    })


    return result

}
function generateArray(init, end) {
    let array = []
    for (let i = init; i <= end; i++) {
        array.push(i) 
    }
    return array
}


function filterOdd(number) {
    const result = number.filter((value) => {
        return value % 2 == !0


    })
    return result
}

module.exports = {filterEven, filterOdd, generateArray}
