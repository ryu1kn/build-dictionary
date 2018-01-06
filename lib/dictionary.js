const _ = require('lodash')
const util = require('util')

class Dictionary {
  constructor ({ fs, filePath }) {
    this._fs = fs
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
    const readFile = util.promisify(this._fs.readFile)
    const dictionaryFile = await readFile(this._filePath, { encoding: 'utf8' })
    return dictionaryFile.split('\n')
  }
}

module.exports = Dictionary
