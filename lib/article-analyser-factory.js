
'use strict';

const ArticleAnalyser = require('./article-analyser');

class ArticleAnalyserFactory {

    create(params) {
        return new ArticleAnalyser({dictionary: params.dictionary});
    }
}

module.exports = ArticleAnalyserFactory;
