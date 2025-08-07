#!/bin/bash
FILTER='.nodes[] | "\(.node_id) \(.node_account_id) \(.service_endpoints[0].ip_address_v4) \(.service_endpoints[0].port)"'
NETWORK_LIST=network_list

echo -n "" > $NETWORK_LIST
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:0&node.id=lte:10"  | jq -r "$FILTER" >> $NETWORK_LIST
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:11&node.id=lte:20" | jq -r "$FILTER" >> $NETWORK_LIST
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:21&node.id=lte:30" | jq -r "$FILTER" >> $NETWORK_LIST
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:31&node.id=lte:40" | jq -r "$FILTER" >> $NETWORK_LIST
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:41&node.id=lte:50" | jq -r "$FILTER" >> $NETWORK_LIST
