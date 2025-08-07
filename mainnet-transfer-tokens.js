require("dotenv").config();
const {
  Client,
  AccountId,
  PrivateKey,
  TransferTransaction,
} = require("@hashgraph/sdk");

async function main() {
  const payerAccountID = process.env.MAINNET_ACCOUNT_ID;
  const payerPrivateKey = process.env.MAINNET_PRIVATE_KEY;

  let transactionsPerNode = argv("txsPerNode") ? argv("txsPerNode") : 1;
  let tokenId = argv("tokenId") ? argv("tokenId") : "0.0.5946044";
  let nodeIP = argv("nodeIP") ? argv("nodeIP") : "";
  let nodeAccountNumber = argv("nodeAccountNumber")
    ? argv("nodeAccountNumber")
    : "";
  let nodeId = argv("nodeId") ? argv("nodeId") : "";
  let nodeIPAndPort = nodeIP + ":50211";

  let node;
  eval('node = { "' + nodeIPAndPort + '": "0.0.' + nodeAccountNumber + '" }');
  let client = Client.forNetwork(node).setOperator(
    payerAccountID,
    payerPrivateKey
  );
  client.setMaxAttempts(100);

  console.log(
    "Creating and signing",
    transactionsPerNode,
    "transactions for token",
    tokenId
  );
  let txs = [];

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
      .freezeWith(client);
    txs[txIndex] = await tx.sign(PrivateKey.fromStringDer(payerPrivateKey));
  }

  console.log(
    "Fire and forget all the batches to",
    nodeIPAndPort,
    "nodeId:",
    nodeId,
    "nodeAccount:",
    nodeAccountNumber,
    "and waiting 10 seconds before closing the process (just in case)"
  );
  for (let txIndex = 0; txIndex < txs.length; txIndex++) {
    try {
      txs[txIndex].execute(client);
      //console.log(txs[txIndex].transactionId.toString(), nodeIPAndPort, nodeAccountNumber)
    } catch (error) {
      console.error("Error ", txIndex, "(txIndex");
    }
  }

  // Wait 10 seconds, so NodeJS does not close potentially pending operations
  await new Promise((resolve) => setTimeout(resolve, 10000));
  console.log("Node Account", nodeAccountNumber, "connection closed.");
  process.exit(0);
}

const argv = (key) => {
  if (process.argv.includes(`--${key}`)) return true; // Return true if the key exists and a value is undefined
  const value = process.argv.find((element) => element.startsWith(`--${key}=`));
  if (!value) return null; // Return null if the key does not exist and a value is undefined
  return value.replace(`--${key}=`, "");
};

main();
