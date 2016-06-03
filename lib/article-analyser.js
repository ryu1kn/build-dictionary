
'use strict';

const _ = require('lodash');

class ArticleAnalyser {

    constructor(params) {
        this._dictionary = params.dictionary;
    }

    analyse(article) {
        const words = article.split(' ');
        const wordCount = words.length;
        const unknownWordCount = this._countUnknownWord(words);
        const unknownWordRatio = unknownWordCount / wordCount;
        return {difficulty: unknownWordRatio > 0.1 ? 'difficult' : 'easy'};
    }

    _countUnknownWord(words) {
        return words.filter(word =>
            !_.includes(this._dictionary, word.toLowerCase())
        ).length;
    }
}

module.exports = ArticleAnalyser;
