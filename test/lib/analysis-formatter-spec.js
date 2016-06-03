
const AnalysisFormatter = require('../../lib/analysis-formatter');

describe('AnalysisFormatter', () => {

    it('formats analysis', () => {
        const analysisFormatter = new AnalysisFormatter();
        const analysis = {
            newWordCount: 3,
            totalWordCount: 150
        };
        expect(analysisFormatter.format(analysis, 'DIFFICULTY')).to.be.equal([
            'New words: 3/150 (2.0%)',
            'Difficulty: DIFFICULTY'
        ].join('\n'));
    });

});
