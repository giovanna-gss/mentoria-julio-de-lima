/*function linguagemDosAnimais(animal) {
    if (animal == 'cachorro')
        return 'au au'
    else if (animal == 'gato')
        return 'miau'
    else if (animal == 'vaca')
        return 'muuu'
    else
        return 'Informe gato, cachorro ou vaca'
}
*/
function comunicacaoDosAnimais(animal){
    if (animal == 'cachorro'){
        return 'au au'
    } else if (animal == 'gato'){
        return 'miau'
    } else {
        return 'inválido'
    }
    
}

module.exports = {
    comunicacaoDosAnimais
}