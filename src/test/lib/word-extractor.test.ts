import { deepStrictEqual } from 'assert'

import {WordExtractor} from '../../lib/word-extractor'

describe('WordExtractor', () => {
  const tokeniser = { tokenise: (text: string) => text.split(' ') }
  it('extracts a list of words from a text', () => {
    const wordClassifier = { isWord: (token: string) => token !== 'a' }
    const wordExtractor = new WordExtractor(tokeniser, wordClassifier)
    const text = 'this is a text'
    deepStrictEqual(wordExtractor.extract(text), ['this', 'is', 'text'])
  })

  it('counts the multiple same words as 1', () => {
    const wordClassifier = { isWord: () => true }
    const wordExtractor = new WordExtractor(tokeniser, wordClassifier)
    const text = 'this is a long long long text'
    deepStrictEqual(wordExtractor.extract(text), [
      'this',
      'is',
      'a',
      'long',
      'text'
    ])
  })

  it("doesn't recognise a proper noun as a general word", () => {
    const wordClassifier = { isWord: () => true }
    const wordExtractor = new WordExtractor(tokeniser, wordClassifier)
    const text = 'This is Malcolm. That is Bill.'
    deepStrictEqual(wordExtractor.extract(text), ['This', 'is', 'That'])
  })

  it("sees the first word in a sentence as a general word even if it's a proper noun", () => {
    const wordClassifier = { isWord: () => true }
    const wordExtractor = new WordExtractor(tokeniser, wordClassifier)
    const text = 'This is Malcolm. Bill is there'
    deepStrictEqual(wordExtractor.extract(text), [
      'This',
      'is',
      'Bill',
      'there'
    ])
  })
})
