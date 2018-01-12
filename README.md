
[![Build Status](https://travis-ci.org/ryu1kn/build-dictionary.svg?branch=master)](https://travis-ci.org/ryu1kn/build-dictionary)

# Build Dictionary

## Usage

```sh
$ node analyse-article article.txt --dictionary dictionary.txt
New words: 3/150 (2.0%)
Difficulty: Easy

= New words =
haze
Turnbull
glibly
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
$ cat dictionary.txt
this
file
is
a
dictionary
```

## Deploying System

This is currently not integrated into the build pipeline.

```sh
$ BUILD_NUMBER=build-number AWS_REGION=deploy-region ENV_NAME=env-name ./deploy-system.sh
```

Currently the webapp version is just a hello world app
