require("dotenv").config();
const {
    Client,
    TokenCreateTransaction,
    TokenType,
    TokenSupplyType,
    PrivateKey,
    PublicKey
} = require("@hashgraph/sdk");

async function main() {
    const payerAccountID = process.env.PAYER_ACCOUNT_ID;
    const payerPrivateKey = process.env.PAYER_PRIVATE_KEY;

    const client = Client.forTestnet();
    client.setOperator(payerAccountID, payerPrivateKey);

    let tokenCreateTx = await new TokenCreateTransaction()
        .setTokenName("BLK")
        .setTokenSymbol("BLK")
        .setTokenType(TokenType.FungibleCommon)
        .setDecimals(0)
        .setInitialSupply(1000000000)
        .setTreasuryAccountId(payerAccountID)
        .setAdminKey(PrivateKey.fromStringDer(payerPrivateKey))
        .setSupplyType(TokenSupplyType.Infinite)
        .setSupplyKey(PrivateKey.fromStringDer(payerPrivateKey))
        .freezeWith(client);

    let tokenCreateSign = await tokenCreateTx.sign(PrivateKey.fromStringDer(payerPrivateKey));
    let tokenCreateSubmit = await tokenCreateSign.execute(client);
    let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);
    let tokenId = tokenCreateRx.tokenId;
    console.log(`- Created token with ID: ${tokenId} \n`);
    process.exit(0)
}

main();
