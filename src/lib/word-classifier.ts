const RE_NUMBER = /^\d+$/
const RE_SYMBOL = /-/
const RE_CODE_LIKE = /^\d+[^\d]+/
const RE_ROMAN_NUMERAL = /^i[ivx]+$|^[vx][ivx]*$/

export class WordClassifier {
  isWord(token: string): boolean {
    return (
      !RE_SYMBOL.test(token) &&
      !RE_NUMBER.test(token) &&
      !RE_ROMAN_NUMERAL.test(token) &&
      !RE_CODE_LIKE.test(token)
    )
  }
}
