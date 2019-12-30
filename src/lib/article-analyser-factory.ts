import {ArticleAnalyser} from './article-analyser'
import {Tokeniser} from './tokeniser'
import {WordExtractor} from './word-extractor'
import {WordClassifier} from './word-classifier'
import { Dictionary } from './dictionary'

export class ArticleAnalyserFactory {
  create (dictionary: Dictionary) {
    return new ArticleAnalyser(this._createWordExtractor(), dictionary)
  }

  _createWordExtractor () {
    return new WordExtractor(new Tokeniser(), new WordClassifier())
  }
}
