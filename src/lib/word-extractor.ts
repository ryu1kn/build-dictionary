import { Tokeniser } from './tokeniser'
import { WordClassifier } from './word-classifier'

const _flatMap = require('lodash.flatmap')
const _uniq = require('lodash.uniq')
const _negate = require('lodash.negate')

const RE_UPPER_CASE = /[A-Z]/
const RE_EMPTY_LINE = /^\s*$/
const RE_SENTENCE_DELIMETER = /\.\s+/

export class WordExtractor {
  constructor(private readonly tokeniser: Tokeniser,
              private readonly wordClassifier: WordClassifier) {
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
    const [firstWord, ...remainingWords] = this.tokeniser
      .tokenise(sentence)
      .filter(this.wordClassifier.isWord)
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
