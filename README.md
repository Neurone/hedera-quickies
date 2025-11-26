# Hedera quickies

Quick tests with the Hedera network

## How to transfer 50k NFTS in less than 4 seconds

Below you can see the details of sending 5,100 transactions (or 45,900 NFT transfers), 100% success - 0% fails, in 3.6 seconds:

That's about 1,500 TPS. It's not a network limit; I just computed the maximum transactions I can send without needing to top up my current account balance at the time.

- The first transaction reached consensus at [5:49:35.8316 PM on August 7, 2025 GMT+2](https://hashscan.io/mainnet/transaction/1754581775.831676000).
- The last transaction reached consensus at [5:49:39.4159 PM on August 7, 2025 GMT+2](https://hashscan.io/mainnet/transaction/1754581779.415959000).
- Blocks involved: [82936680](https://hashscan.io/mainnet/block/82936680), [82936681](https://hashscan.io/mainnet/block/82936681), [82936682](https://hashscan.io/mainnet/block/82936682)

See [how-to-transfer-50k-nfts-in-less-than-4-seconds](./how-to-transfer-50k-nfts-in-less-than-4-seconds/README.md) for details.

## Monitoring EVM events

A monitoring tool for tracking EVM smart contract events on the Hedera network in real-time. The project provides scripts to continuously poll for contract events with configurable block delay for finality, and to send test transactions with automatic nonce management. Useful for testing event emission, monitoring contract activity, and verifying transaction processing.

See [monitoring-evm-events](./monitoring-evm-events/README.md) for details.
