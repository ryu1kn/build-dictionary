
const DifficultyCalculator = require('../../lib/difficulty-calculator');

describe('DifficultyCalculator', () => {

    it('calculates the difficulty of an article against your dictionary', () => {
        const article = 'this is an article';
        const dictionary = article.split(' ');
        const difficultyCalculator = new DifficultyCalculator({dictionary});
        const result = difficultyCalculator.calculate(article);
        expect(result).to.be.eql({difficulty: 'easy'});
    });

    it('calculates the difficulty of an article against your dictionary', () => {
        const article = 'this is an article';
        const dictionary = 'this is an'.split(' ');
        const difficultyCalculator = new DifficultyCalculator({dictionary});
        const result = difficultyCalculator.calculate(article);
        expect(result).to.be.eql({difficulty: 'difficult'});
    });
});
