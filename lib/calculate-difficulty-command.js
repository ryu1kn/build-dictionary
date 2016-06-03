
'use strict';

const minimist = require('minimist');

class CalculateDifficultyCommand {

    constructor(params) {
        this._difficultyCalculatorFactory = params.difficultyCalculatorFactory;
        this._fs = params.fs;
        this._logger = params.logger;
    }

    execute(argv) {
        const parsedArgv = minimist(argv.slice(2));
        const dictionaryPath = parsedArgv.dictionary;
        const articlePath = parsedArgv._[0];
        const fileReadOptions = {encoding: 'utf8'};

        const dictionary = this._fs.readFileSync(dictionaryPath, fileReadOptions);
        const difficultyCalculator = this._difficultyCalculatorFactory.create({dictionary});

        const article = this._fs.readFileSync(articlePath, fileReadOptions);
        this._logger.log(difficultyCalculator.calculate(article));
    }

}

module.exports = CalculateDifficultyCommand;
