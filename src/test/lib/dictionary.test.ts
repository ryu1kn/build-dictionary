import { equal } from 'assert'

import {Dictionary} from '../../lib/dictionary'

describe('Dictionary', () => {
  it('returns true if a word is known', async () => {
    const readFile = () => Promise.resolve('word1\nword2')
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary(filePath, readFile)
    equal(await dictionary.exists('word1'), true)
  })

  it('returns false if a word is unknown', async () => {
    const readFile = () => Promise.resolve('word1\nword2')
    const filePath = 'FILE_PATH'
    const dictionary = new Dictionary(filePath, readFile)
    equal(await dictionary.exists('unknown'), false)
  })
})
