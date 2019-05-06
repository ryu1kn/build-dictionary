#!/bin/bash

set -euo pipefail

MODULES=(`cat ./module-deploy-order.txt | grep -v '^#' | tac`)

for MODULE in ${MODULES[*]} ; do
    (cd modules/$MODULE && yarn run destroy --env $ENV_NAME --region ap-southeast-2)
done
