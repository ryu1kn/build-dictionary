const {ArticleAnalyser} = require('./article-analyser')
const Tokeniser = require('./tokeniser')
const {WordExtractor} = require('./word-extractor')
const WordClassifier = require('./word-classifier')

export class ArticleAnalyserFactory {
  create (params) {
    return new ArticleAnalyser({
      dictionary: params.dictionary,
      wordExtractor: this._createWordExtractor()
    })
  }

  _createWordExtractor () {
    return new WordExtractor({
      tokeniser: new Tokeniser(),
      wordClassifier: new WordClassifier()
    })
  }
}
