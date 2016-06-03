
'use strict';

const _ = require('lodash');

class ArticleAnalyser {

    constructor(params) {
        this._dictionary = params.dictionary;
    }

    analyse(article) {
        const words = article.split(' ');
        return {
            newWordCount: this._countNewWords(words),
            totalWordCount: words.length
        };
    }

    _countNewWords(words) {
        return words.filter(word =>
            !_.includes(this._dictionary, word.toLowerCase())
        ).length;
    }
}

module.exports = ArticleAnalyser;
