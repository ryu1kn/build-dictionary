'use strict'

const _ = require('lodash')

class Dictionary {
  constructor (params) {
    this._wordList = this._load(params.fs, params.filePath)
  }

  exists (word) {
    return _.includes(this._wordList, word.toLowerCase())
  }

  _load (fs, filePath) {
    return fs.readFileSync(filePath, { encoding: 'utf8' }).split('\n')
  }
}

module.exports = Dictionary
