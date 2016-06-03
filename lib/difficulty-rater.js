
'use strict';

class DifficultyRater {

    rate(analysis) {
        const score = analysis.newWordCount / analysis.totalWordCount;
        return score > 0.2 ? 'Difficult' : 'Easy';
    }

}

module.exports = DifficultyRater;
