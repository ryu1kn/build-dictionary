import _compact = require('lodash.compact')

const RE_WORD_DELIMITER = /[ .,:;?'"(){}\[\]#\n]/ // eslint-disable-line no-useless-escape

export class Tokeniser {
  tokenise(text: string): string[] {
    return _compact(text.split(RE_WORD_DELIMITER))
  }
}
