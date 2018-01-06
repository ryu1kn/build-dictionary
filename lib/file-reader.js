const util = require('util')

class FileReader {
  constructor ({ fs }) {
    this._readFile = util.promisify(fs.readFile)
  }

  read (filePath) {
    return this._readFile(filePath, { encoding: 'utf8' })
  }
}

module.exports = FileReader
