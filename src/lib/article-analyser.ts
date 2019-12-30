import { WordExtractor } from './word-extractor'
import { Dictionary } from './dictionary'

const _uniq = require('lodash.uniq')

export interface Analysis {
  newWordCount: number,
  newWords: string[],
  totalWordCount: number
}

export class ArticleAnalyser {
  constructor(private readonly wordExtractor: WordExtractor,
              private readonly dictionary: Dictionary) {
  }

  async analyse (article: string): Promise<Analysis> {
    const words = this.wordExtractor.extract(article)
    const newWords = await this.collectNewWords(words)
    return {
      newWordCount: newWords.length,
      newWords,
      totalWordCount: words.length
    }
  }

  private async collectNewWords (words: string[]) {
    const wordInfos = await Promise.all(
      words.map(async word => ({
        word,
        isNewWord: !await this.dictionary.exists(word)
      }))
    )
    const newWords = wordInfos
      .filter((wordInfo: any) => wordInfo.isNewWord)
      .map((wordInfo: any) => wordInfo.word)
    return _uniq(newWords)
  }
}
