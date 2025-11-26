//node mainnet-prepare-test-scenario.js --tokenId=4368175
require("dotenv").config();
const {
    Client,
    PrivateKey,
    AccountCreateTransaction,
    Hbar,
    TokenAssociateTransaction
} = require("@hashgraph/sdk");

async function main() {
    const payerAccountID = process.env.MAINNET_ACCOUNT_ID;
    const payerPrivateKey = process.env.MAINNET_PRIVATE_KEY;

    let tokenId

    if (argv("tokenId")) {
        tokenId = argv("tokenId")
    } else {
        console.error("Specify tokenId")
        process.exit(-1)
    }

    const client = Client.forMainnet();
    client.setOperator(payerAccountID, payerPrivateKey);

    const newAccountPrivateKey = PrivateKey.generateED25519();
    const newAccountPublicKey = newAccountPrivateKey.publicKey;

    const newAccount = await new AccountCreateTransaction()
        .setKey(newAccountPublicKey)
        .setInitialBalance(Hbar.fromTinybars(200_000_000))
        .execute(client);
    const getReceipt = await newAccount.getReceipt(client);
    const newAccountId = getReceipt.accountId;

    console.log("New account ID:", newAccountId.toString());
    console.log("Private key:", newAccountPrivateKey.toStringDer())

    let associateTx = await new TokenAssociateTransaction()
        .setAccountId(newAccountId)
        .setTokenIds([tokenId])
        .freezeWith(client)
        .sign(newAccountPrivateKey);
    let txSubmit = await associateTx.execute(client);
    let receipt = await txSubmit.getReceipt(client);
    console.log(`Token association: ${receipt.status}`);

    process.exit(0)
}

const argv = (key) => {
    if (process.argv.includes(`--${key}`)) return true; // Return true if the key exists and a value is undefined
    const value = process.argv.find((element) => element.startsWith(`--${key}=`));
    if (!value) return null; // Return null if the key does not exist and a value is undefined
    return value.replace(`--${key}=`, "");
};

main();