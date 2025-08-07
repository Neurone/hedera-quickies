# Hedera quickies

Quick tests with the Hedera network

## Scripts

Send thousands of transactions in parallel, each transaction carries 9 NFT transfers.

The following command will send 100 transactions to each consensus node.
In this moment there are 31 CNs, so 3,100 txs that will execute 27,900 NFT transfers.

```bash
./mainnet-transfer-tokens.sh 100
```

You can update the above script with the latest consensus node information using the following command:

```bash
❯ ./create-script-mainnet-transfer-tokens.sh
# Script mainnet-transfer-tokens.sh created!
# Run with:
#
# ./mainnet-transfer-tokens.sh <number>
#
# Where <number> is the number of transactions you want to send to each consensus node.
# Hint: consider trying with a single transaction to check for consensus nodes availability before going all-in.
```

## Hint

Consider trying with a single transaction to check for consensus nodes availability before going all-in.
In case some CN does not respond, comment that line in the main script or find and set another IP reading the `service_endpoints` field, for example:

```zsh
❯ curl --silent "https://mainnet.mirrornode.hedera.com/api/v1/network/nodes?node.id=3" | jq ".nodes[].service_endpoints"
[
  {
    "domain_name": "",
    "ip_address_v4": "13.52.108.243",
    "port": 50211
  },
  {
    "domain_name": "",
    "ip_address_v4": "13.52.108.243",
    "port": 50212
  },
  {
    "domain_name": "",
    "ip_address_v4": "35.199.161.108",
    "port": 50211
  },
  {
    "domain_name": "",
    "ip_address_v4": "35.199.161.108",
    "port": 50212
  }
]
```

## Real-world examples

Below you can see the details of sending 5,100 transactions (or 45,900 NFT transfers), 100% success - 0% fails, in 3.6 seconds:

That's about 1,500 TPS. It's not a network limit; I just computed the maximum transactions I can send without needing to top up my current account balance at the time.

- The first transaction reached consensus at [5:49:35.8316 PM on August 7, 2025 GMT+2](https://hashscan.io/mainnet/transaction/1754581775.831676000).
- The last transaction reached consensus at [5:49:39.4159 PM on August 7, 2025 GMT+2](https://hashscan.io/mainnet/transaction/1754581779.415959000).
- Blocks involved: [82936680](https://hashscan.io/mainnet/block/82936680), [82936681](https://hashscan.io/mainnet/block/82936681), [82936682](https://hashscan.io/mainnet/block/82936682)

```zsh
❯ ./mainnet-transfer-tokens.sh 170
Waiting artificially 20 seconds (just in case) for all the processes to finish.
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Creating and signing 170 transactions for token 0.0.5946044
Fire and forget all the batches to 34.239.82.6:50211 nodeId: 0 nodeAccount: 3 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 13.56.4.96:50211 nodeId: 24 nodeAccount: 27 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 13.52.108.243:50211 nodeId: 3 nodeAccount: 6 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 3.130.52.236:50211 nodeId: 1 nodeAccount: 4 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 141.94.175.187:50211 nodeId: 15 nodeAccount: 18 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 3.18.91.176:50211 nodeId: 20 nodeAccount: 23 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 3.114.54.4:50211 nodeId: 4 nodeAccount: 7 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 217.76.57.165:50211 nodeId: 28 nodeAccount: 31 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 18.168.4.59:50211 nodeId: 16 nodeAccount: 19 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 35.177.162.180:50211 nodeId: 9 nodeAccount: 12 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 34.16.139.248:50211 nodeId: 31 nodeAccount: 34 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 34.82.78.255:50211 nodeId: 17 nodeAccount: 20 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 13.200.238.211:50211 nodeId: 30 nodeAccount: 33 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 34.64.141.166:50211 nodeId: 19 nodeAccount: 22 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 13.36.123.209:50211 nodeId: 18 nodeAccount: 21 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 35.183.66.150:50211 nodeId: 5 nodeAccount: 8 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 3.121.238.26:50211 nodeId: 12 nodeAccount: 15 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 3.248.27.48:50211 nodeId: 7 nodeAccount: 10 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 34.201.177.212:50211 nodeId: 27 nodeAccount: 30 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 155.204.19.218:50211 nodeId: 32 nodeAccount: 35 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 13.232.240.207:50211 nodeId: 22 nodeAccount: 25 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 34.142.71.129:50211 nodeId: 26 nodeAccount: 29 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 34.215.192.104:50211 nodeId: 10 nodeAccount: 13 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 18.139.47.5:50211 nodeId: 25 nodeAccount: 28 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 35.236.2.27:50211 nodeId: 11 nodeAccount: 14 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 18.232.251.19:50211 nodeId: 14 nodeAccount: 17 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 3.20.81.230:50211 nodeId: 29 nodeAccount: 32 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 35.181.158.250:50211 nodeId: 6 nodeAccount: 9 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 95.216.139.215:50211 nodeId: 34 nodeAccount: 37 and waiting 10 seconds before closing the process (just in case)
Fire and forget all the batches to 18.135.7.211:50211 nodeId: 21 nodeAccount: 24 and waiting 10 seconds before closing the process (just in case)
Node Account 6 connection closed.
Node Account 27 connection closed.
Node Account 4 connection closed.
Node Account 18 connection closed.
Node Account 23 connection closed.
Node Account 7 connection closed.
Node Account 31 connection closed.
Node Account 19 connection closed.
Node Account 34 connection closed.
Node Account 12 connection closed.
Node Account 22 connection closed.
Node Account 21 connection closed.
Node Account 20 connection closed.
Node Account 33 connection closed.
Node Account 8 connection closed.
Node Account 15 connection closed.
Node Account 30 connection closed.
Node Account 25 connection closed.
Node Account 29 connection closed.
Node Account 13 connection closed.
Node Account 35 connection closed.
Node Account 14 connection closed.
Node Account 17 connection closed.
Node Account 32 connection closed.
Node Account 9 connection closed.
Node Account 37 connection closed.
Node Account 24 connection closed.
Node Account 3 connection closed.
Node Account 10 connection closed.
Node Account 28 connection closed.
```

## Miscellanea

```text
Mainnet (probably not updated, use create-script-mainnet-transfer-tokens.sh to refresh the script)
LG                          0    0.0.3         {"35.237.200.180"}: new AccountId(3)},
Swirlds                     1    0.0.4         {"35.186.191.247"}: new AccountId(4)},
FIS                         2    0.0.5         {"35.192.2.25"}: new AccountId(5)},
Wipro                       3    0.0.6         {"35.199.161.108"}: new AccountId(6)},
Nomura                      4    0.0.7         {"35.203.82.240"}: new AccountId(7)},
Google                      5    0.0.8         {"35.236.5.219"}: new AccountId(8)},
Zain                        6    0.0.9         {"35.197.192.225"}: new AccountId(9)},
Magalu                      7    0.0.10        {"35.242.233.154"}: new AccountId(10)},
Boeing                      8    0.0.11        {"35.240.118.96"}: new AccountId(11)},
DLA Piper                   9    0.0.12        {"35.204.86.32"}: new AccountId(12)},
Tata Communications        10    0.0.13        {"35.234.132.107"}: new AccountId(13)},
IBM                        11    0.0.14        {"35.236.2.27"}: new AccountId(14)},
Deutsche Telekom           12    0.0.15        {"35.228.11.53"}: new AccountId(15)},
UCL                        13    0.0.16        {"34.91.181.183"}: new AccountId(16)},
Avery Dennison             14    0.0.17        {"34.86.212.247"}: new AccountId(17)},
Dentons                    15    0.0.18        {"141.94.175.187"}: new AccountId(18)},
Standard Bank              16    0.0.19        {"34.89.87.138"}: new AccountId(19)},
Australian Payments Plus   17    0.0.20        {"34.82.78.255"}: new AccountId(20)},
EDF                        18    0.0.21        {"34.76.140.109"}: new AccountId(21)},
Shinhan Bank               19    0.0.22        {"34.64.141.166"}: new AccountId(22)},
Chainlink Labs             20    0.0.23        {"35.232.244.145"}: new AccountId(23)},
LSE                        21    0.0.24        {"34.89.103.38"}: new AccountId(24)},
IIT Madras                 22    0.0.25        {"34.93.112.7"}: new AccountId(25)},
DBS                        23    0.0.26        {"34.87.150.174"}: new AccountId(26)},
ServiceNow                 24    0.0.27        {"34.125.200.96"}: new AccountId(27)},
Ubisoft                    25    0.0.28        {"35.198.220.75"}: new AccountId(28)},
abrdn                      26    0.0.29        {"34.142.71.129"}: new AccountId(29)},
Dell                       27    0.0.30        {"35.234.249.150"}: new AccountId(30)},
COFRA Holding              28    0.0.31        {"217.76.57.165"}: new AccountId(31)},
Hitachi                    29    0.0.32        {"34.86.186.151"}: new AccountId(32)},
Mondelēz International     30    0.0.33        {"5.199.164.101"}: new AccountId(33)},  // wrong?
BitGo                      31    0.0.34        {"64.185.230.146"}: new AccountId(34)}  // wrong?

Testnet
0   0.0.3   0.testnet.hedera.com    34.94.106.61    50.18.132.211
1   0.0.4   1.testnet.hedera.com    35.237.119.55   3.212.6.13
2   0.0.5   2.testnet.hedera.com    35.245.27.193   52.20.18.86
3   0.0.6   3.testnet.hedera.com    34.83.112.116   54.70.192.33
4   0.0.7   4.testnet.hedera.com    34.94.160.4     54.176.199.109
5   0.0.8   5.testnet.hedera.com    34.106.102.218  35.155.49.147
6   0.0.9   6.testnet.hedera.com    34.133.197.230  52.14.252.207
```
