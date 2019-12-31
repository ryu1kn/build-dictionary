import {ArticleAnalyser} from './article-analyser'
import {WordExtractor} from './word-extractor'
import { Dictionary } from './dictionary'

export class ArticleAnalyserFactory {
  create (dictionary: Dictionary): ArticleAnalyser {
    return new ArticleAnalyser(new WordExtractor(), dictionary)
  }
}
