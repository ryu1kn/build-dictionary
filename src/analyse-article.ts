import {AnalyseArticleCommand} from './lib/analyse-article-command'
import {promises as fs} from 'fs'

const command = new AnalyseArticleCommand({
  readFile: path => fs.readFile(path, { encoding: 'utf8' }),
  logger: console
})
command.execute(process.argv)
