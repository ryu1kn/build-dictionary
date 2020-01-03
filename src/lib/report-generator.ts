import { Analysis } from './article-analyser'
import { Difficulty } from './difficulty-rater'

import _isEmpty = require('lodash.isempty')
import _negate = require('lodash.negate')

const SECTION_SEPARATOR = '\n\n'

export class ReportGenerator {
  generate(analysis: Analysis, difficulty: Difficulty): string {
    const summarySection = this.getSummarySection(analysis, difficulty)
    const newWordsSection = this.getNewWordSection(analysis)
    return this.convertToString([summarySection, newWordsSection])
  }

  private getSummarySection(analysis: Analysis, difficulty: Difficulty): string[] {
    const newWordRatio = analysis.newWordCount / analysis.totalWordCount
    const newWordRatioPct = (newWordRatio * 100).toFixed(1)
    return [
      `New words: ${analysis.newWordCount}/${
        analysis.totalWordCount
      } (${newWordRatioPct}%)`,
      `Difficulty: ${difficulty}`
    ]
  }

  private getNewWordSection(analysis: Analysis): string[] {
    return !_isEmpty(analysis.newWords)
      ? ['= New words =', ...analysis.newWords]
      : []
  }

  private convertToString(sections: [string[], string[]]) {
    return sections
      .filter(_negate(_isEmpty))
      .map(section => section.join('\n'))
      .join(SECTION_SEPARATOR)
  }
}
