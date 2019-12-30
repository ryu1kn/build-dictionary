import {AnalyseArticleCommand} from './lib/analyse-article-command'

const command = new AnalyseArticleCommand({
  fs: require('fs'),
  logger: console
})
command.execute(process.argv)
