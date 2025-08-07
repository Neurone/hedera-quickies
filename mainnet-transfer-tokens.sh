#!/bin/bash
# Run with:
#
# ./mainnet-transfer-tokens.sh <number>
#
# Where <number> is the number of transactions you want to send to each consensus node.
# Hint: consider trying with a single transaction to check for consensus nodes availability before going all-in.

TXS_PER_NODE=$1

node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="34.239.82.6" --nodeAccountNumber=3 --nodeId=0 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=0" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="3.130.52.236" --nodeAccountNumber=4 --nodeId=1 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=1" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="13.52.108.243" --nodeAccountNumber=6 --nodeId=3 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=3" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="3.114.54.4" --nodeAccountNumber=7 --nodeId=4 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=4" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="35.183.66.150" --nodeAccountNumber=8 --nodeId=5 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=5" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="35.181.158.250" --nodeAccountNumber=9 --nodeId=6 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=6" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="3.248.27.48" --nodeAccountNumber=10 --nodeId=7 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=7" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="35.177.162.180" --nodeAccountNumber=12 --nodeId=9 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=9" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="34.215.192.104" --nodeAccountNumber=13 --nodeId=10 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=10" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="35.236.2.27" --nodeAccountNumber=14 --nodeId=11 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=11" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="3.121.238.26" --nodeAccountNumber=15 --nodeId=12 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=12" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="18.232.251.19" --nodeAccountNumber=17 --nodeId=14 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=14" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="141.94.175.187" --nodeAccountNumber=18 --nodeId=15 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=15" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="18.168.4.59" --nodeAccountNumber=19 --nodeId=16 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=16" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="34.82.78.255" --nodeAccountNumber=20 --nodeId=17 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=17" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="13.36.123.209" --nodeAccountNumber=21 --nodeId=18 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=18" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="34.64.141.166" --nodeAccountNumber=22 --nodeId=19 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=19" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="3.18.91.176" --nodeAccountNumber=23 --nodeId=20 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=20" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="18.135.7.211" --nodeAccountNumber=24 --nodeId=21 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=21" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="13.232.240.207" --nodeAccountNumber=25 --nodeId=22 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=22" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="13.56.4.96" --nodeAccountNumber=27 --nodeId=24 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=24" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="18.139.47.5" --nodeAccountNumber=28 --nodeId=25 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=25" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="34.142.71.129" --nodeAccountNumber=29 --nodeId=26 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=26" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="34.201.177.212" --nodeAccountNumber=30 --nodeId=27 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=27" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="217.76.57.165" --nodeAccountNumber=31 --nodeId=28 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=28" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="3.20.81.230" --nodeAccountNumber=32 --nodeId=29 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=29" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="13.200.238.211" --nodeAccountNumber=33 --nodeId=30 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=30" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="34.16.139.248" --nodeAccountNumber=34 --nodeId=31 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=31" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="155.204.19.218" --nodeAccountNumber=35 --nodeId=32 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=32" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="13.134.89.184" --nodeAccountNumber=36 --nodeId=33 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=33" | jq ".nodes[].service_endpoints"
node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP="95.216.139.215" --nodeAccountNumber=37 --nodeId=34 & # curl --silent "https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=34" | jq ".nodes[].service_endpoints"

echo "Waiting artificially 20 seconds (just in case) for all the processes to finish." &
sleep 20
