#!/bin/bash

set -euo pipefail

this_dir="$(dirname "$0")"
emphasize='\e[1;31m'
reset='\e[0m'

expected=$(cat << EOF
New words: 1/3 (33.3%)
Difficulty: Very difficult

= New words =
unknown
EOF
)

yarn run compile
actual=$("$this_dir/../bin/analyse-article" --dictionary fixtures/dictionary.txt fixtures/article.txt)

if [[ "$actual" = "$expected" ]] ; then
    echo '...Passed 👍'
else
    printf "${emphasize}Expected${reset} \"%s\"\n\n${emphasize}But got${reset} \"%s\"\n" "$expected" "$actual"
    exit 1
fi
