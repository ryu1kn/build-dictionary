const {AnalyseArticleCommand} = require('./dist/lib/analyse-article-command')

const command = new AnalyseArticleCommand({
  fs: require('fs'),
  logger: console
})
command.execute(process.argv)
