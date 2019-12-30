import { deepStrictEqual } from 'assert'
import { ArticleAnalyser } from '../../lib/article-analyser'
import { WordExtractor } from '../../lib/word-extractor'
import { Dictionary } from '../../lib/dictionary'
import { Tokeniser } from '../../lib/tokeniser'
import { WordClassifier } from '../../lib/word-classifier'

describe('ArticleAnalyser', () => {
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

  function createArticleAnalyser (words: string) {
    const readFile = () => Promise.resolve(toWords(words))
    const dictionary = new Dictionary('foo' , readFile)
    const wordExtractor = new WordExtractor(new Tokeniser(), new WordClassifier())
    return new ArticleAnalyser(wordExtractor, dictionary)
  }
})
