const { comunicacaoDosAnimais } = require('../src/comunicacao')
const assert = require('node:assert')
//  const {strictEqual} = require('node:assert')
// E na linha do strictEqual não tem assert.

//Function ou arrow function
//function()
//() => 
//São funções anônimas
describe('Comunicação', () => {
    //Teste que quando eu escolho cachorro eu recebo au au
    //Baixa a biblioteca do mocha: npm i mocha
    it('Quando informar cachorro deve retornar au au', function (){
        //Teste triplo A (Arrange, Act, Assert)
        //Arrange: Preparar
        //Preparar tudo que preciso para depois usar a função
        const animal = 'cachorro'

        //Act: Agir
        //Usar a função que quero testar
        //Toda vez que a função tem um return faz um const e a função
        const comunicacao = comunicacaoDosAnimais(animal)

        //Assert: Verificação ou Checking
        //Para isso precisa usar uma biblioteca chamada assert que permite passar uma validação
        assert.strictEqual(comunicacao, 'au au')
            //Compara o primeiro parâmetro com o segundo que é o que espera
    })

    it('Deve retornar miau quando o animal for gato', () => {
        const animal = 'gato'
        const comunicacao = comunicacaoDosAnimais(animal)
        assert.strictEqual(comunicacao, 'miau')
    })

    it.skip('Deve retornar mensagem inválida quando informar animal diferente de gato ou chachorro', () => {
        const animal = 'papagaio'
        const comunicacao = comunicacaoDosAnimais(animal)
        assert.strictEqual(comunicacao, 'inválido')
    })
})