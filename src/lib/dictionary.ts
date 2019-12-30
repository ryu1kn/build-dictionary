export class Dictionary {
  _fileReader: any
  _filePath: any
  _wordList: any

  constructor ({ fileReader, filePath }) {
    this._fileReader = fileReader
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
    const dictionaryFile = await this._fileReader.read(this._filePath)
    return dictionaryFile.split('\n')
  }
}
