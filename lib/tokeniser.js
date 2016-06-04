
'use strict';

const _ = require('lodash');

const RE_WORD_DELIMITER = /[ .,:;?"(){}\[\]#\n]/;

class Tokeniser {

    tokenise(text) {
        return _.compact(text.split(RE_WORD_DELIMITER));
    }

}

module.exports = Tokeniser;
