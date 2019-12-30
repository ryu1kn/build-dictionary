import { ReadFile } from './types'

export class Dictionary {
  private _wordList: any

  constructor(private readonly filePath: string,
              private readonly readFile: ReadFile) {
  }

  async exists (word: string) {
    const wordList = await this._loadCachedWordList()
    return wordList.includes(word.toLowerCase())
  }

  async _loadCachedWordList () {
    if (this._wordList) return this._wordList

    this._wordList = await this._loadWordList()
    return this._wordList
  }

  async _loadWordList () {
    const dictionaryFile = await this.readFile(this.filePath)
    return dictionaryFile.split('\n')
  }
}
