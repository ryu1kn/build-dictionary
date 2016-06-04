
'use strict';

class WordExtractor {

    constructor(params) {
        this._tokeniser = params.tokeniser;
        this._wordClassifier = params.wordClassifier;
    }

    extract(text) {
        return this._tokeniser.tokenise(text)
            .filter(this._wordClassifier.isWord);
    }

}

module.exports = WordExtractor;
