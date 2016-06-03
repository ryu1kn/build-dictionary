
const DifficultyRater = require('../../lib/difficulty-rater');

describe('DifficultyRater', () => {

    it('retes the difficulty based on the given article analysis', () => {
        const difficultyRater = new DifficultyRater();
        const analysis = {
            newWordCount: 1,
            totalWordCount: 4
        };
        expect(difficultyRater.rate(analysis)).to.be.eql('Difficult');
    });
});
