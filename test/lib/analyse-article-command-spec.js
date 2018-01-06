const AnalyseArticleCommand = require('../../lib/analyse-article-command')

describe('AnalyseArticleCommand', () => {
  it('analyse the difficulty of an article based on the dictionary', async () => {
    const fs = stubFs([
      ['DICTIONARY_PATH', 'word1\nword2'],
      ['ARTICLE_PATH', 'word1\nunknown\nword2']
    ])
    const logger = { log: sinon.spy() }
    const analyseArticleCommand = new AnalyseArticleCommand({
      fs: fs,
      logger: logger
    })
    const argv = [
      'node',
      'SCRIPT_NAME',
      '--dictionary',
      'DICTIONARY_PATH',
      'ARTICLE_PATH'
    ]
    await analyseArticleCommand.execute(argv)
    expect(logger.log).to.have.been.calledWith(
      [
        'New words: 1/3 (33.3%)',
        'Difficulty: Very difficult',
        '',
        '= New words =',
        'unknown'
      ].join('\n')
    )
  })

  function stubFs (pathContentsPairs) {
    const fileReadOptions = { encoding: 'utf8' }
    const readFile = sinon.stub()
    pathContentsPairs.forEach(pathContentsPair => {
      readFile
        .withArgs(pathContentsPair[0], fileReadOptions)
        .callsArgWith(2, null, pathContentsPair[1])
    })
    return { readFile }
  }
})
