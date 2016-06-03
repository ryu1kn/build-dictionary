'use strict';

class AnalysisFormatter {

    format(analysis, difficulty) {
        const newWordRatio = analysis.newWordCount / analysis.totalWordCount;
        const newWordRatioPct = (newWordRatio * 100).toFixed(1);
        return [
            `New words: ${analysis.newWordCount}/${analysis.totalWordCount} (${newWordRatioPct}%)`,
            `Difficulty: ${difficulty}`
        ].join('\n');
    }

}

module.exports = AnalysisFormatter;
