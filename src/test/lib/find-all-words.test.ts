import { deepStrictEqual } from 'assert'

import {WordExtractor} from '../../lib/word-extractor'

describe('WordExtractor', () => {
  const wordExtractor = new WordExtractor()

  it('extracts a list of words from a text', () => {
    const text = 'this is a text'
    deepStrictEqual(wordExtractor.extract(text), ['this', 'is', 'a', 'text'])
  })

  it('counts the multiple same words as 1', () => {
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
    const text = 'This is Malcolm. That is Bill.'
    deepStrictEqual(wordExtractor.extract(text), ['This', 'is', 'That'])
  })

  it("sees the first word in a sentence as a general word even if it's a proper noun", () => {
    const text = 'This is Malcolm. Bill is there'
    deepStrictEqual(wordExtractor.extract(text), [
      'This',
      'is',
      'Bill',
      'there'
    ])
  })
})
