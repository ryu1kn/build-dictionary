import { deepStrictEqual, equal } from 'assert'

import {WordClassifier} from '../../lib/word-classifier'

describe('WordClassifier', () => {
  const wordClassifier = new WordClassifier()

  it('sees numbers are not a word', () => {
    equal(wordClassifier.isWord('1'), false)
  })

  it('sees isolated "-" is not a word', () => {
    equal(wordClassifier.isWord('-'), false)
  })

  it('sees time is not a word', () => {
    equal(wordClassifier.isWord('6:03PM'), false)
  })

  it('sees a roman numeral is not a word', () => {
    const tokens = ['i', 'ii', 'iv', 'v', 'x']
    const words = tokens.filter(wordClassifier.isWord)
    deepStrictEqual(words, ['i'])
  })
})
