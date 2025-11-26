#!/bin/bash

set -euo pipefail

address=$1 # smart contract
calldata=$2 # calldata

if [ ! -f data/nonce ]; then echo 585 > data/nonce; fi
nonce=$(bc -e "$(cat data/nonce) + 1")

cast send $address $calldata --private-key $PK --async --nonce $nonce >> data/transactions_sent

echo $nonce > data/nonce