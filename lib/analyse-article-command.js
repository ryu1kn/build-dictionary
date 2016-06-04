
'use strict';

const ArticleAnalyserFactory = require('./article-analyser-factory');
const AnalysisFormatter = require('./analysis-formatter');
const Dictionary = require('./dictionary');
const DifficultyRater = require('./difficulty-rater');
const minimist = require('minimist');

class AnalyseArticleCommand {

    constructor(params) {
        this._fs = params.fs;
        this._logger = params.logger;
    }

    execute(argv) {
        const parsedArgv = minimist(argv.slice(2));
        const dictionaryPath = parsedArgv.dictionary;
        const articlePath = parsedArgv._[0];

        const dictionary = new Dictionary({
            fs: this._fs,
            filePath: dictionaryPath
        });
        const articleAnalyser = new ArticleAnalyserFactory().create({dictionary});

        const article = this._fs.readFileSync(articlePath, {encoding: 'utf8'});
        const analysis = articleAnalyser.analyse(article);
        const difficulty = new DifficultyRater().rate(analysis);
        this._logger.log(new AnalysisFormatter().format(analysis, difficulty));
    }

}

module.exports = AnalyseArticleCommand;
