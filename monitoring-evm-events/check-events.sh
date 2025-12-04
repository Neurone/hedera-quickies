#!/bin/bash

set -euo pipefail

address=$1 # smart contract to monitor
blocks_behind=30 # number of blocks to wait before considering the events

current_block=$(cast block -f number)
examine_up_to_block=$(echo "$current_block - $blocks_behind" | bc)

if [ ! -f data/last_examined_block ]; then echo $(echo "$examine_up_to_block - 2" | bc) > data/last_examined_block; fi
from_block=$(echo "$(cat data/last_examined_block) + 1" | bc)

echo $(date -u +"%Y-%m-%dT%H:%M:%S") Reading events for $address from $from_block to $examine_up_to_block
cast logs --json --from-block $from_block --to-block $examine_up_to_block --address $address |\
    jq -r ".[].transactionHash" |\
    tee -a data/transactions_seen_in_events

echo $examine_up_to_block > data/last_examined_block
