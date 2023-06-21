import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import type {HardhatUserConfig} from "hardhat/config";

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  typechain: {
    outDir: "./src/types"
  },
  paths: {
    tests: "./src/tests"
  },
  networks: {
    localhost: {
      url: "http://0.0.0.0:8545",
      accounts: "remote"
    }
  }
};

export default config;