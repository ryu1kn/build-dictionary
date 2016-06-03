
const ArticleAnalyser = require('../../lib/article-analyser');

describe('ArticleAnalyser', () => {

    it('counts new words in a given text', () => {
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

    it('counts the multiple same new words as 1', () => {
        const article = 'new new word';
        const dictionary = ['old', 'word'];
        const wordExtractor = {extract: text => text.split(' ')};
        const articleAnalyser = new ArticleAnalyser({dictionary, wordExtractor});
        const result = articleAnalyser.analyse(article);
        expect(result).to.be.eql({
            newWordCount: 1,
            totalWordCount: 3
        });
    });
});
