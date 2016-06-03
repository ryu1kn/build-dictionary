
const ArticleAnalyser = require('../../lib/article-analyser');

describe('ArticleAnalyser', () => {

    it('analyses the difficulty of an article against your dictionary', () => {
        const article = 'this is an article';
        const dictionary = 'this is an'.split(' ');
        const wordExtractor = {extract: text => text.split(' ')};
        const articleAnalyser = new ArticleAnalyser({dictionary, wordExtractor});
        const result = articleAnalyser.analyse(article);
        expect(result).to.be.eql({
            newWordCount: 1,
            totalWordCount: 4
        });
    });
});
