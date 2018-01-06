const ArticleAnalyserFactory = require('./article-analyser-factory')
const ReportGenerator = require('./report-generator')
const Dictionary = require('./dictionary')
const DifficultyRater = require('./difficulty-rater')
const minimist = require('minimist')
const util = require('util')

class AnalyseArticleCommand {
  constructor (params) {
    this._fs = params.fs
    this._logger = params.logger
  }

  async execute (argv) {
    const parsedArgv = minimist(argv.slice(2))
    const dictionaryPath = parsedArgv.dictionary
    const articlePath = parsedArgv._[0]

    const dictionary = new Dictionary({
      fs: this._fs,
      filePath: dictionaryPath
    })
    const articleAnalyser = new ArticleAnalyserFactory().create({ dictionary })

    const readFile = util.promisify(this._fs.readFile)
    const article = await readFile(articlePath, { encoding: 'utf8' })
    const analysis = await articleAnalyser.analyse(article)
    const difficulty = new DifficultyRater().rate(analysis)
    this._logger.log(new ReportGenerator().generate(analysis, difficulty))
  }
}

module.exports = AnalyseArticleCommand
