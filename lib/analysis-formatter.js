'use strict';

const SECTION_SEPARATOR = '\n\n';

// TODO: Rename it to ReportGenerator
class AnalysisFormatter {

    format(analysis, difficulty) {
        const summarySection = this._getSummarySection(analysis, difficulty);
        const newWordsSection = this._getNewWordSection(analysis);
        return this._convertToString([summarySection, newWordsSection]);
    }

    _getSummarySection(analysis, difficulty) {
        const newWordRatio = analysis.newWordCount / analysis.totalWordCount;
        const newWordRatioPct = (newWordRatio * 100).toFixed(1);
        return [
            `New words: ${analysis.newWordCount}/${analysis.totalWordCount} (${newWordRatioPct}%)`,
            `Difficulty: ${difficulty}`
        ];
    }

    _getNewWordSection(analysis) {
        return analysis.newWords ?
            ['= New words ='].concat(analysis.newWords) : [];
    }

    _convertToString(sections) {
        return sections.filter(section => section.length > 0)
            .map(section => section.join('\n'))
            .join(SECTION_SEPARATOR);
    }
}

module.exports = AnalysisFormatter;
