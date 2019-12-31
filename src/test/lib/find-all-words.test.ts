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

  it('sees numbers are not a word', () => {
    deepStrictEqual(wordExtractor.extract('number 1'), ['number'])
  })

  it('sees isolated "-" is not a word', () => {
    deepStrictEqual(wordExtractor.extract('here - there'), ['here', 'there'])
  })

  it('sees time is not a word', () => {
    deepStrictEqual(wordExtractor.extract('Meet at 6:03PM'), ['Meet', 'at'])
  })

  it('sees a roman numeral is not a word', () => {
    const article = `
      i. one
      ii. two
      iv. four
      v. five
      x. ten
    `
    deepStrictEqual(wordExtractor.extract(article), ['i', 'one', 'two', 'four', 'five', 'ten'])
  })
})
