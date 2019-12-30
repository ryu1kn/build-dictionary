import {ArticleAnalyser} from './article-analyser'
import {Tokeniser} from './tokeniser'
import {WordExtractor} from './word-extractor'
import {WordClassifier} from './word-classifier'

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
