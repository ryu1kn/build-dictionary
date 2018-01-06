const _ = require('lodash')

const RE_UPPER_CASE = /[A-Z]/
const RE_EMPTY_LINE = /^\s*$/
const RE_SENTENCE_DELIMETER = /\.\s+/

class WordExtractor {
  constructor (params) {
    this._tokeniser = params.tokeniser
    this._wordClassifier = params.wordClassifier
  }

  extract (text) {
    const sentences = text
      .split(RE_SENTENCE_DELIMETER)
      .filter(sentence => !RE_EMPTY_LINE.test(sentence))
    const generalWords = _.flatMap(
      sentences,
      this._extractFromSentence.bind(this)
    )
    return _.uniq(generalWords)
  }

  _extractFromSentence (sentence) {
    const [firstWord, ...remainingWords] = this._tokeniser
      .tokenise(sentence)
      .filter(this._wordClassifier.isWord)
    const generalWords = [
      firstWord,
      ...remainingWords.filter(_.negate(this._isProperNoun))
    ]
    return _.uniq(generalWords)
  }

  _isProperNoun (word) {
    return RE_UPPER_CASE.test(word[0])
  }
}

module.exports = WordExtractor
