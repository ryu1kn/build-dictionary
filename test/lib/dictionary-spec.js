const Dictionary = require('../../lib/dictionary')

describe('Dictionary', () => {
  it('returns true if a word is known', async () => {
    const fs = { readFile: sinon.stub().callsArgWith(2, null, 'word1\nword2') }
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary({ fs, filePath })
    expect(await dictionary.exists('word1')).to.be.true
  })

  it('returns false if a word is unknown', async () => {
    const fs = { readFile: sinon.stub().callsArgWith(2, null, 'word1\nword2') }
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary({ fs, filePath })
    expect(await dictionary.exists('unknown')).to.be.false
  })
})
