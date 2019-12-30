const util = require('util')

export class FileReader {
  _readFile: any

  constructor ({ fs }) {
    this._readFile = util.promisify(fs.readFile)
  }

  read (filePath) {
    return this._readFile(filePath, { encoding: 'utf8' })
  }
}
