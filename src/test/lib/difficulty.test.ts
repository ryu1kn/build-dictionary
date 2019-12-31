import { equal } from 'assert'

import {DifficultyRater} from '../../lib/difficulty-rater'
import { Analysis } from '../../lib/article-analyser'

describe('DifficultyRater', () => {
  const difficultyRater = new DifficultyRater()

  it("says it's very difficult to read if new words are more than 10%", () => {
    const analysis = { newWordCount: 11, totalWordCount: 100 } as Analysis
    equal(difficultyRater.rate(analysis), 'Very difficult')
  })

  it("says it's difficult to read if new words are at most 10%", () => {
    const analysis = { newWordCount: 10, totalWordCount: 100 } as Analysis
    equal(difficultyRater.rate(analysis), 'Difficult')
  })

  it("says it's medium to read if new words are at most 2%", () => {
    const analysis = { newWordCount: 5, totalWordCount: 100 } as Analysis
    equal(difficultyRater.rate(analysis), 'Medium')
  })

  it("says it's easy to read if new words are at most 2%", () => {
    const analysis = { newWordCount: 2, totalWordCount: 100 } as Analysis
    equal(difficultyRater.rate(analysis), 'Easy')
  })
})
