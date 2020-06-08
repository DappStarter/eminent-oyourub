require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth sadness combine install neck flat general'; 
let testAccounts = [
"0xbba036e78ba3a57e9dd749ac7386a303edef4497da105d5e55f662694ecc5855",
"0x86f7432e9bdd97a0796f34905329079ec64687b00efe0463195c0d002fffb9bb",
"0x789b45d0644984b7e2b0fcf2e602286179e5772e80d451c6222e2899bb2f7abe",
"0x1aad338b745b4d9591dd65db394740c1ba59294be1a2b311a97bd4c3d6bf5126",
"0x2a893f29fb82ff3e44f9abbb4f0c9e50ca99996bce66d5c70e45d6a01b649645",
"0x11be05c2c5349afcc5f38d9f8def07fe45eaf838fd7299ecf219fa220ea184f3",
"0x2328b7a28115ccfd338a43fb1a311429bc12164b9f30db57b8fddb0fd15cd094",
"0x0faa92ced82cb48dcd1186fc4a6b45756c460a18efdec063b30591f7beabf884",
"0x325d6ad450ac93f332b43e4962ca96e9677c32324eac3e80489d051c0a8ca7ea",
"0x4024ee92da3a22899b086821c2004338e2e361e40fb0aeba120a8749b10b851f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
