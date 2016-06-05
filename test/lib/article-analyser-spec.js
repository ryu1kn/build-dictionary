
const _ = require('lodash');
const ArticleAnalyser = require('../../lib/article-analyser');

describe('ArticleAnalyser', () => {

    it('counts new words in a given text', () => {
        const article = 'this is an article';
        const dictionary = stubDictionary(['this', 'is', 'an']);
        const wordExtractor = {extract: text => text.split(' ')};
        const articleAnalyser = new ArticleAnalyser({dictionary, wordExtractor});
        const result = articleAnalyser.analyse(article);
        expect(result).to.be.eql({
            newWordCount: 1,
            newWords: ['article'],
            totalWordCount: 4
        });
    });

    function stubDictionary(knownWords) {
        return {exists: _.includes.bind(null, knownWords)};
    }
});
