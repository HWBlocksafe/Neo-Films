/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  MockERC721Facet,
  MockERC721FacetInterface,
} from "../../facets/MockERC721Facet";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
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
        internalType: "address",
        name: "operator_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account_",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "construct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator_",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data_",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator_",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved_",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from_",
        type: "address",
      },
      {
        internalType: "address",
        name: "to_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenID_",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fe6806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806394b91deb1161008c578063a9059cbb11610066578063a9059cbb14610249578063b88d4fde14610279578063c87b56dd14610295578063e985e9c5146102c5576100ea565b806394b91deb146101f157806395d89b411461020f578063a22cb4651461022d576100ea565b806323b872dd116100c857806323b872dd1461015957806342842e0e146101755780636352211e1461019157806370a08231146101c1576100ea565b806306fdde03146100ef578063081812fc1461010d578063095ea7b31461013d575b600080fd5b6100f76102f5565b60405161010491906114b1565b60405180910390f35b6101276004803603810190610122919061151d565b610396565b604051610134919061158b565b60405180910390f35b610157600480360381019061015291906115d2565b6103e1565b005b610173600480360381019061016e9190611612565b6103f1565b005b61018f600480360381019061018a9190611612565b61040c565b005b6101ab60048036038101906101a6919061151d565b61042c565b6040516101b8919061158b565b60405180910390f35b6101db60048036038101906101d69190611665565b610447565b6040516101e891906116a1565b60405180910390f35b6101f961049e565b60405161020691906116d7565b60405180910390f35b610217610571565b60405161022491906114b1565b60405180910390f35b6102476004803603810190610242919061171e565b610612565b005b610263600480360381019061025e91906115d2565b610621565b60405161027091906116d7565b60405180910390f35b610293600480360381019061028e9190611893565b610636565b005b6102af60048036038101906102aa919061151d565b610652565b6040516102bc91906114b1565b60405180910390f35b6102df60048036038101906102da9190611916565b61077d565b6040516102ec91906116d7565b60405180910390f35b6060600061030161081f565b905080600001805461031290611985565b80601f016020809104026020016040519081016040528092919081815260200182805461033e90611985565b801561038b5780601f106103605761010080835404028352916020019161038b565b820191906000526020600020905b81548152906001019060200180831161036e57829003601f168201915b505050505091505090565b6000806103a161081f565b905080600601600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b6103ec33838361084c565b505050565b6103fb838261099e565b6104068383836109f9565b50505050565b61042783838360405180602001604052806000815250610636565b505050565b600061043782610c2e565b61044082610c79565b9050919050565b60008061045261081f565b90508060050160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b6000806104a961081f565b90506040518060400160405280600781526020017f4d6f636b47656d000000000000000000000000000000000000000000000000008152508160000190805190602001906104f8929190611375565b506040518060400160405280600381526020017f47454d0000000000000000000000000000000000000000000000000000000000815250816001019080519060200190610546929190611375565b50610569336040518060600160405280602e8152602001611f83602e9139610cc4565b600191505090565b6060600061057d61081f565b905080600101805461058e90611985565b80601f01602080910402602001604051908101604052809291908181526020018280546105ba90611985565b80156106075780601f106105dc57610100808354040283529160200191610607565b820191906000526020600020905b8154815290600101906020018083116105ea57829003601f168201915b505050505091505090565b61061d338383610e9e565b5050565b600061062e3384846109f9565b905092915050565b610640338361099e565b61064c8484848461101a565b50505050565b606061065d82610c2e565b600061066761081f565b90506000816003016000858152602001908152602001600020805461068b90611985565b80601f01602080910402602001604051908101604052809291908181526020018280546106b790611985565b80156107045780601f106106d957610100808354040283529160200191610704565b820191906000526020600020905b8154815290600101906020018083116106e757829003601f168201915b505050505090506000610715611038565b905060008151141561072c57819350505050610778565b6000825111156107625780826040516020016107499291906119f3565b6040516020818303038152906040529350505050610778565b6040518060200160405280600081525093505050505b919050565b60008061078861081f565b90508060070160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b6000807f0b6e95846c6cceefc9a81e8de919516cc5797056f4e5e1e770e76e1c0b297e6490508091505090565b60008273ffffffffffffffffffffffffffffffffffffffff1661086e8361042c565b73ffffffffffffffffffffffffffffffffffffffff1614156108c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108bc90611a89565b60405180910390fd5b6108cf848361099e565b60006108d961081f565b90508381600601600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828473ffffffffffffffffffffffffffffffffffffffff166109508561042c565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a460019150509392505050565b60006109a982610c79565b90506109b58383611075565b6109f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109eb90611b1b565b60405180910390fd5b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6190611bad565b60405180910390fd5b610a7382610c2e565b610a7d84836110cc565b6000610a8761081f565b905080600601600084815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690558381600401600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060018160050160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b679190611bfc565b9250508190555060018160050160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610bc09190611c30565b92505081905550828473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a460019150509392505050565b610c3781611146565b610c76576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6d90611cd2565b60405180910390fd5b50565b600080610c8461081f565b905080600401600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d34576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d2b90611bad565b60405180910390fd5b6000610d3e61081f565b90506001816002016000828254610d559190611c30565b9250508190555060008160020154905060018260050160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610db79190611c30565b925050819055508382600401600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828260030160008381526020019081526020016000209080519060200190610e3b929190611375565b50808473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f0d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0490611d3e565b60405180910390fd5b6000610f1761081f565b9050818160070160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318460405161100c91906116d7565b60405180910390a350505050565b6110258484846109f9565b5061103284848484611187565b50505050565b60606040518060400160405280601581526020017f68747470733a2f2f697066732e696f2f697066732f0000000000000000000000815250905090565b60008061108183610c79565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614806110c357506110c2818561077d565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166110ec82610c79565b73ffffffffffffffffffffffffffffffffffffffff1614611142576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113990611daa565b60405180910390fd5b5050565b60008073ffffffffffffffffffffffffffffffffffffffff1661116883610c79565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611193848484846111d8565b6111d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111c990611e3c565b60405180910390fd5b50505050565b60006111e384611352565b15611345578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02338786866040518563ffffffff1660e01b81526004016112279493929190611eb1565b602060405180830381600087803b15801561124157600080fd5b505af192505050801561127257506040513d601f19601f8201168201806040525081019061126f9190611f55565b60015b6112f5573d80600081146112a2576040519150601f19603f3d011682016040523d82523d6000602084013e6112a7565b606091505b506000815114156112ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112e490611e3c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061134a565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b82805461138190611985565b90600052602060002090601f0160209004810192826113a357600085556113ea565b82601f106113bc57805160ff19168380011785556113ea565b828001600101855582156113ea579182015b828111156113e95782518255916020019190600101906113ce565b5b5090506113f791906113fb565b5090565b5b808211156114145760008160009055506001016113fc565b5090565b600081519050919050565b600082825260208201905092915050565b60005b83811015611452578082015181840152602081019050611437565b83811115611461576000848401525b50505050565b6000601f19601f8301169050919050565b600061148382611418565b61148d8185611423565b935061149d818560208601611434565b6114a681611467565b840191505092915050565b600060208201905081810360008301526114cb8184611478565b905092915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6114fa816114e7565b811461150557600080fd5b50565b600081359050611517816114f1565b92915050565b600060208284031215611533576115326114dd565b5b600061154184828501611508565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006115758261154a565b9050919050565b6115858161156a565b82525050565b60006020820190506115a0600083018461157c565b92915050565b6115af8161156a565b81146115ba57600080fd5b50565b6000813590506115cc816115a6565b92915050565b600080604083850312156115e9576115e86114dd565b5b60006115f7858286016115bd565b925050602061160885828601611508565b9150509250929050565b60008060006060848603121561162b5761162a6114dd565b5b6000611639868287016115bd565b935050602061164a868287016115bd565b925050604061165b86828701611508565b9150509250925092565b60006020828403121561167b5761167a6114dd565b5b6000611689848285016115bd565b91505092915050565b61169b816114e7565b82525050565b60006020820190506116b66000830184611692565b92915050565b60008115159050919050565b6116d1816116bc565b82525050565b60006020820190506116ec60008301846116c8565b92915050565b6116fb816116bc565b811461170657600080fd5b50565b600081359050611718816116f2565b92915050565b60008060408385031215611735576117346114dd565b5b6000611743858286016115bd565b925050602061175485828601611709565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6117a082611467565b810181811067ffffffffffffffff821117156117bf576117be611768565b5b80604052505050565b60006117d26114d3565b90506117de8282611797565b919050565b600067ffffffffffffffff8211156117fe576117fd611768565b5b61180782611467565b9050602081019050919050565b82818337600083830152505050565b6000611836611831846117e3565b6117c8565b90508281526020810184848401111561185257611851611763565b5b61185d848285611814565b509392505050565b600082601f83011261187a5761187961175e565b5b813561188a848260208601611823565b91505092915050565b600080600080608085870312156118ad576118ac6114dd565b5b60006118bb878288016115bd565b94505060206118cc878288016115bd565b93505060406118dd87828801611508565b925050606085013567ffffffffffffffff8111156118fe576118fd6114e2565b5b61190a87828801611865565b91505092959194509250565b6000806040838503121561192d5761192c6114dd565b5b600061193b858286016115bd565b925050602061194c858286016115bd565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061199d57607f821691505b602082108114156119b1576119b0611956565b5b50919050565b600081905092915050565b60006119cd82611418565b6119d781856119b7565b93506119e7818560208601611434565b80840191505092915050565b60006119ff82856119c2565b9150611a0b82846119c2565b91508190509392505050565b7f4552433732313a20417070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a73602183611423565b9150611a7e82611a17565b604082019050919050565b60006020820190508181036000830152611aa281611a66565b9050919050565b7f4552433732313a204e6f7420746f6b656e206f776e6572206f7220617070726f60008201527f7665640000000000000000000000000000000000000000000000000000000000602082015250565b6000611b05602383611423565b9150611b1082611aa9565b604082019050919050565b60006020820190508181036000830152611b3481611af8565b9050919050565b7f4552433732313a2043616e6e6f74207472616e7366657220746f20302061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611b97602483611423565b9150611ba282611b3b565b604082019050919050565b60006020820190508181036000830152611bc681611b8a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611c07826114e7565b9150611c12836114e7565b925082821015611c2557611c24611bcd565b5b828203905092915050565b6000611c3b826114e7565b9150611c46836114e7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611c7b57611c7a611bcd565b5b828201905092915050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000611cbc601883611423565b9150611cc782611c86565b602082019050919050565b60006020820190508181036000830152611ceb81611caf565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000611d28601983611423565b9150611d3382611cf2565b602082019050919050565b60006020820190508181036000830152611d5781611d1b565b9050919050565b7f4552433732313a204e6f7420746f6b656e206f776e6572000000000000000000600082015250565b6000611d94601783611423565b9150611d9f82611d5e565b602082019050919050565b60006020820190508181036000830152611dc381611d87565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000611e26603283611423565b9150611e3182611dca565b604082019050919050565b60006020820190508181036000830152611e5581611e19565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000611e8382611e5c565b611e8d8185611e67565b9350611e9d818560208601611434565b611ea681611467565b840191505092915050565b6000608082019050611ec6600083018761157c565b611ed3602083018661157c565b611ee06040830185611692565b8181036060830152611ef28184611e78565b905095945050505050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611f3281611efd565b8114611f3d57600080fd5b50565b600081519050611f4f81611f29565b92915050565b600060208284031215611f6b57611f6a6114dd565b5b6000611f7984828501611f40565b9150509291505056fe516d653773733341525667787636725871565069696b4d4a3875324e4c676d67737a673133705972444b456f6975a264697066735822122016803c09fd4d30f4b4cfe8059f87e2d73c861ba1d15731f0ef7abcdbb563f64164736f6c63430008090033";

type MockERC721FacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC721FacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC721Facet__factory extends ContractFactory {
  constructor(...args: MockERC721FacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC721Facet> {
    return super.deploy(overrides || {}) as Promise<MockERC721Facet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockERC721Facet {
    return super.attach(address) as MockERC721Facet;
  }
  override connect(signer: Signer): MockERC721Facet__factory {
    return super.connect(signer) as MockERC721Facet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC721FacetInterface {
    return new utils.Interface(_abi) as MockERC721FacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC721Facet {
    return new Contract(address, _abi, signerOrProvider) as MockERC721Facet;
  }
}
