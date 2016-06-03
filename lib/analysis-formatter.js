'use strict';

class AnalysisFormatter {

    format(analysis) {
        const newWordRatio = analysis.newWordCount / analysis.totalWordCount;
        const newWordRatioPct = (newWordRatio * 100).toFixed(1);
        return [
            `New words: ${analysis.newWordCount}/${analysis.totalWordCount} (${newWordRatioPct}%)`,
            `Difficulty: ${newWordRatio > 0.2 ? 'Difficult' : 'Easy'}`
        ].join('\n');
    }

}

module.exports = AnalysisFormatter;
