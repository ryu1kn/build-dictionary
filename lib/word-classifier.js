
'use strict';

const RE_NUMBER = /^\d+$/;
const RE_SYMBOL = /-/;
const RE_CODE_LIKE = /^\d+[^\d]+/;
const RE_ROMAN_NUMERAL = /^i[ivx]+$|^[vx][ivx]*$/;

class WordClassifier {

    isWord(token) {
        return !RE_SYMBOL.test(token) &&
            !RE_NUMBER.test(token) &&
            !RE_ROMAN_NUMERAL.test(token) &&
            !RE_CODE_LIKE.test(token);
    }

}

module.exports = WordClassifier;
