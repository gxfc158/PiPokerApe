import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PiPokerApe',
  tokenName: 'Pi Poker Ape',
  tokenSymbol: 'Pi Poker Ape',
  hiddenMetadataUri: 'ipfs://bafybeiduslw3ibmht4hgyrxnz3euejbroeeatbhdajru6vkkghyvhafi2u/fenmian.png',
  maxSupply: 8888,
  whitelistSale: {
    price: 0.003,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 31.4,
    maxMintAmountPerTx: 1000,
  },
  contractAddress: '0xD7508BA04488FDD078E228DC378F0a69E3Cd4A14',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
