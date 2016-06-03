
const ArticleAnalyserFactory = require('./lib/article-analyser-factory');
const AnalyseArticleCommand = require('./lib/analyse-article-command');
const AnalysisFormatter = require('./lib/analysis-formatter');

const command = new AnalyseArticleCommand({
    analysisFormatter: new AnalysisFormatter(),
    articleAnalyserFactory: new ArticleAnalyserFactory(),
    fs: require('fs'),
    logger: console
});
command.execute(process.argv);
