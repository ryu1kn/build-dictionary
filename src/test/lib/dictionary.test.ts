import { expect } from 'chai'

const {Dictionary} = require('../../lib/dictionary')

describe('Dictionary', () => {
  it('returns true if a word is known', async () => {
    const fileReader = { read: () => Promise.resolve('word1\nword2') }
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary({ fileReader, filePath })
    expect(await dictionary.exists('word1')).to.equal(true)
  })

  it('returns false if a word is unknown', async () => {
    const fileReader = { read: () => Promise.resolve('word1\nword2') }
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary({ fileReader, filePath })
    expect(await dictionary.exists('unknown')).to.equal(false)
  })
})
