
'use strict';

class DifficultyRater {

    rate(analysis) {
        const score = analysis.newWordCount / analysis.totalWordCount;
        return score > 0.1  ? 'Very difficult' :
               score > 0.05 ? 'Difficult' :
               score > 0.02 ? 'Medium' : 'Easy';
    }

}

module.exports = DifficultyRater;
