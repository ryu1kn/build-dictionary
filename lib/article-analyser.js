
'use strict';

const _ = require('lodash');

class ArticleAnalyser {

    constructor(params) {
        this._dictionary = params.dictionary;
        this._wordExtractor = params.wordExtractor;
    }

    analyse(article) {
        const words = this._wordExtractor.extract(article);
        const newWords = this._filterNewWords(_.uniq(words));
        console.log('newWords', newWords);
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
