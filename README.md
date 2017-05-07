
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
