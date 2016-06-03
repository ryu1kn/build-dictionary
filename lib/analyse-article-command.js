
'use strict';

const minimist = require('minimist');

class AnalyseArticleCommand {

    constructor(params) {
        this._articleAnalyserFactory = params.articleAnalyserFactory;
        this._analysisFormatter = params.analysisFormatter;
        this._difficultyRater = params.difficultyRater;
        this._fs = params.fs;
        this._logger = params.logger;
    }

    execute(argv) {
        const parsedArgv = minimist(argv.slice(2));
        const dictionaryPath = parsedArgv.dictionary;
        const articlePath = parsedArgv._[0];
        const fileReadOptions = {encoding: 'utf8'};

        const dictionary = this._fs.readFileSync(dictionaryPath, fileReadOptions);
        const articleAnalyser = this._articleAnalyserFactory.create({dictionary});

        const article = this._fs.readFileSync(articlePath, fileReadOptions);
        const analysis = articleAnalyser.analyse(article);
        const difficulty = this._difficultyRater.rate(analysis);
        this._logger.log(this._analysisFormatter.format(analysis, difficulty));
    }

}

module.exports = AnalyseArticleCommand;
