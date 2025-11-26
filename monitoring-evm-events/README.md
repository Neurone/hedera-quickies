# Monitoring EVM events

```zsh
# These are ZSH scripts

# Listen for events on the contract
for (( ; ; )); do ./check-events.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433; sleep 5; done

# Send 1000 transactions (sleep time between 0.5 and 1 second)
export PK=...
for (( i=1; i<=1000; i++)); do ./send-transactions.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433 0x4b957ca8; sleep 0.$(shuf -i 50-99 -n 1); done

# Transaction triggering an event
./send-transactions.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433 0x4b957ca8

# Transaction not triggering any event
./send-transactions.sh 0xeC76DF9C54622968936c484C027d588D7d4f7433 0x16e7c5bc
```
