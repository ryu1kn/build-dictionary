import * as fs from 'fs'
const td = require('testdouble')

const {AnalyseArticleCommand} = require('../../lib/analyse-article-command')

describe('AnalyseArticleCommand', () => {
  it('analyse the difficulty of an article based on the dictionary', async () => {
    const logger = td.object('log')
    const analyseArticleCommand = new AnalyseArticleCommand({ fs, logger })
    const argv = [
      'node',
      'SCRIPT_NAME',
      '--dictionary',
      'fixtures/dictionary.txt',
      'fixtures/article.txt'
    ]
    await analyseArticleCommand.execute(argv)

    td.verify(
      logger.log(
        [
          'New words: 1/3 (33.3%)',
          'Difficulty: Very difficult',
          '',
          '= New words =',
          'unknown'
        ].join('\n')
      )
    )
  })
})
