#!/bin/bash
FILTER='.nodes[] | "node mainnet-transfer-tokens --txsPerNode=$TXS_PER_NODE --nodeIP=\"\(.service_endpoints[0].ip_address_v4)\" --nodeAccountNumber=\(.node_account_id | split(".") | last) --nodeId=\(.node_id) & # curl --silent \"https://mainnet-public.mirrornode.hedera.com/api/v1/network/nodes?node.id=\(.node_id)\" | jq \".nodes[].service_endpoints\""'
SCRIPT_FILENAME="mainnet-transfer-tokens.sh"



cat > $SCRIPT_FILENAME << EOF
#!/bin/bash
# Run with:
#
# ./$SCRIPT_FILENAME <number>
#
# Where <number> is the number of transactions you want to send to each consensus node.
# Hint: consider trying with a single transaction to check for consensus nodes availability before going all-in.

TXS_PER_NODE=\$1

EOF

# I know, I know, but please bear ;)
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:0&node.id=lte:10"  | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:11&node.id=lte:20" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:21&node.id=lte:30" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:31&node.id=lte:40" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:41&node.id=lte:50" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:51&node.id=lte:60" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:61&node.id=lte:70" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:71&node.id=lte:80" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:81&node.id=lte:90" | jq -r "$FILTER" >> $SCRIPT_FILENAME
curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?limit=10&node.id=gte:91&node.id=lte:100" | jq -r "$FILTER" >> $SCRIPT_FILENAME

cat >> $SCRIPT_FILENAME << EOF

echo "Waiting artificially 20 seconds (just in case) for all the processes to finish." &
sleep 20
EOF

chmod +x $SCRIPT_FILENAME

cat << EOF
# Script $SCRIPT_FILENAME created!
# Run with:
#
# ./$SCRIPT_FILENAME <number>
#
# Where <number> is the number of transactions you want to send to each consensus node.
# Hint: consider trying with a single transaction to check for consensus nodes availability before going all-in.
EOF
