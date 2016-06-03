
const AnalyseArticleCommand = require('../../lib/analyse-article-command');

describe('AnalyseArticleCommand', () => {

    it('analyse the difficulty of an article based on the dictionary', () => {
        const fileReadOptions = {encoding: 'utf8'};
        const fs = {
            readFileSync: new StubBuilder()
                .addReturns(['DICTIONARY_PATH', fileReadOptions], 'DICTIONARY_CONTENTS')
                .addReturns(['ARTICLE_PATH', fileReadOptions], 'ARTICLE_CONTENTS').toStub()
        };
        const articleAnalyser = {
            analyse: new StubBuilder().addReturns('ARTICLE_CONTENTS', {difficulty: 'easy'}).toStub()
        };
        const articleAnalyserFactory = {
            create: new StubBuilder().addReturns({dictionary: 'DICTIONARY_CONTENTS'}, articleAnalyser).toStub()
        };
        const logger = {log: sinon.spy()};
        const analyseArticleCommand = new AnalyseArticleCommand({
            articleAnalyserFactory: articleAnalyserFactory,
            fs: fs,
            logger: logger
        });
        const argv = ['node', 'SCRIPT_NAME', '--dictionary', 'DICTIONARY_PATH', 'ARTICLE_PATH'];
        analyseArticleCommand.execute(argv);
        expect(logger.log).to.have.been.calledWith({difficulty: 'easy'});
    });

});