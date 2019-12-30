import { expect } from 'chai'

const {WordClassifier} = require('../../lib/word-classifier')

describe('WordClassifier', () => {
  it('sees numbers are not a word', () => {
    const wordClassifier = new WordClassifier()
    expect(wordClassifier.isWord('1')).to.equal(false)
  })

  it('sees isolated "-" is not a word', () => {
    const wordClassifier = new WordClassifier()
    expect(wordClassifier.isWord('-')).to.equal(false)
  })

  it('sees time is not a word', () => {
    const wordClassifier = new WordClassifier()
    expect(wordClassifier.isWord('6:03PM')).to.equal(false)
  })

  it('sees a roman numeral is not a word', () => {
    const wordClassifier = new WordClassifier()
    const tokens = ['i', 'ii', 'iv', 'v', 'x']
    const words = tokens.filter(wordClassifier.isWord)
    expect(words).to.be.eql(['i'])
  })
})
