import { stringToObject } from "../../src/utils/stringToObject"

describe('#stringToObject', () => {

  describe('Deve retornar Throw', () => {

    test('Testa propriedades repetidas', () => {
      const testeString = 'type=solid, name="github", type= "outline"';
      expect(() => {stringToObject(testeString)}).toThrow()
    })

    test('Testa string em o operador = para atribuir um value', () => {
      const testeString = 'github';
      expect(() => {stringToObject(testeString)}).toThrow()
    })
  })

  test('Testa string com somente uma propriedade', () => {
    const testeString = 'name=github"';
    expect(stringToObject(testeString)).toStrictEqual({name: 'github'})
  })
    

})