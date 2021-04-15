

const fs = require("fs");
const HDWalletProvider = require("truffle-hdwallet-provider");

const privKey = fs.readFileSync(".privateKey").toString('utf-8');
module.exports = {
  
  networks: {
    dev: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      gas: 5000000
    },

    rinkeby: {
      provider: () => {
        return new HDWalletProvider(privKey, "https://rinkeby.infura.io/v3/ccef7c32fcd94fb1a7683538e5d18aa2")
      },
      port: 80,
      network_id: 4
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,      // Use "0.5.1" you've installed locally with docker (default: false)
      
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
