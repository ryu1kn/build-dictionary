import {ArticleAnalyserFactory} from './article-analyser-factory'
import {ReportGenerator} from './report-generator'
import {Dictionary} from './dictionary'
import {DifficultyRater} from './difficulty-rater'
import { ReadFile, Logger } from './types'
import minimist = require('minimist')

export class AnalyseArticleCommand {
  constructor(private readonly readFile: ReadFile,
              private readonly logger: Logger) {
  }

  async execute (argv: string[]) {
    const parsedArgv = minimist(argv.slice(2))
    const dictionaryPath = parsedArgv.dictionary
    const articlePath = parsedArgv._[0]

    const dictionary = new Dictionary(dictionaryPath, this.readFile)
    const articleAnalyser = new ArticleAnalyserFactory().create(dictionary)
    const article = await this.readFile(articlePath)
    const analysis = await articleAnalyser.analyse(article)
    const difficulty = new DifficultyRater().rate(analysis)
    this.logger.log(new ReportGenerator().generate(analysis, difficulty))
  }
}
