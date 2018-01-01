
'use strict';

const _ = require('lodash');

const RE_WORD_DELIMITER = /[ .,:;?"(){}\[\]#\n]/; // eslint-disable-line no-useless-escape

class Tokeniser {

    tokenise(text) {
        return _.compact(text.split(RE_WORD_DELIMITER));
    }

}

module.exports = Tokeniser;
