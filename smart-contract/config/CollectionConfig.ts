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
  contractName: 'ABC123',
  tokenName: 'ABC123',
  tokenSymbol: 'ABC123',
  hiddenMetadataUri: 'ipfs://bafybeibd6acnuc56peyqcyqstclsezqfep2afknbcahgzgztxfu5bniite/hidden.json',
  maxSupply: 100,
  whitelistSale: {
    price: 0.003,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.001,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xDf2e1063C9095fFE404bfC08D4D1e216fDAf5bf5',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
