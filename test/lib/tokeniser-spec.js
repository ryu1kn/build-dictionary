
const Tokeniser = require('../../lib/tokeniser');

describe('Tokeniser', () => {

    it('extracts a list of words from a text', () => {
        const tokeniser = new Tokeniser();
        const text = 'this is a text';
        expect(tokeniser.tokenise(text)).to.be.eql([
            'this', 'is', 'a', 'text'
        ]);
    });
});
