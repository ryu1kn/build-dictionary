const ReportGenerator = require('../../lib/report-generator')

describe('ReportGenerator', () => {
  it('returns a string describing the result of analysis', () => {
    const reportGenerator = new ReportGenerator()
    const analysis = {
      newWordCount: 3,
      newWords: ['NEW_WORD1', 'NEW_WORD2', 'NEW_WORD3'],
      totalWordCount: 150
    }
    expect(reportGenerator.generate(analysis, 'DIFFICULTY')).to.be.equal(
      [
        'New words: 3/150 (2.0%)',
        'Difficulty: DIFFICULTY',
        '',
        '= New words =',
        'NEW_WORD1',
        'NEW_WORD2',
        'NEW_WORD3'
      ].join('\n')
    )
  })

  it("doesn't provide new words list if there are no new words", () => {
    const reportGenerator = new ReportGenerator()
    const analysis = {
      newWordCount: 0,
      newWords: [],
      totalWordCount: 150
    }
    expect(reportGenerator.generate(analysis, 'DIFFICULTY')).to.be.equal(
      ['New words: 0/150 (0.0%)', 'Difficulty: DIFFICULTY'].join('\n')
    )
  })
})
