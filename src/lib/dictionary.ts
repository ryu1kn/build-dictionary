export class Dictionary {
  _readFile: (path: string) => Promise<string>
  _filePath: any
  _wordList: any

  constructor ({ readFile, filePath }) {
    this._readFile = readFile
    this._filePath = filePath
  }

  async exists (word) {
    const wordList = await this._loadCachedWordList()
    return wordList.includes(word.toLowerCase())
  }

  async _loadCachedWordList () {
    if (this._wordList) return this._wordList

    this._wordList = await this._loadWordList()
    return this._wordList
  }

  async _loadWordList () {
    const dictionaryFile = await this._readFile(this._filePath)
    return dictionaryFile.split('\n')
  }
}
