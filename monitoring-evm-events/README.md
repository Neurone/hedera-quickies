# Monitoring EVM events

A tool for monitoring EVM smart contract events on the Hedera network. This project provides scripts to send transactions to a smart contract and continuously monitor emitted events with a configurable block delay for finality.

## Overview

The monitoring system consists of two main components:

- **Event Monitor** (`check-events.sh`): Continuously polls for events from a smart contract, tracking transactions that emit events
- **Transaction Sender** (`send-transactions.sh`): Sends transactions to a smart contract with automatic nonce management

The monitor waits 30 blocks behind the current block to ensure event finality before processing, and maintains state across runs by tracking the last examined block.

## Prerequisites

- [Foundry's `cast`](https://book.getfoundry.sh/cast/) command-line tool
- `jq` for JSON processing
- `bc` for arithmetic operations
- A private key with sufficient balance for sending transactions

## Setup

1. Set your private key as an environment variable:

   ```zsh
   export PK=your_private_key_here
   ```

## Usage

### Monitor Events Continuously

Listen for events on a smart contract (polls every 5 seconds):

```zsh
for (( ; ; )); do ./check-events.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433; sleep 5; done
```

### Send Test Transactions

Send a single transaction that triggers an event:

```zsh
./send-transactions.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433 0x4b957ca8
```

Send a single transaction that does not trigger an event:

```zsh
./send-transactions.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433 0x16e7c5bc
```

Send 1000 transactions with random delays (0.5-1 second between transactions):

```zsh
for (( i=1; i<=1000; i++)); do ./send-transactions.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433 0x4b957ca8; sleep 0.$(shuf -i 50-99 -n 1); done
```

## How It Works

### check-events.sh

- Queries the current block number
- Calculates a safe examination range (30 blocks behind current)
- Retrieves all events from the specified contract in that range
- Extracts transaction hashes and appends them to `data/transactions_seen_in_events`
- Updates `data/last_examined_block` to track progress

### send-transactions.sh

- Manages transaction nonces automatically in `data/nonce`
- Sends transactions asynchronously for better performance
- Logs all sent transaction details to `data/transactions_sent`
