/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  OwlERC721PublicMintFacet,
  OwlERC721PublicMintFacetInterface,
} from "../../facets/OwlERC721PublicMintFacet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "publicMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610456806100206000396000f3fe60806040526004361061001e5760003560e01c80632db1154414610023575b600080fd5b61003d60048036038101906100389190610282565b61003f565b005b60006100496100af565b905080600e015482826002015461006091906102de565b11156100a1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610098906103b7565b60405180910390fd5b6100ab82336100dc565b5050565b6000807f0b6e95846c6cceefc9a81e8de919516cc5797056f4e5e1e770e76e1c0b297e6490508091505090565b60005b82811015610103576100f082610108565b80806100fb906103d7565b9150506100df565b505050565b60006101126100af565b9050600181600201600082825461012991906102de565b9250508190555060008160020154905060018260040160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461018b91906102de565b925050819055508282600301600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808373ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b600080fd5b6000819050919050565b61025f8161024c565b811461026a57600080fd5b50565b60008135905061027c81610256565b92915050565b60006020828403121561029857610297610247565b5b60006102a68482850161026d565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006102e98261024c565b91506102f48361024c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610329576103286102af565b5b828201905092915050565b600082825260208201905092915050565b7f547279696e6720746f206d696e74206d6f7265207468616e20746865206d617860008201527f20737570706c7900000000000000000000000000000000000000000000000000602082015250565b60006103a1602783610334565b91506103ac82610345565b604082019050919050565b600060208201905081810360008301526103d081610394565b9050919050565b60006103e28261024c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610415576104146102af565b5b60018201905091905056fea2646970667358221220e79206db1779ca66be92aa1a858587459d6db8a27f258cd9dd421cfcaedfbcfa64736f6c63430008090033";

type OwlERC721PublicMintFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwlERC721PublicMintFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwlERC721PublicMintFacet__factory extends ContractFactory {
  constructor(...args: OwlERC721PublicMintFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OwlERC721PublicMintFacet> {
    return super.deploy(overrides || {}) as Promise<OwlERC721PublicMintFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OwlERC721PublicMintFacet {
    return super.attach(address) as OwlERC721PublicMintFacet;
  }
  override connect(signer: Signer): OwlERC721PublicMintFacet__factory {
    return super.connect(signer) as OwlERC721PublicMintFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwlERC721PublicMintFacetInterface {
    return new utils.Interface(_abi) as OwlERC721PublicMintFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwlERC721PublicMintFacet {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OwlERC721PublicMintFacet;
  }
}
