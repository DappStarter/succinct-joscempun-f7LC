require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember evil inflict brass forget thought'; 
let testAccounts = [
"0xa1be67721dbbacbb4f530fcd0c76e4215743366264726e5fdce3f7bce7d8b50d",
"0xd8b017ea8c86c099061cd00468f669fa600ee4b2e9cabe22dcc5c3987bfce2c5",
"0x8770efadd0f71e95b44755c58f6acd9c91fa4859e12c1adb05d6e15a30cb95af",
"0x0aa6b8b831a96bed0f3fe91947d2c09c256a5d5255ecca4b5a94bb482348e52c",
"0xfa45f0a2b718ccb9ff348765dbdbb4822670c11a3cba8dea013f7ee448ba5832",
"0x9070dbbba440397216954139f445fb60f8a362b230e3236fa76c1c8aa8367cc5",
"0x5a034b04bbd6dde90fde92e1acda2d66f7b563d3dadc7b21b985f35e19270575",
"0x9bdf1f9a76a3455325535462699cc7c62743ffa524c8e4e51fe81dfa5595d88d",
"0x83b020209fc2f31f27d30dd5d7318550537fa2887c5ca8b48d22fb6b0df8111e",
"0xfb4d01e21f81fc05630b60b4b79985342372405d1de0d62b41750e1861ea7eab"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

