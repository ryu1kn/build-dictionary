
const ArticleAnalyserFactory = require('./lib/article-analyser-factory');
const AnalyseArticleCommand = require('./lib/analyse-article-command');
const AnalysisFormatter = require('./lib/analysis-formatter');
const DifficultyRater = require('./lib/difficulty-rater');

const command = new AnalyseArticleCommand({
    analysisFormatter: new AnalysisFormatter(),
    articleAnalyserFactory: new ArticleAnalyserFactory(),
    difficultyRater: new DifficultyRater(),
    fs: require('fs'),
    logger: console
});
command.execute(process.argv);
