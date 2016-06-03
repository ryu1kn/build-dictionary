
'use strict';

const ArticleAnalyser = require('./article-analyser');
const Tokeniser = require('./tokeniser');

class ArticleAnalyserFactory {

    create(params) {
        return new ArticleAnalyser({
            dictionary: params.dictionary,
            tokeniser: new Tokeniser()
        });
    }
}

module.exports = ArticleAnalyserFactory;
