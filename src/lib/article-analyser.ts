import { WordExtractor } from './word-extractor'
import { Dictionary } from './dictionary'

const _uniq = require('lodash.uniq')

export class ArticleAnalyser {
  constructor(private readonly wordExtractor: WordExtractor,
              private readonly dictionary: Dictionary) {
  }

  async analyse (article) {
    const words = this.wordExtractor.extract(article)
    const newWords = await this._collectNewWords(words)
    return {
      newWordCount: newWords.length,
      newWords,
      totalWordCount: words.length
    }
  }

  async _collectNewWords (words) {
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
