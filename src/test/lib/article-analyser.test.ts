import { deepStrictEqual } from 'assert'
import {ArticleAnalyser} from '../../lib/article-analyser'
import { WordExtractor } from '../../lib/word-extractor'
import { Dictionary } from '../../lib/dictionary'

describe('ArticleAnalyser', () => {
  it('counts new words in a given text', async () => {
    const articleAnalyser = createArticleAnalyser(['this', 'is', 'an'])
    const result = await articleAnalyser.analyse('this is an article')
    deepStrictEqual(result, {
      newWordCount: 1,
      newWords: ['article'],
      totalWordCount: 4
    })
  })

  it('counts as one if multiple same words are recognised as new words', async () => {
    const articleAnalyser = createArticleAnalyser(['words'])
    const result = await articleAnalyser.analyse('new new words')
    deepStrictEqual(result, {
      newWordCount: 1,
      newWords: ['new'],
      totalWordCount: 3
    })
  })

  function createArticleAnalyser (knownWords: string[]) {
    const dictionary = {
      exists: (word: string) => Promise.resolve(knownWords.includes(word))
    }
    const wordExtractor = { extract: (text: string) => text.split(' ') }
    return new ArticleAnalyser(wordExtractor as WordExtractor, dictionary as Dictionary)
  }
})
