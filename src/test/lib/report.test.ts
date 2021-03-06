import { equal } from 'assert'

import {ReportGenerator} from '../../lib/report-generator'

describe('ReportGenerator', () => {
  const reportGenerator = new ReportGenerator()

  it('returns a string describing the result of analysis', () => {
    const analysis = {
      newWordCount: 3,
      newWords: ['NEW_WORD1', 'NEW_WORD2', 'NEW_WORD3'],
      totalWordCount: 150
    }
    equal(reportGenerator.generate(analysis, 'Easy'),
      [
        'New words: 3/150 (2.0%)',
        'Difficulty: Easy',
        '',
        '= New words =',
        'NEW_WORD1',
        'NEW_WORD2',
        'NEW_WORD3'
      ].join('\n')
    )
  })

  it("doesn't provide new words list if there are no new words", () => {
    const analysis = {
      newWordCount: 0,
      newWords: [] as string[],
      totalWordCount: 150
    }
    equal(reportGenerator.generate(analysis, 'Easy'),
      ['New words: 0/150 (0.0%)', 'Difficulty: Easy'].join('\n')
    )
  })
})
