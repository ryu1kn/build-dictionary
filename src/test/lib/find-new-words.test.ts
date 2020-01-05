import { deepStrictEqual } from 'assert'
import { Dictionary } from '../../lib/dictionary'
import { ArticleAnalyserFactory } from '../../lib/article-analyser-factory'

describe('ArticleAnalyser', () => {
  const factory = new ArticleAnalyserFactory()
  const toWords = (s: string) => s.split('/').join('\n')

  it('counts new words in a given text', async () => {
    const articleAnalyser = createArticleAnalyser('this/is/an')
    const result = await articleAnalyser.analyse('this is an article')
    deepStrictEqual(result, {
      newWordCount: 1,
      newWords: ['article'],
      totalWordCount: 4
    })
  })

  it('counts as one if multiple same words are recognised as new words', async () => {
    const articleAnalyser = createArticleAnalyser('words')
    const result = await articleAnalyser.analyse('new new words')
    deepStrictEqual(result, {
      newWordCount: 1,
      newWords: ['new'],
      totalWordCount: 2
    })
  })

  it('Capitalised word should be compared', async () => {
    const articleAnalyser = createArticleAnalyser('a/now')
    const result = await articleAnalyser.analyse('Now astronomers')
    deepStrictEqual(result, {
      newWordCount: 1,
      newWords: ['astronomers'],
      totalWordCount: 2
    })
  })

  function createArticleAnalyser(words: string) {
    const readFile = () => Promise.resolve(toWords(words))
    const dictionary = new Dictionary('foo' , readFile)
    return factory.create(dictionary)
  }
})
