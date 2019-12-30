import {AnalyseArticleCommand} from './lib/analyse-article-command'
import {promises as fs} from 'fs'

const readFile = path => fs.readFile(path, { encoding: 'utf8' })
const command = new AnalyseArticleCommand(readFile, console)
command.execute(process.argv)
