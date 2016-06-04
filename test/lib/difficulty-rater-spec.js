
const DifficultyRater = require('../../lib/difficulty-rater');

describe('DifficultyRater', () => {

    it("says it's very difficult to read if new words are more than 10%", () => {
        const difficultyRater = new DifficultyRater();
        const analysis = {newWordCount: 11, totalWordCount: 100};
        expect(difficultyRater.rate(analysis)).to.be.eql('Very difficult');
    });

    it("says it's difficult to read if new words are at most 10%", () => {
        const difficultyRater = new DifficultyRater();
        const analysis = {newWordCount: 10, totalWordCount: 100};
        expect(difficultyRater.rate(analysis)).to.be.eql('Difficult');
    });

    it("says it's medium to read if new words are at most 2%", () => {
        const difficultyRater = new DifficultyRater();
        const analysis = {newWordCount: 5, totalWordCount: 100};
        expect(difficultyRater.rate(analysis)).to.be.eql('Medium');
    });

    it("says it's easy to read if new words are at most 2%", () => {
        const difficultyRater = new DifficultyRater();
        const analysis = {newWordCount: 2, totalWordCount: 100};
        expect(difficultyRater.rate(analysis)).to.be.eql('Easy');
    });
});
