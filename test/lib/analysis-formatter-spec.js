
const AnalysisFormatter = require('../../lib/analysis-formatter');

describe('AnalysisFormatter', () => {

    it('formats analysis', () => {
        const analysisFormatter = new AnalysisFormatter();
        const analysis = {
            newWordCount: 3,
            newWords: ['NEW_WORD1', 'NEW_WORD2', 'NEW_WORD3'],
            totalWordCount: 150
        };
        expect(analysisFormatter.format(analysis, 'DIFFICULTY')).to.be.equal([
            'New words: 3/150 (2.0%)',
            'Difficulty: DIFFICULTY',
            '',
            '= New words =',
            'NEW_WORD1',
            'NEW_WORD2',
            'NEW_WORD3'
        ].join('\n'));
    });

});
