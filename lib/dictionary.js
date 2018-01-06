const _ = require('lodash')
const FileReader = require('./file-reader')

class Dictionary {
  constructor ({ fs, filePath }) {
    this._fileReader = new FileReader({ fs })
    this._filePath = filePath
  }

  async exists (word) {
    const wordList = await this._loadCachedWordList()
    return _.includes(wordList, word.toLowerCase())
  }

  async _loadCachedWordList () {
    if (this._wordList) return this._wordList

    this._wordList = await this._loadWordList()
    return this._wordList
  }

  async _loadWordList () {
    const dictionaryFile = await this._fileReader.read(this._filePath)
    return dictionaryFile.split('\n')
  }
}

module.exports = Dictionary
