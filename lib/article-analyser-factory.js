
'use strict';

const ArticleAnalyser = require('./article-analyser');
const WordExtractor = require('./word-extractor');

class ArticleAnalyserFactory {

    create(params) {
        return new ArticleAnalyser({
            dictionary: params.dictionary,
            wordExtractor: new WordExtractor()
        });
    }
}

module.exports = ArticleAnalyserFactory;
