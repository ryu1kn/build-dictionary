import { expect } from 'chai'

const {ArticleAnalyser} = require('../../lib/article-analyser')

describe('ArticleAnalyser', () => {
  it('counts new words in a given text', async () => {
    const articleAnalyser = createArticleAnalyser(['this', 'is', 'an'])
    const result = await articleAnalyser.analyse('this is an article')
    expect(result).to.be.eql({
      newWordCount: 1,
      newWords: ['article'],
      totalWordCount: 4
    })
  })

  it('counts as one if multiple same words are recognised as new words', async () => {
    const articleAnalyser = createArticleAnalyser(['words'])
    const result = await articleAnalyser.analyse('new new words')
    expect(result).to.be.eql({
      newWordCount: 1,
      newWords: ['new'],
      totalWordCount: 3
    })
  })

  function createArticleAnalyser (knownWords: string[]) {
    const dictionary = {
      exists: word => Promise.resolve(knownWords.includes(word))
    }
    const wordExtractor = { extract: text => text.split(' ') }
    return new ArticleAnalyser({ dictionary, wordExtractor })
  }
})