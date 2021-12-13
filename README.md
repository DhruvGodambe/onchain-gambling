# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# Gambling Pools

Onchain gambling is a decentralised way of betting and making money in a game of probability. In the gambling pools there are two sides involved. At one side there are the Liquidity Providers (LPs) who take risk by supplying initial winning pot for the gamblers. On the other side there are gamblers who buy a stake in the game by paying gambling ticket fees. These ticket fees are collected and distributed among the LPs, once the game numbers are made public and the winnings are distributed amongst the gamblers.