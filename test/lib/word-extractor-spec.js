const WordExtractor = require('../../lib/word-extractor')

describe('WordExtractor', () => {
  it('extracts a list of words from a text', () => {
    const tokeniser = { tokenise: text => text.split(' ') }
    const wordClassifier = { isWord: token => token !== 'a' }
    const wordExtractor = new WordExtractor({ tokeniser, wordClassifier })
    const text = 'this is a text'
    expect(wordExtractor.extract(text)).to.be.eql(['this', 'is', 'text'])
  })

  it('counts the multiple same words as 1', () => {
    const tokeniser = { tokenise: text => text.split(' ') }
    const wordClassifier = { isWord: () => true }
    const wordExtractor = new WordExtractor({ tokeniser, wordClassifier })
    const text = 'this is a long long long text'
    expect(wordExtractor.extract(text)).to.be.eql([
      'this',
      'is',
      'a',
      'long',
      'text'
    ])
  })

  it("doesn't recognise a proper noun as a general word", () => {
    const tokeniser = { tokenise: text => text.split(' ') }
    const wordClassifier = { isWord: () => true }
    const wordExtractor = new WordExtractor({ tokeniser, wordClassifier })
    const text = 'This is Malcolm. That is Bill.'
    expect(wordExtractor.extract(text)).to.be.eql(['This', 'is', 'That'])
  })

  it("sees the first word in a sentence as a general word even if it's a proper noun", () => {
    const tokeniser = { tokenise: text => text.split(' ') }
    const wordClassifier = { isWord: () => true }
    const wordExtractor = new WordExtractor({ tokeniser, wordClassifier })
    const text = 'This is Malcolm. Bill is there'
    expect(wordExtractor.extract(text)).to.be.eql([
      'This',
      'is',
      'Bill',
      'there'
    ])
  })
})
