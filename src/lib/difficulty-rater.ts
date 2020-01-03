import { Analysis } from './article-analyser'

export type Difficulty = 'Very difficult' | 'Difficult' | 'Medium' | 'Easy'

export class DifficultyRater {
  rate(analysis: Analysis): Difficulty {
    const score = analysis.newWordCount / analysis.totalWordCount
    return score > 0.1
      ? 'Very difficult'
      : score > 0.05
        ? 'Difficult' // eslint-disable-line indent
        : score > 0.02 ? 'Medium' : 'Easy' // eslint-disable-line indent
  }
}
