
const WordExtractor = require('../../lib/word-extractor');

describe('WordExtractor', () => {

    it('extracts a list of words from a text', () => {
        const wordExtractor = new WordExtractor();
        const text = 'this is a text';
        expect(wordExtractor.extract(text)).to.be.eql([
            'this', 'is', 'a', 'text'
        ]);
    });

    it('sees "newline" is not a part of a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'a\nb\n\nc';
        expect(wordExtractor.extract(text)).to.be.eql([
            'a', 'b', 'c'
        ]);
    });

    it('sees "," is not a part of a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'this is, great';
        expect(wordExtractor.extract(text)).to.be.eql([
            'this', 'is', 'great'
        ]);
    });

    it('sees "." is not a part of a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'ok. great';
        expect(wordExtractor.extract(text)).to.be.eql([
            'ok', 'great'
        ]);
    });

    it('sees "?" is not a part of a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'Why not?';
        expect(wordExtractor.extract(text)).to.be.eql([
            'Why', 'not'
        ]);
    });

    it('sees "#" is not a part of a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'test #comment';
        expect(wordExtractor.extract(text)).to.be.eql([
            'test', 'comment'
        ]);
    });

    it('sees \'"\" is not a part of a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'thought "why not"';
        expect(wordExtractor.extract(text)).to.be.eql([
            'thought', 'why', 'not'
        ]);
    });

    it('sees numbers are not a word', () => {
        const wordExtractor = new WordExtractor();
        const text = '1 word 23';
        expect(wordExtractor.extract(text)).to.be.eql([
            'word'
        ]);
    });

    it('sees isolated "-" is not a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'melbourne - sydney';
        expect(wordExtractor.extract(text)).to.be.eql([
            'melbourne', 'sydney'
        ]);
    });

    it('sees time is not a word', () => {
        const wordExtractor = new WordExtractor();
        const text = 'at 6:03PM tomorrow';
        expect(wordExtractor.extract(text)).to.be.eql([
            'at', 'tomorrow'
        ]);
    });
});
