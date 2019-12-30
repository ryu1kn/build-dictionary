import {ArticleAnalyserFactory} from './article-analyser-factory'
import {ReportGenerator} from './report-generator'
import {Dictionary} from './dictionary'
import {DifficultyRater} from './difficulty-rater'
import {FileReader} from './file-reader'
const minimist = require('minimist')

export class AnalyseArticleCommand {
  _fs: any
  _logger: any

  constructor (params) {
    this._fs = params.fs
    this._logger = params.logger
  }

  async execute (argv) {
    const parsedArgv = minimist(argv.slice(2))
    const dictionaryPath = parsedArgv.dictionary
    const articlePath = parsedArgv._[0]

    const fileReader = new FileReader({ fs: this._fs })
    const dictionary = new Dictionary({
      fileReader,
      filePath: dictionaryPath
    })
    const articleAnalyser = new ArticleAnalyserFactory().create({ dictionary })
    const article = await fileReader.read(articlePath)
    const analysis = await articleAnalyser.analyse(article)
    const difficulty = new DifficultyRater().rate(analysis)
    this._logger.log(new ReportGenerator().generate(analysis, difficulty))
  }
}
