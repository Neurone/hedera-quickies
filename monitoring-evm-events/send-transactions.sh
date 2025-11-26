#!/bin/bash

set -euo pipefail

address=$1 # smart contract
calldata=$2 # calldata

if [ ! -f data/nonce ]; then echo $(cast nonce $(cast wallet address $PK)) > data/nonce; fi
nonce=$(cat data/nonce)

cast send $address $calldata --private-key $PK --async --nonce $nonce >> data/transactions_sent

echo $(bc -e "$(cat data/nonce) + 1") > data/nonce
