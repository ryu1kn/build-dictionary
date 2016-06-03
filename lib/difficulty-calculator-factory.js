
'use strict';

const DifficultyCalculator = require('./difficulty-calculator');

class DifficultyCalculatorFactory {

    create(params) {
        return new DifficultyCalculator({dictionary: params.dictionary});
    }
}

module.exports = DifficultyCalculatorFactory;
