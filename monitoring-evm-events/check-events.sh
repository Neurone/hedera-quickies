#!/bin/bash

set -euo pipefail

address=$1 # smart contract to monitor
blocks_behind=30 # number of blocks to wait before considering the events

current_block=$(cast block -f number)
examine_up_to_block=$(bc -e "$current_block - $blocks_behind")

if [ ! -f data/last_examined_block ]; then echo $(bc -e "$examine_up_to_block - 2") > data/last_examined_block; fi
from_block=$(bc -e "$(cat data/last_examined_block) + 1")

echo $(date -u +"%Y-%m-%dT%H:%M:%S") Reading events for $address from $from_block to $examine_up_to_block
cast logs --json --from-block $from_block --to-block $examine_up_to_block --address $address |\
    jq -r ".[].transactionHash" |\
    tee -a data/transactions_seen_in_events

echo $examine_up_to_block > data/last_examined_block
