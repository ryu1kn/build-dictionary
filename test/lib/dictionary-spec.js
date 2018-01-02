const Dictionary = require('../../lib/dictionary')

describe('Dictionary', () => {
  it('returns true if a word is known', () => {
    const fs = { readFileSync: sinon.stub().returns('word1\nword2') }
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary({ fs, filePath })
    expect(dictionary.exists('word1')).to.be.true
  })

  it('returns false if a word is unknown', () => {
    const fs = { readFileSync: sinon.stub().returns('word1\nword2') }
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary({ fs, filePath })
    expect(dictionary.exists('unknown')).to.be.false
  })
})
