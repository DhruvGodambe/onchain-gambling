// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    const USDCToken = await hre.ethers.getContractFactory("USDCToken");
    const usdctoken = await USDCToken.deploy();
    const USDTToken = await hre.ethers.getContractFactory("USDTToken");
    const usdttoken = await USDTToken.deploy();
    const DAIToken = await hre.ethers.getContractFactory("DAIToken");
    const daitoken = await DAIToken.deploy();
  
    await usdctoken.deployed();
    await usdttoken.deployed();
    await daitoken.deployed();
  
    console.log("USDC address:", usdctoken.address);
    console.log("USDT address:", usdttoken.address);
    console.log("DAI address:", daitoken.address);

    const accounts = await hre.ethers.getSigners();
    const deployer = accounts[0]

    const usdcBalance = await usdctoken.balanceOf(deployer.address);
    console.log("balance of ", deployer.address.toString(), " is ", usdcBalance.toString());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
