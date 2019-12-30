import { Analysis } from './article-analyser'
import { Difficulty } from './difficulty-rater'

const _isEmpty = require('lodash.isempty')
const _negate = require('lodash.negate')

const SECTION_SEPARATOR = '\n\n'

export class ReportGenerator {
  generate (analysis: Analysis, difficulty: Difficulty) {
    const summarySection = this._getSummarySection(analysis, difficulty)
    const newWordsSection = this._getNewWordSection(analysis)
    return this._convertToString([summarySection, newWordsSection])
  }

  _getSummarySection (analysis: Analysis, difficulty: Difficulty): string[] {
    const newWordRatio = analysis.newWordCount / analysis.totalWordCount
    const newWordRatioPct = (newWordRatio * 100).toFixed(1)
    return [
      `New words: ${analysis.newWordCount}/${
        analysis.totalWordCount
      } (${newWordRatioPct}%)`,
      `Difficulty: ${difficulty}`
    ]
  }

  _getNewWordSection (analysis: Analysis): string[] {
    return !_isEmpty(analysis.newWords)
      ? ['= New words =', ...analysis.newWords]
      : []
  }

  _convertToString (sections: [string[], string[]]) {
    return sections
      .filter(_negate(_isEmpty))
      .map(section => section.join('\n'))
      .join(SECTION_SEPARATOR)
  }
}
