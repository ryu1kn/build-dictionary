
const WordExtractor = require('../../lib/word-extractor');

describe('WordExtractor', () => {

    it('extracts a list of words from a text', () => {
        const tokeniser = {tokenise: text => text.split(' ')};
        const wordClassifier = {isWord: token => token !== 'a'};
        const wordExtractor = new WordExtractor({tokeniser, wordClassifier});
        const text = 'this is a text';
        expect(wordExtractor.extract(text)).to.be.eql([
            'this', 'is', 'text'
        ]);
    });

    it('counts the multiple same words as 1', () => {
        const tokeniser = {tokenise: text => text.split(' ')};
        const wordClassifier = {isWord: () => true};
        const wordExtractor = new WordExtractor({tokeniser, wordClassifier});
        const text = 'this is a long long long text';
        expect(wordExtractor.extract(text)).to.be.eql([
            'this', 'is', 'a', 'long', 'text'
        ]);
    });

});
