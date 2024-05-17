
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
  const payerAccountID = process.env.MAINNET_ACCOUNT_ID;
  const payerPrivateKey = process.env.MAINNET_PRIVATE_KEY;

  let nodes = [
    { "35.237.200.180:50211": new AccountId(3) },
    { "35.186.191.247:50211": new AccountId(4) },
    { "35.192.2.25:50211": new AccountId(5) },
    { "35.199.161.108:50211": new AccountId(6) },
    { "35.203.82.240:50211": new AccountId(7) },
    { "35.236.5.219:50211": new AccountId(8) },
    { "35.197.192.225:50211": new AccountId(9) },
    { "35.242.233.154:50211": new AccountId(10) },
    { "35.240.118.96:50211": new AccountId(11) },
    { "35.204.86.32:50211": new AccountId(12) },
    { "35.234.132.107:50211": new AccountId(13) },
    { "35.236.2.27:50211": new AccountId(14) },
    { "35.228.11.53:50211": new AccountId(15) },
    { "34.91.181.183:50211": new AccountId(16) },
    { "34.86.212.247:50211": new AccountId(17) },
    { "141.94.175.187:50211": new AccountId(18) },
    { "34.89.87.138:50211": new AccountId(19) },
    { "34.82.78.255:50211": new AccountId(20) },
    { "34.76.140.109:50211": new AccountId(21) },
    { "34.64.141.166:50211": new AccountId(22) },
    { "35.232.244.145:50211": new AccountId(23) },
    { "34.89.103.38:50211": new AccountId(24) },
    { "34.93.112.7:50211": new AccountId(25) },
    { "34.87.150.174:50211": new AccountId(26) },
    { "34.125.200.96:50211": new AccountId(27) },
    { "35.198.220.75:50211": new AccountId(28) },
    { "34.142.71.129:50211": new AccountId(29) },
    //   { "35.234.249.150:50211": new AccountId(30) },
    { "217.76.57.165:50211": new AccountId(31) },
    { "34.86.186.151:50211": new AccountId(32) },
    //{ "5.199.164.101:50211": new AccountId(33) },
    // { "64.185.230.146:50211": new AccountId(34) }
  ]

  let transactionsPerNode = argv("txsPerNode") ? argv("txsPerNode") : 1;
  let tokenId = argv("tokenId") ? argv("tokenId") : "0.0.5946044";

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
        .addTokenTransfer(tokenId, "5946056", 1)
        .addTokenTransfer(tokenId, "5946057", 1)
        .addTokenTransfer(tokenId, "5946058", 1)
        .addTokenTransfer(tokenId, "5946059", 1)
        .addTokenTransfer(tokenId, "5946061", 1)
        .addTokenTransfer(tokenId, "5946063", 1)
        .addTokenTransfer(tokenId, "5946064", 1)
        .addTokenTransfer(tokenId, "5946065", 1)
        .addTokenTransfer(tokenId, "5946120", 1)
        .addTokenTransfer(tokenId, "1015695", -9)
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

  console.log("Waiting 15 seconds, so NodeJS does not shutdown")
  await new Promise(resolve => setTimeout(resolve, 15000));
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
