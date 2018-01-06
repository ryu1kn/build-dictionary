class ArticleAnalyser {
  constructor (params) {
    this._dictionary = params.dictionary
    this._wordExtractor = params.wordExtractor
  }

  async analyse (article) {
    const words = this._wordExtractor.extract(article)
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
        isNewWord: !await this._dictionary.exists(word)
      }))
    )
    return wordInfos
      .filter(wordInfo => wordInfo.isNewWord)
      .map(wordInfo => wordInfo.word)
  }
}

module.exports = ArticleAnalyser
