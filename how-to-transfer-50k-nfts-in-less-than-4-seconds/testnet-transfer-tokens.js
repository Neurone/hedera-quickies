
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

  let transactionsPerNode = argv("txsPerNode") ? argv("txsPerNode") : 1
  let tokenId = argv("tokenId") ? argv("tokenId") : "0.0.4367422";
  let nodeIP = argv("nodeIP") ? argv("nodeIP") : ""
  let nodeAccountNumber = argv("nodeAccountNumber") ? argv("nodeAccountNumber") : ""
  let nodeIPAndPort = nodeIP + ":50211"

  let node
  eval("node = { \"" + nodeIPAndPort + "\": new AccountId(" + nodeAccountNumber + ") }")
  let client = Client.forNetwork(node).setOperator(payerAccountID, payerPrivateKey)

  console.log("Creating and signing", transactionsPerNode, "transactions for token", tokenId)
  let txs = []

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
      .freezeWith(client)
    await tx.sign(PrivateKey.fromStringDer(payerPrivateKey))
    txs[txIndex] = tx
  }

  console.log("Fire and forget all the batches to", nodeIPAndPort, nodeAccountNumber)

  for (let txIndex = 0; txIndex < txs.length; txIndex++) {
    try {
      txs[txIndex].execute(client);
      console.log(txs[txIndex].transactionId.toString(), nodeIPAndPort, nodeAccountNumber)
    } catch (error) {
      console.error("Error ", txIndex, "(txIndex")
    }
  }

  console.log("Waiting 30 seconds, so NodeJS does not shutdown")
  await new Promise(resolve => setTimeout(resolve, 30000));
  console.log("Node ID", nodeAccountNumber, "completed")
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
