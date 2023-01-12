require('dotenv').config();
const algosdk = require('algosdk')

const algoClient = new algosdk.Algodv2(
  process.env.ALGOD_TOKEN,
  process.env.ALGOD_SERVER,
  process.env.ALGOD_PORT
);

(async () => {
  console.log(await algoClient.status().do());
})().catch((e) => {
  console.log(e);
});
