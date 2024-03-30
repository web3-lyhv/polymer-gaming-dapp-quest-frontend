# Frontend Template built with Next.js for the Polymer Quest - Gaming dApp

This is a frontend template built with Next.js for the Polymer Quest - Gaming dApp.

**Important: This is just a template, you need to deploy your smart contract that fulfills the requirements as mentioned [here](https://forum.polymerlabs.org/t/quest-for-gaming-dapp-to-be-used-in-phase-2/714), and modify the frontend code to interact with your contract.**

## Stacks

- Next.js
- wagmi
- Tailwind CSS

## Features

- Integrated with wagmi (Connect / Disconnect Wallets)
- Home Page, Points Page, NFT Page and Leaderboard Page
- Implemented the animation for the Spin Wheel
- Implemented basic interaction code with the dummy contract for Points and NFT page

## Points

I have deployed a dummy contract on Optimism Sepolia testnet, just want to implement the basic interaction code with the contract. You can find the contract here:

- `0xE97994805b7a090d7D1222c2bd4C8D7e0799ef93`
- [https://sepolia-optimism.etherscan.io/address/0xE97994805b7a090d7D1222c2bd4C8D7e0799ef93#code](https://sepolia-optimism.etherscan.io/address/0xE97994805b7a090d7D1222c2bd4C8D7e0799ef93#code)

The contract has two functions:

- `function requestPoints() public returns (uint256)`: Generate random points between 1 to 10
- `function deductPoints(uint256 points) public`: Deduct points from the user

And two events:

- `event PointsAdded(address indexed user, uint256 indexed points)`: Emit when the points get added
- `event PointsDeducted(address indexed user, uint256 indexed points)`: Emit when the points get deducted

So when user click on the "Spin Wheel" button on the Points page, it will call the `requestPoints` function and generate a random number on chain. After that, it will listen to the `PointsAdded` to get the random number generated and display the result on the spin wheel.

## NFT

I have deployed a dummy contract on Optimism Sepolia testnet, just want to implement the basic interaction code with the contract. You can find the contract here:

- `0x7Bd8afD53eDfedAa6417C635083DEf53c5a03825`
- [https://sepolia-optimism.etherscan.io/address/0xE97994805b7a090d7D1222c2bd4C8D7e0799ef93#code](https://sepolia-optimism.etherscan.io/address/0xE97994805b7a090d7D1222c2bd4C8D7e0799ef93#code)

It is a standard ERC721 contract, with mint and burn functions. There are 4 variants of NFTs in the contract.

So when user click on the "Mint" button on the NFT page, it will call the corresponding mint function and mint a new NFT for the user. User can also burn the NFT by clicking the "Burn" button.

## Leaderboard

The leaderboard page is just a static page. You just need to update the `leaderboard` state by calling the `setLeaderboard` function, it is up to you how to implement the data fetching logic.

## License

MIT
