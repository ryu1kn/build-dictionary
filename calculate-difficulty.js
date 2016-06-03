
const DifficultyCalculatorFactory = require('./lib/difficulty-calculator-factory');
const CalculateDifficultyCommand = require('./lib/calculate-difficulty-command');

const command = new CalculateDifficultyCommand({
    difficultyCalculatorFactory: new DifficultyCalculatorFactory(),
    fs: require('fs'),
    logger: console
});
command.execute(process.argv);
