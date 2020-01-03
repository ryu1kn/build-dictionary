import { ReadFile } from './types'

export class Dictionary {
  private _wordList?: string[]

  constructor(private readonly filePath: string,
              private readonly readFile: ReadFile) {
  }

  async exists(word: string): Promise<boolean> {
    const wordList = await this.loadCachedWordList()
    return wordList.includes(word.toLowerCase())
  }

  private async loadCachedWordList() {
    if (this._wordList) return this._wordList

    this._wordList = await this.loadWordList()
    return this._wordList
  }

  private async loadWordList() {
    const dictionaryFile = await this.readFile(this.filePath)
    return dictionaryFile.split('\n')
  }
}
