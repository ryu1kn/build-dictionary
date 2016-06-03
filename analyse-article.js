
const ArticleAnalyserFactory = require('./lib/article-analyser-factory');
const AnalyseArticleCommand = require('./lib/analyse-article-command');

const command = new AnalyseArticleCommand({
    articleAnalyserFactory: new ArticleAnalyserFactory(),
    fs: require('fs'),
    logger: console
});
command.execute(process.argv);
