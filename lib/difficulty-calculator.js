
'use strict';

const _ = require('lodash');

class DifficultyCalculator {

    constructor(params) {
        this._dictionary = params.dictionary;
    }

    calculate(article) {
        const words = article.split(' ');
        const wordCount = words.length;
        const unknownWordCount = this._countUnknownWord(words);
        const unknownWordRatio = unknownWordCount / wordCount;
        if (unknownWordRatio > 0.1) return {difficulty: 'difficult'};
        else return {difficulty: 'easy'};
    }

    _countUnknownWord(words) {
        return words.filter(word =>
            !_.includes(this._dictionary, word.toLowerCase())
        ).length;
    }
}

module.exports = DifficultyCalculator;
