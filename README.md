
[![Build Status](https://travis-ci.org/ryu1kn/build-dictionary.svg?branch=master)](https://travis-ci.org/ryu1kn/build-dictionary)

# Build Dictionary

## Usage

```sh
$ bin/analyse-article fixtures/article.txt --dictionary fixtures/dictionary.txt
New words: 1/3 (33.3%)
Difficulty: Very difficult

= New words =
unknown
```

Default threshold. Should be customisable.

```
10 -    : Very difficult
 5 - 10%: Difficult
 2 -  5%: Medium
 0 -  2%: Easy
```

### Dictionary file

A dictionary is just a file containing list of words you already know. One word per line

```sh
$ cat fixtures/dictionary.txt
word1
word2
```

## Deploying System

This is currently not integrated into the build pipeline.

```sh
$ BUILD_NUMBER=build-number AWS_REGION=deploy-region ENV_NAME=env-name ./deploy-system.sh
```

Currently the webapp version is just a hello world app
