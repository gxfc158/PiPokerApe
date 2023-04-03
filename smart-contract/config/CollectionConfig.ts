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
  contractName: 'WojakYC88',
  tokenName: 'Grief Wojak Yacht Club',
  tokenSymbol: 'GWYC',
  hiddenMetadataUri: 'ipfs://bafybeih4ufxeoigqo4umcvpjvstduatqijkyazxijmjvmcbzf3x6widohi/hidden.json',
  maxSupply: 10000,
  whitelistSale: {
    price: 0.003,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.002,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.2,
    maxMintAmountPerTx: 500,
  },
  contractAddress: '0x35559BD3e5B428Cd81Cac51ba44dbb70F93F7D04',
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
