
const CalculateDifficultyCommand = require('../../lib/calculate-difficulty-command');

describe('CalculateDifficultyCommand', () => {

    it('calculate the difficulty of an article based on the dictionary', () => {
        const fileReadOptions = {encoding: 'utf8'};
        const fs = {
            readFileSync: new StubBuilder()
                .addReturns(['DICTIONARY_PATH', fileReadOptions], 'DICTIONARY_CONTENTS')
                .addReturns(['ARTICLE_PATH', fileReadOptions], 'ARTICLE_CONTENTS').toStub()
        };
        const difficultyCalculator = {
            calculate: new StubBuilder().addReturns('ARTICLE_CONTENTS', {difficulty: 'easy'}).toStub()
        };
        const difficultyCalculatorFactory = {
            create: new StubBuilder().addReturns({dictionary: 'DICTIONARY_CONTENTS'}, difficultyCalculator).toStub()
        };
        const logger = {log: sinon.spy()};
        const calculateDifficultyCommand = new CalculateDifficultyCommand({
            difficultyCalculatorFactory: difficultyCalculatorFactory,
            fs: fs,
            logger: logger
        });
        const argv = ['node', 'SCRIPT_NAME', '--dictionary', 'DICTIONARY_PATH', 'ARTICLE_PATH'];
        calculateDifficultyCommand.execute(argv);
        expect(logger.log).to.have.been.calledWith({difficulty: 'easy'});
    });

});