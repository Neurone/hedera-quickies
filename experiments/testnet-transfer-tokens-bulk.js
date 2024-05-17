
require("dotenv").config();
const {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalanceQuery,
  Hbar,
  TransferTransaction,
  TokenId,
  AccountId
} = require("@hashgraph/sdk");

async function main() {

  const payerAccountID = process.env.PAYER_ACCOUNT_ID;
  const payerPrivateKey = process.env.PAYER_PRIVATE_KEY;

  let nodes = [{ "34.94.106.61:50211": new AccountId(3) }, { "35.237.119.55:50211": new AccountId(4) }, { "35.245.27.193:50211": new AccountId(5) }, { "34.83.112.116:50211": new AccountId(6) }, { "34.94.160.4:50211": new AccountId(7) }, { "34.106.102.218:50211": new AccountId(8) }, { "34.133.197.230:50211": new AccountId(9) }]

  let transactionsPerNode = argv("txsPerNode") ? argv("txsPerNode") : 0;
  let tokenId = argv("tokenId") ? argv("tokenId") : "0.0.4367422";

  // Build one client for each consensus node
  let clients = []
  nodes.forEach(node => {
    clients.push(Client.forNetwork(node).setOperator(payerAccountID, payerPrivateKey))
  });

  // Create a batch of transactions for each node
  console.log("Creating and signing transaction batches for token", tokenId, "(total", clients.length * transactionsPerNode, "transactions, distributed through", clients.length, "batches with", transactionsPerNode, "transactions each")
  let txs = createArray(clients.length, transactionsPerNode)
  for (let clientIndex = 0; clientIndex < clients.length; clientIndex++) {
    const element = clients[clientIndex];
    for (let txIndex = 0; txIndex < transactionsPerNode; txIndex++) {
      let tx = await new TransferTransaction()
        .addTokenTransfer(tokenId, "4366457", 1)
        .addTokenTransfer(tokenId, "4366458", 1)
        .addTokenTransfer(tokenId, "4366460", 1)
        .addTokenTransfer(tokenId, "4366461", 1)
        .addTokenTransfer(tokenId, "4366462", 1)
        .addTokenTransfer(tokenId, "4366463", 1)
        .addTokenTransfer(tokenId, "4366464", 1)
        .addTokenTransfer(tokenId, "4366465", 1)
        .addTokenTransfer(tokenId, "4366466", 1)
        .addTokenTransfer(tokenId, "1441", -9)
        .freezeWith(clients[clientIndex])
      await tx.sign(PrivateKey.fromStringDer(payerPrivateKey))
      txs[clientIndex][txIndex] = tx
    }
  }

  console.log("Fire and forget all the batches")
  // Fire and forget all the batches
  for (let clientIndex = 0; clientIndex < clients.length; clientIndex++) {
    const client = clients[clientIndex];
    for (let txIndex = 0; txIndex < txs[clientIndex].length; txIndex++) {
      try {
        txs[clientIndex][txIndex].execute(client);
        console.log(clientIndex, "/", txIndex,)
      } catch (error) {
        console.error("Error ", clientIndex, "/", txIndex, "(clientIndex/txIndex")
      }
    }
  }

  console.log("Waiting 10 seconds, so NodeJS does not shutdown")
  await new Promise(resolve => setTimeout(resolve, 10000));
  process.exit(0)
}

function createArray(length) {
  var arr = new Array(length || 0),
    i = length;
  if (arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments, 1);
    while (i--) arr[length - 1 - i] = createArray.apply(this, args);
  }
  return arr;
}

const argv = (key) => {
  if (process.argv.includes(`--${key}`)) return true; // Return true if the key exists and a value is undefined
  const value = process.argv.find((element) => element.startsWith(`--${key}=`));
  if (!value) return null; // Return null if the key does not exist and a value is undefined
  return value.replace(`--${key}=`, "");
};

main();
