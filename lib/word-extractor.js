
'use strict';

const _ = require('lodash');

class WordExtractor {

    constructor(params) {
        this._tokeniser = params.tokeniser;
        this._wordClassifier = params.wordClassifier;
    }

    extract(text) {
        const words = this._tokeniser.tokenise(text)
            .filter(this._wordClassifier.isWord);
        return _.uniq(words);
    }

}

module.exports = WordExtractor;
