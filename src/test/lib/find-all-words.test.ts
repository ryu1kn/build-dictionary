import { deepStrictEqual } from 'assert'

import {WordExtractor} from '../../lib/word-extractor'

describe('WordExtractor', () => {
  const wordExtractor = new WordExtractor()
  const assertWords = (text: string, words: string[]) =>
    deepStrictEqual(wordExtractor.extract(text), words)

  it('extracts a list of words from a text', () => {
    assertWords('this is a text', ['this', 'is', 'a', 'text'])
  })

  it('sees "newline" is not a part of a word', () => {
    assertWords('a\nb\n\nc', ['a', 'b', 'c'])
  })

  it('sees "," is not a part of a word', () => {
    assertWords('this is, great', ['this', 'is', 'great'])
  })

  it('sees "." is not a part of a word', () => {
    assertWords('ok. great', ['ok', 'great'])
  })

  it('sees ";" is not a part of a word', () => {
    assertWords('this; so', ['this', 'so'])
  })

  it('sees "(" or ")" is not a part of a word', () => {
    assertWords('a) b (c', ['a', 'b', 'c'])
  })

  it('sees "[" or "]" is not a part of a word', () => {
    assertWords('a] b [c', ['a', 'b', 'c'])
  })

  it('sees "{" or "}" is not a part of a word', () => {
    assertWords('a} b {c', ['a', 'b', 'c'])
  })

  it('sees "?" is not a part of a word', () => {
    assertWords('Why not?', ['why', 'not'])
  })

  it('sees "#" is not a part of a word', () => {
    assertWords('test #comment', ['test', 'comment'])
  })

  it("sees '\"' is not a part of a word", () => {
    assertWords('thought "why not"', ['thought', 'why', 'not'])
  })

  it("sees '“' is not a part of a word", () => {
    assertWords('“tinny', ['tinny'])
  })

  it("sees '”' is not a part of a word", () => {
    assertWords('races”', ['races'])
  })

  it('sees "\'" is not a part of a word', () => {
    assertWords("'Rot' is", ['rot', 'is'])
  })

  it('counts the multiple same words as 1', () => {
    assertWords('this is a long long long text', [
      'this',
      'is',
      'a',
      'long',
      'text'
    ])
  })

  it("doesn't recognise a proper noun as a general word", () => {
    assertWords('This is Malcolm. That is Bill.', ['this', 'is', 'that'])
  })

  it("sees the first word in a sentence as a general word even if it's a proper noun", () => {
    assertWords('This is Malcolm. Bill is there', [
      'this',
      'is',
      'bill',
      'there'
    ])
  })

  it('sees numbers are not a word', () => {
    assertWords('number 1', ['number'])
  })

  it('sees isolated "-" is not a word', () => {
    assertWords('here - there', ['here', 'there'])
  })

  it('sees time is not a word', () => {
    assertWords('Meet at 6:03PM', ['meet', 'at'])
  })

  it('sees a roman numeral is not a word', () => {
    const article = `
      i. one
      ii. two
      iv. four
      v. five
      x. ten
    `
    assertWords(article, ['i', 'one', 'two', 'four', 'five', 'ten'])
  })
})
