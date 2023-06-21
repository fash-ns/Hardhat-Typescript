/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Counter, CounterInterface } from "../Counter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "decrease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
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
    name: "increase",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "setManually",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061043b806100616000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80638ada066e14610051578063d732d9551461006f578063d7cd050c14610079578063e8927fbc14610095575b600080fd5b61005961009f565b6040516100669190610287565b60405180910390f35b6100776100a8565b005b610093600480360381019061008e91906101c9565b610103565b005b61009d61019d565b005b60008054905090565b60008054116100ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100e390610247565b60405180910390fd5b60016000546100fb9190610309565b600081905550565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610193576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161018a90610267565b60405180910390fd5b8060008190555050565b60016000546101ac91906102b3565b600081905550565b6000813590506101c3816103ee565b92915050565b6000602082840312156101db57600080fd5b60006101e9848285016101b4565b91505092915050565b60006101ff6020836102a2565b915061020a82610376565b602082019050919050565b60006102226028836102a2565b915061022d8261039f565b604082019050919050565b6102418161033d565b82525050565b60006020820190508181036000830152610260816101f2565b9050919050565b6000602082019050818103600083015261028081610215565b9050919050565b600060208201905061029c6000830184610238565b92915050565b600082825260208201905092915050565b60006102be8261033d565b91506102c98361033d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156102fe576102fd610347565b5b828201905092915050565b60006103148261033d565b915061031f8361033d565b92508282101561033257610331610347565b5b828203905092915050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f436f756e7465722063616e6e6f74206265206c657373207468616e207a65726f600082015250565b7f4f6e6c7920636f6e7472616374206f776e65722063616e2063616c6c2074686960008201527f73206d6574686f64000000000000000000000000000000000000000000000000602082015250565b6103f78161033d565b811461040257600080fd5b5056fea26469706673582212206e6b20fe3d723638b0e4aa74e748418c886fb2494edb16a7dbd07a79823bba4c64736f6c63430008040033";

type CounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Counter__factory extends ContractFactory {
  constructor(...args: CounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Counter> {
    return super.deploy(overrides || {}) as Promise<Counter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Counter {
    return super.attach(address) as Counter;
  }
  override connect(signer: Signer): Counter__factory {
    return super.connect(signer) as Counter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CounterInterface {
    return new utils.Interface(_abi) as CounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Counter {
    return new Contract(address, _abi, signerOrProvider) as Counter;
  }
}