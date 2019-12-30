const td = require('testdouble')

const {AnalyseArticleCommand} = require('../../lib/analyse-article-command')

describe('AnalyseArticleCommand', () => {
  it('analyse the difficulty of an article based on the dictionary', async () => {
    const fs = stubFs([
      ['DICTIONARY_PATH', 'word1\nword2'],
      ['ARTICLE_PATH', 'word1\nunknown\nword2']
    ])
    const logger = td.object('log')
    const analyseArticleCommand = new AnalyseArticleCommand({ fs, logger })
    const argv = [
      'node',
      'SCRIPT_NAME',
      '--dictionary',
      'DICTIONARY_PATH',
      'ARTICLE_PATH'
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

  function stubFs (pathContentsPairs) {
    const fileReadOptions = { encoding: 'utf8' }
    const readFile = td.function('readFile')
    pathContentsPairs.forEach(pathContentsPair => {
      td
        .when(readFile(pathContentsPair[0], fileReadOptions))
        .thenCallback(null, pathContentsPair[1])
    })
    return { readFile }
  }
})
