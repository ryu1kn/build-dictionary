const _flatMap = require('lodash.flatmap')
const _uniq = require('lodash.uniq')
const _negate = require('lodash.negate')

const RE_UPPER_CASE = /[A-Z]/
const RE_EMPTY_LINE = /^\s*$/
const RE_SENTENCE_DELIMETER = /\.\s+/

export class WordExtractor {
  _tokeniser: any
  _wordClassifier: any

  constructor (params) {
    this._tokeniser = params.tokeniser
    this._wordClassifier = params.wordClassifier
  }

  extract (text) {
    const sentences = text
      .split(RE_SENTENCE_DELIMETER)
      .filter(sentence => !RE_EMPTY_LINE.test(sentence))
    const generalWords = _flatMap(
      sentences,
      this._extractFromSentence.bind(this)
    )
    return _uniq(generalWords)
  }

  _extractFromSentence (sentence) {
    const [firstWord, ...remainingWords] = this._tokeniser
      .tokenise(sentence)
      .filter(this._wordClassifier.isWord)
    const generalWords = [
      firstWord,
      ...remainingWords.filter(_negate(this._isProperNoun))
    ]
    return _uniq(generalWords)
  }

  _isProperNoun (word) {
    return RE_UPPER_CASE.test(word[0])
  }
}
