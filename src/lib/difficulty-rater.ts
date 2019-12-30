export class DifficultyRater {
  rate (analysis) {
    const score = analysis.newWordCount / analysis.totalWordCount
    return score > 0.1
      ? 'Very difficult'
      : score > 0.05
        ? 'Difficult' // eslint-disable-line indent
        : score > 0.02 ? 'Medium' : 'Easy' // eslint-disable-line indent
  }
}
