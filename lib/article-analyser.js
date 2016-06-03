
'use strict';

const _ = require('lodash');

class ArticleAnalyser {

    constructor(params) {
        this._dictionary = params.dictionary;
        this._tokeniser = params.tokeniser;
    }

    analyse(article) {
        const words = this._tokeniser.tokenise(article);
        const newWords = this._filterNewWords(words);
        return {
            newWordCount: newWords.length,
            totalWordCount: words.length
        };
    }

    _filterNewWords(words) {
        return words.filter(word =>
            !_.includes(this._dictionary, word.toLowerCase())
        );
    }
}

module.exports = ArticleAnalyser;
