const _compact = require('lodash.compact')

const RE_WORD_DELIMITER = /[ .,:;?"(){}\[\]#\n]/ // eslint-disable-line no-useless-escape

class Tokeniser {
  tokenise (text) {
    return _compact(text.split(RE_WORD_DELIMITER))
  }
}

module.exports = Tokeniser
