
'use strict';

class ArticleAnalyser {

    constructor(params) {
        this._dictionary = params.dictionary;
        this._wordExtractor = params.wordExtractor;
    }

    analyse(article) {
        const words = this._wordExtractor.extract(article);
        const newWords = words.filter(word => !this._dictionary.exists(word));
        return {
            newWordCount: newWords.length,
            newWords,
            totalWordCount: words.length
        };
    }

}

module.exports = ArticleAnalyser;
