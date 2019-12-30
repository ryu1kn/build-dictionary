const _isEmpty = require('lodash.isempty')
const _negate = require('lodash.negate')

const SECTION_SEPARATOR = '\n\n'

class ReportGenerator {
  generate (analysis, difficulty) {
    const summarySection = this._getSummarySection(analysis, difficulty)
    const newWordsSection = this._getNewWordSection(analysis)
    return this._convertToString([summarySection, newWordsSection])
  }

  _getSummarySection (analysis, difficulty) {
    const newWordRatio = analysis.newWordCount / analysis.totalWordCount
    const newWordRatioPct = (newWordRatio * 100).toFixed(1)
    return [
      `New words: ${analysis.newWordCount}/${
        analysis.totalWordCount
      } (${newWordRatioPct}%)`,
      `Difficulty: ${difficulty}`
    ]
  }

  _getNewWordSection (analysis) {
    return !_isEmpty(analysis.newWords)
      ? ['= New words =', ...analysis.newWords]
      : []
  }

  _convertToString (sections) {
    return sections
      .filter(_negate(_isEmpty))
      .map(section => section.join('\n'))
      .join(SECTION_SEPARATOR)
  }
}

module.exports = ReportGenerator
