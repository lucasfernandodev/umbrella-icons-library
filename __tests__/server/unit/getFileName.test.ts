import { getFilename } from "../../../src/services/figma-exports/getFileName";

describe('#getFilename', () => {

  test('Deve retornar Throw', () => {
    expect(()=> {getFilename('type=solid')}).toThrow()
    expect(() => {getFilename('type=solid, name=github, name=instagram')}).toThrow()
    expect(() => {getFilename('type=solid, name=1github')}).toThrow()
  })

  test('Deve retornar string formatada em camelCase', () => {
    expect(getFilename('type=solid, name=github')).toBe('Github')
    expect(getFilename('type=solid, name=github1')).toBe('Github1')
    expect(getFilename('type=solid, name=github_inverted')).toBe('GithubInverted')
    expect(getFilename('type=solid, name=github-inverted')).toBe('GithubInverted')
    expect(getFilename('type=solid, name=github copilot')).toBe('GithubCopilot')
  })
})