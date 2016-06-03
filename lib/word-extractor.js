
'use strict';

const _ = require('lodash');

const RE_WORD_DELIMITER = /[ .,:?"#\n]/;
const RE_NUMBER = /^\d+$/;
const RE_SYMBOL = /-/;
const RE_CODE_LIKE = /^\d+[^\d]+/;

class WordExtractor {

    extract(text) {
        return this._tokenise(text)
            .filter(token => !RE_SYMBOL.test(token))
            .filter(token => !RE_NUMBER.test(token))
            .filter(token => !RE_CODE_LIKE.test(token));
    }

    _tokenise(text) {
        return _.compact(text.split(RE_WORD_DELIMITER));
    }
}

module.exports = WordExtractor;
