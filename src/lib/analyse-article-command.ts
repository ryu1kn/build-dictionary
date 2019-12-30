import {ArticleAnalyserFactory} from './article-analyser-factory'
import {ReportGenerator} from './report-generator'
import {Dictionary} from './dictionary'
import {DifficultyRater} from './difficulty-rater'
const minimist = require('minimist')

export class AnalyseArticleCommand {
  _readFile: (path: string) => Promise<string>
  _logger: any

  constructor (params) {
    this._readFile = params.readFile
    this._logger = params.logger
  }

  async execute (argv) {
    const parsedArgv = minimist(argv.slice(2))
    const dictionaryPath = parsedArgv.dictionary
    const articlePath = parsedArgv._[0]

    const dictionary = new Dictionary({
      readFile: this._readFile,
      filePath: dictionaryPath
    })
    const articleAnalyser = new ArticleAnalyserFactory().create({ dictionary })
    const article = await this._readFile(articlePath)
    const analysis = await articleAnalyser.analyse(article)
    const difficulty = new DifficultyRater().rate(analysis)
    this._logger.log(new ReportGenerator().generate(analysis, difficulty))
  }
}
