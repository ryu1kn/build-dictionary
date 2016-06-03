
const AnalyseArticleCommand = require('../../lib/analyse-article-command');

describe('AnalyseArticleCommand', () => {

    it('analyse the difficulty of an article based on the dictionary', () => {
        const fileReadOptions = {encoding: 'utf8'};
        const fs = {
            readFileSync: new StubBuilder()
                .addReturns(['DICTIONARY_PATH', fileReadOptions], 'DICTIONARY_CONTENTS')
                .addReturns(['ARTICLE_PATH', fileReadOptions], 'ARTICLE_CONTENTS').toStub()
        };
        const articleAnalysis = {newWordCount: 3, totalWordCount: 150};
        const articleAnalyser = {
            analyse: new StubBuilder().addReturns('ARTICLE_CONTENTS', articleAnalysis).toStub()
        };
        const articleAnalyserFactory = {
            create: new StubBuilder().addReturns({dictionary: 'DICTIONARY_CONTENTS'}, articleAnalyser).toStub()
        };
        const difficultyRater = {
            rate: new StubBuilder().addReturns(articleAnalysis, 'DIFFICULTY').toStub()
        };
        const analysisFormatter = {
            format: new StubBuilder().addReturns([articleAnalysis, 'DIFFICULTY'], 'FORMATTED_ANALYSIS').toStub()
        };
        const logger = {log: sinon.spy()};
        const analyseArticleCommand = new AnalyseArticleCommand({
            articleAnalyserFactory: articleAnalyserFactory,
            analysisFormatter: analysisFormatter,
            difficultyRater: difficultyRater,
            fs: fs,
            logger: logger
        });
        const argv = ['node', 'SCRIPT_NAME', '--dictionary', 'DICTIONARY_PATH', 'ARTICLE_PATH'];
        analyseArticleCommand.execute(argv);
        expect(logger.log).to.have.been.calledWith('FORMATTED_ANALYSIS');
    });

});