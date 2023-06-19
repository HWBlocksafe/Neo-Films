import {ethers} from "ethers";
import dotenv from "dotenv";

dotenv.config();

try {
    let provider = ethers.getDefaultProvider("https://polygon-mainnet.chainstacklabs.com");

    // let ethProvider = new ethers.getDefaultProvider("https://eth.llamarpc.com");

    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);

    let signer = wallet.connect(provider);

    const ERC721_contract = new ethers.Contract("0xEdc2E4c9fa10C4859246a876397f33273D813535", [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "ApprovalForAll",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "by",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TipGiven",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "tokenIds",
                    "type": "uint256[]"
                }
            ],
            "name": "adminMintMultipleSpecificTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "adminMintTo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID_",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "account_",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "baseURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "claimBtgoFree",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "claimFree",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "claimReserved",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getApproved",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBlockTimestamp",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getBtgoClaimed",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getBtgoFreeClaimsRemaining",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getClaimFreeRemaining",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCurrentIndex",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMaxSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getPublicMintPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                }
            ],
            "name": "getReservedTokens",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "initialize",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator_",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "isContract",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "addr",
                    "type": "address"
                }
            ],
            "name": "isERC721Contract",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "isPaused",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID_",
                    "type": "uint256"
                }
            ],
            "name": "ownerOf",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "pause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "tipAmount",
                    "type": "uint256"
                }
            ],
            "name": "publicMintToWithTip",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID_",
                    "type": "uint256"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID_",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes",
                    "name": "data_",
                    "type": "bytes"
                }
            ],
            "name": "safeTransferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator_",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved_",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "baseUri",
                    "type": "string"
                }
            ],
            "name": "setBaseURI",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "accounts",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "name": "setClaimFree",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_idx",
                    "type": "uint256"
                }
            ],
            "name": "setCurrentIndex",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "setMaxSupply",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }
            ],
            "name": "setPublicMintPrice",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256[]",
                            "name": "ids",
                            "type": "uint256[]"
                        },
                        {
                            "internalType": "address",
                            "name": "recipient",
                            "type": "address"
                        }
                    ],
                    "internalType": "struct LibDiamond.ReservedTokens[]",
                    "name": "reservedTokens",
                    "type": "tuple[]"
                }
            ],
            "name": "setReservedTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "bytes4",
                    "name": "_interfaceId",
                    "type": "bytes4"
                }
            ],
            "name": "supportsInterface",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenID_",
                    "type": "uint256"
                }
            ],
            "name": "tokenURI",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount_",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "from_",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "tokenID_",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "unpause",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "withdrawEth",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_nft",
                    "type": "address"
                },
                {
                    "internalType": "uint256[]",
                    "name": "tokenIds",
                    "type": "uint256[]"
                }
            ],
            "name": "withdrawNft",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_tokenContract",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawToken",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ], signer);

    let reservedTokensByOwner = [
        [
            [
                38
            ],
            "0x3F25cC01C3b5CA2B30b8e5bc7e2D879146372fd2"
        ],
        [
            [
                39,
                40
            ],
            "0xA1c4878a5C6CB0241a40F0F195E204B3cfDED369"
        ],
        [
            [
                41
            ],
            "0xF3fAb1B547499f5304EA9cbD646d8f5539FD6BA5"
        ],
        [
            [
                42,
                43,
                44
            ],
            "0x4773486c07AF05bFAc1C220F8790CA00075F7b53"
        ],
        [
            [
                47
            ],
            "0x5e44357be9c3b4CeAbb30bD0E0A336608eCa0a3b"
        ],
        [
            [
                48,
                49,
                50
            ],
            "0x602BFe41496e7Cf3d5011eCa0CA8E66E2cFbE745"
        ],
        [
            [
                55,
                56,
                57
            ],
            "0x97FD2cFBfF3eb3f1CB019DE99aA7705ec7579499"
        ],
        [
            [
                58
            ],
            "0xF8e148B1dbF6df530d1EeaD814798D472a59000B"
        ],
        [
            [
                60
            ],
            "0x798c4D95F5C186ea4fA2838CDa5e797A28f982E6"
        ],
        [
            [
                63,
                67,
                68
            ],
            "0x75971932EA81A401dB5DBaFeDA3a1307caE2928e"
        ],
        [
            [
                64
            ],
            "0xc814070Be24d5263a949D3c729a51CB9F6f00646"
        ],
        [
            [
                65,
                66
            ],
            "0xb0f0B10a997Ee8a5B023F1Fe48e7F730E98c3Ef9"
        ],
        [
            [
                72
            ],
            "0xa3311E40ac917e30F65cDAACFDC59339dAeB9D5e"
        ],
        [
            [
                73,
                76
            ],
            "0x34629C01531b84f840610B561938cB465689c703"
        ],
        [
            [
                74
            ],
            "0x98000f240f63364E5849e32F9d14f1f5733cCB26"
        ],
        [
            [
                75,
                80
            ],
            "0x99Cce0EeE6391534c0713249c7754D108EFDb11E"
        ],
        [
            [
                77
            ],
            "0x586f93897Ae9382e54CC1d0bC67b29464e718F08"
        ],
        [
            [
                78
            ],
            "0xa94Bd00015a97A1FDA21eC02B98b4e0003309d11"
        ],
        [
            [
                79
            ],
            "0xc38Ab1eeB92222704b25c2D17760948f65578bF9"
        ],
        [
            [
                81,
                82,
                83
            ],
            "0x2541779c9f5Aac24E2A53CCF3454933093DEBE92"
        ],
        [
            [
                84,
                85,
                86
            ],
            "0xBaD60B230EDC08a5d5A249489AF5d074f1b0c351"
        ],
        [
            [
                87,
                118
            ],
            "0x5378eAac4E2fA12fcc762FD6213B8D2B26Fc5B02"
        ],
        [
            [
                88
            ],
            "0x86B5F187469De99a824020E2AfABfAbe63d2Eda7"
        ],
        [
            [
                89
            ],
            "0x7d3d6a8C2262917aCcb52C7D5d5f0D6B6d326f09"
        ],
        [
            [
                90,
                91
            ],
            "0x0b83C462b723E90b25592aB2eecBb1DD875829D6"
        ],
        [
            [
                92
            ],
            "0x890Ea984DaB3EB1b683411C041516426ca969e49"
        ],
        [
            [
                93
            ],
            "0x837A9901300312c86884902DB2bFd343A93604Dc"
        ],
        [
            [
                94,
                95,
                96
            ],
            "0x68DE2D6B022Dae5dB1237b6ddB80eb739Ab8d1f8"
        ],
        [
            [
                97,
                98,
                99
            ],
            "0xd5d597fEB5C7836a9E5F5a217817da4584a2E0f1"
        ],
        [
            [
                100
            ],
            "0x1Ca679a66d69FAde171a13d4Da5C9dDd03d04308"
        ],
        [
            [
                101
            ],
            "0xA43Adfb594310e136307Ff9760fbac3e28a9DAa0"
        ],
        [
            [
                102,
                103,
                104
            ],
            "0x6D20DDb8b80B6Fcfb526604ba99c98b318C0177B"
        ],
        [
            [
                105,
                106
            ],
            "0x1ee1A1116eBA3D5fa3B6bD7fdD1e859C0f08aE1b"
        ],
        [
            [
                107
            ],
            "0x9bBcC22Cb7245b0ac4c2D17Da0BbE699273eEda3"
        ],
        [
            [
                108
            ],
            "0xE22683BADd4E35ac0c7eC2BF08d75575BDa88409"
        ],
        [
            [
                109,
                110,
                111,
                128
            ],
            "0x3076dD2c4f6797034Ffb11cedFca352b579b120E"
        ],
        [
            [
                112,
                115,
                116
            ],
            "0x83f555bd201D4602ce4B3FdE79e8Cb18Ed56E245"
        ],
        [
            [
                113,
                114
            ],
            "0x50B9FFb93fbF565f836d8cDf5A5874F1fa7DF8b6"
        ],
        [
            [
                117
            ],
            "0x577916bFc93a80c0f8A3aCaBFd928F29446b0761"
        ],
        [
            [
                119,
                120
            ],
            "0xa78d24A4CD52F37dfB0836f105eb91d18c6aa29c"
        ],
        [
            [
                121,
                122,
                123
            ],
            "0x778ED2BE2A6a6Eb6df1fffa97d29D50f8AaA27a2"
        ],
        [
            [
                124
            ],
            "0x778631dB9b8B1906131Bb89e21f834b99eAA31CF"
        ],
        [
            [
                125
            ],
            "0xdcC90475F6B41aCf6Ca1d192b9bdD038dF0e72e0"
        ],
        [
            [
                126
            ],
            "0x11194aA8d25DA6EAfC1401F1f925337b604A1ED7"
        ],
        [
            [
                127
            ],
            "0x5f4E021398F1b767fd5844225227C7f7a8b20797"
        ],
        [
            [
                133,
                369,
                370
            ],
            "0x1E2658C9DD1dF7D0C9A85B1ED984B6ddfFB7Fb16"
        ],
        [
            [
                155
            ],
            "0x707DB1f5bA68193De3e9AA332C693607A621f814"
        ],
        [
            [
                172,
                173,
                174
            ],
            "0x491968b05D95979BA3a52D73D8a39EA96693f011"
        ],
        [
            [
                178
            ],
            "0x9619E0530614F1F8245117B2Fe2775AD0AECbc0C"
        ],
        [
            [
                179
            ],
            "0x2e81d9Fb30eF692280284DcC656814EbE6b68043"
        ],
        [
            [
                180,
                181,
                188,
                189
            ],
            "0x92950cc9d226133D866d6Bf36c647Ff1B42397E5"
        ],
        [
            [
                182,
                183
            ],
            "0xf5d2539690562f9CB7cC228422500BcaA7D7b981"
        ],
        [
            [
                184,
                185
            ],
            "0x18C30251ADAE03701cC240641b6C3725639b5aDD"
        ],
        [
            [
                186,
                187,
                236,
                237
            ],
            "0x2DDc3EBCA6DEA894EC259d660528FC3f41C8954C"
        ],
        [
            [
                190,
                191,
                432,
                433
            ],
            "0xCacF4F952020EFc23019818006708440Aeae30f2"
        ],
        [
            [
                192,
                193,
                413,
                414
            ],
            "0x052689F00CE3a71216C67A66a54c88334a6Eb305"
        ],
        [
            [
                194,
                195
            ],
            "0x9aB69183B05f5d9cA7E7d88c2081B281F259101C"
        ],
        [
            [
                196,
                197,
                198,
                201,
                202,
                203,
                204,
                205,
                206,
                207,
                208,
                209,
                210,
                211,
                212,
                213,
                214,
                215,
                216,
                217,
                218,
                219,
                220,
                221,
                222,
                223,
                224,
                225
            ],
            "0xC485EE59d1D69f44d87c0545Ca1c641E05d04a76"
        ],
        [
            [
                228,
                229,
                303,
                304
            ],
            "0xf51976C85DFD772445330Ec01804694a863cc306"
        ],
        [
            [
                230,
                231
            ],
            "0xBD43e95EcFF3e1153896f9a22fbE497CEd6bc60C"
        ],
        [
            [
                232,
                233,
                234,
                235
            ],
            "0xCbD9f0166CeaD845d28172a9FdA0B584f21F011B"
        ],
        [
            [
                238,
                239
            ],
            "0xe7b5ae95f3805278250EE715316bdAc8b956433b"
        ],
        [
            [
                240,
                241,
                242,
                243,
                244,
                245
            ],
            "0x49aD53280632bd078C7415972a60DEC12BDcEC00"
        ],
        [
            [
                246,
                247
            ],
            "0x10792B73782F7A43272078d144518f0A4dA8C694"
        ],
        [
            [
                248,
                249,
                250,
                251
            ],
            "0xA77cF9F200832B952c9c503004A94Ba5E0b1d713"
        ],
        [
            [
                255,
                256,
                257,
                258,
                259,
                260
            ],
            "0xDc805d55cDA95Bf4cC5eCee141C5d8E8cffCe13B"
        ],
        [
            [
                261,
                262
            ],
            "0xE5c25ddc88Eb5257baf8cae84e0FEe40836637Ed"
        ],
        [
            [
                263,
                264
            ],
            "0x596e42E54B525A955136Dd30FfCff2cB43A8aB0b"
        ],
        [
            [
                265,
                266
            ],
            "0xb28552Ad34bf2Ea1aD59De0F96B4C028DC773783"
        ],
        [
            [
                267,
                268
            ],
            "0x7F14bbcd8b7E7b3Df1ea150E5D175F20D6DBd66d"
        ],
        [
            [
                269,
                270
            ],
            "0x46190A0E24a7deE8DAe568C1c118F92B1EfA1503"
        ],
        [
            [
                271,
                272
            ],
            "0xDe2747cA2a2390F474e5cc8F02e5d6FC7007F41D"
        ],
        [
            [
                276,
                277
            ],
            "0xfe221F5D65e36d3DA21Dd58Ff26E1AC8020f4467"
        ],
        [
            [
                282,
                283
            ],
            "0x055ef3015b9725A3264D154003bae428B820b0b0"
        ],
        [
            [
                284,
                285
            ],
            "0x3b56f49a4142383A6dB06e1bc05b958B31bb46fd"
        ],
        [
            [
                286,
                287
            ],
            "0x3bd75973B3A6Bd6eB69632898182B0677216b064"
        ],
        [
            [
                288,
                289
            ],
            "0x085D7386563B304DBfC14B5902Ee120649b2c944"
        ],
        [
            [
                290,
                291
            ],
            "0xaB34b4969b7CFbb23C4949ea40F41588E9fED511"
        ],
        [
            [
                292,
                293,
                294,
                367
            ],
            "0xDC6Ad288D435944330362a5637EEc6ffC9251463"
        ],
        [
            [
                295,
                296
            ],
            "0xd805C2Ce025Df26E2A4BaA49F3A7e68C352fd223"
        ],
        [
            [
                297,
                298
            ],
            "0xCa01eB77800a84c1BD6670AfB1787759CEA5c6a0"
        ],
        [
            [
                299,
                300
            ],
            "0xba105eD077a41D6D4Aa6f559790Bb7C2d95D0C4e"
        ],
        [
            [
                301,
                302
            ],
            "0x0ed6C928b100fa2C263c85eA42b22a5A612045E4"
        ],
        [
            [
                305,
                306
            ],
            "0x19675E4cEB507C3Af6E6079F1CC669fEDA9462D5"
        ],
        [
            [
                307,
                308,
                309,
                310
            ],
            "0x82aF3A6A2554cD41C4ea0e4c1d9A865F1c2af26C"
        ],
        [
            [
                311,
                312
            ],
            "0x229DEF00711be46BA0FF91199bd3319D525FF7cD"
        ],
        [
            [
                313,
                314
            ],
            "0xEa2604e0F77040b807935AA4F9682ae3798440a5"
        ],
        [
            [
                315,
                316,
                317
            ],
            "0xfAF241943CcaEfEfaf6E36Ca7C4475bA814D1655"
        ],
        [
            [
                318,
                319,
                320,
                407
            ],
            "0x8FcB9e54260781FB8aFcd769C6aaC8B62C9caC6D"
        ],
        [
            [
                321
            ],
            "0x301A0C3FB9aA90c60720D007Bf4e5DD2c4da4eCC"
        ],
        [
            [
                322,
                323,
                324,
                325,
                326,
                327,
                328,
                329,
                330,
                331
            ],
            "0xDf9E79b7eC15377a991777dfcf336eC017b27503"
        ],
        [
            [
                332,
                333,
                334,
                335,
                336,
                337,
                338,
                339,
                340,
                341
            ],
            "0xd43Dbf51F9Bc2662EAd340B4E137dC052e7d6A43"
        ],
        [
            [
                342,
                343,
                344
            ],
            "0x180C482e00833CbB36958414E77364EbB0AfF72E"
        ],
        [
            [
                345,
                346
            ],
            "0xf76146319B31f770781471114bbD87ABC0dAD0B2"
        ],
        [
            [
                347,
                348,
                349,
                352,
                353,
                354,
                355,
                356,
                357,
                360
            ],
            "0xAFA1067F21eeC6ee1397cA89EC8e57db5dF1d198"
        ],
        [
            [
                350,
                351
            ],
            "0xF2337Df84F13bc4236fc021AfE64F536D7DA4786"
        ],
        [
            [
                358,
                359
            ],
            "0x5ee151F79c933A41387552d389DF941B50702606"
        ],
        [
            [
                361
            ],
            "0x0dfa9fE3279f2C97C49AcAF2B53a13A793E17e00"
        ],
        [
            [
                363,
                364
            ],
            "0x41E0d6fD4F722F39b3168E2CAC4da2E0a2B8fE6B"
        ],
        [
            [
                365,
                366
            ],
            "0x54B57fc02A55420A69b987361b098415c7C4C71a"
        ],
        [
            [
                368
            ],
            "0xC4167c6E560c90a792CB535C5CCd5a3661401025"
        ],
        [
            [
                371,
                372,
                373,
                374,
                375,
                376,
                377,
                378,
                379,
                383,
                384,
                385
            ],
            "0x979a6C71E8865a9345De203979507884350d727a"
        ],
        [
            [
                380,
                381,
                382,
                386,
                387,
                388,
                389,
                390,
                391,
                392,
                393,
                394
            ],
            "0x483C97C3A80B7016D7508B31CAF9140913Fa719a"
        ],
        [
            [
                395,
                396
            ],
            "0xA3D49d11dEAE9e14BE2E5FC394DCc5Ff3323Fe50"
        ],
        [
            [
                397,
                398,
                399,
                401,
                402,
                403,
                404,
                405,
                406,
                410
            ],
            "0xF26b76a1415B9B81a214eb9Acf1d108609FdA13B"
        ],
        [
            [
                408,
                409
            ],
            "0x7ddAC2cF4359D5B14cc2648a1fb6C76d2510C4c2"
        ],
        [
            [
                411,
                412
            ],
            "0x3Bd7f33540BC3224B5d2Ff01bAa02CD71D762a65"
        ],
        [
            [
                415,
                416
            ],
            "0xA8600f3bAe2163D5baB32206E00951B19745665e"
        ],
        [
            [
                417,
                418
            ],
            "0x8F76d8D3C733B02B60521D8181598E4bC1E7dDdB"
        ],
        [
            [
                419,
                420
            ],
            "0x33cd35C808A8c0B379314C5E129c1331Ee4a2113"
        ],
        [
            [
                421,
                422
            ],
            "0xA80BC09199E8a190A359Ecc45c36731056c412e7"
        ],
        [
            [
                423,
                424
            ],
            "0xe8104097b310f2C4C7bad3A91ACC164E4096b6db"
        ],
        [
            [
                427
            ],
            "0x1424c2A237F32030fd914465410f89Bbc4723B90"
        ],
        [
            [
                428,
                429,
                430,
                431
            ],
            "0x4E45Aee4Ea18686f6037f536D200597b9b7cD5F6"
        ],
        [
            [
                434,
                435
            ],
            "0x1287EcD56bFfE0ca1f07566278DC7062cc39B879"
        ],
        [
            [
                436,
                437
            ],
            "0xb2767629602Cf390168d4FFa52d283E894B01222"
        ],
        [
            [
                438,
                439
            ],
            "0x352064Eda42D36a9Eab33A5B0cCe2Fcece61F2Ad"
        ],
        [
            [
                444,
                445
            ],
            "0x160Cf6551ee3d910f673AF762D5a2f1bd4855be1"
        ],
        [
            [
                446,
                447
            ],
            "0x117c87915A5208d1315DFD85f0F90Df7eEAdde60"
        ],
        [
            [
                448
            ],
            "0x96FDb0b8C300231f6a85b209656eD0C7be1C92fD"
        ],
        [
            [
                449,
                450
            ],
            "0x97C9E2ee29F69Ae88d056839072491392fB0a6a4"
        ],
        [
            [
                451,
                452,
                453
            ],
            "0x87eb9f7Ff56ae2DA49EFDe8159Ee66e1b37eD6dE"
        ],
        [
            [
                454,
                455,
                456
            ],
            "0xFc4c5B7c6989FA79A7217f34dAf368cADBf2a246"
        ],
        [
            [
                457,
                458,
                481
            ],
            "0x3280C639fD18b32392B77F35748fA65E311799fA"
        ],
        [
            [
                459,
                460
            ],
            "0x9a605b5285510f68337E411A59629451C161A74A"
        ],
        [
            [
                461,
                462
            ],
            "0x320DfeaF0776DB3208B09D56a42AcbeeB563a988"
        ],
        [
            [
                463,
                464
            ],
            "0xE613B9F2Dd4DA5C99dC2Aa7bc94F5552C35F7253"
        ],
        [
            [
                465
            ],
            "0x1c2E4b068f69A46d8Cf7995db90D38428163B979"
        ],
        [
            [
                466,
                467
            ],
            "0xcf237E16b82cB772ccF9A414C032eD93b6D24cE0"
        ],
        [
            [
                468,
                469
            ],
            "0x55c39310d97f3851B87A920f803233eF2f2A69EF"
        ],
        [
            [
                470
            ],
            "0x0F0C12044A760389CF255E764F780C04642EA337"
        ],
        [
            [
                471,
                472
            ],
            "0x50864e33e28a68d7F60FF449a7b8F2BF6BA262d3"
        ],
        [
            [
                473,
                474
            ],
            "0x77424437E320fc70Ab04D983e259CA6e6e205C86"
        ],
        [
            [
                475,
                476
            ],
            "0xa82B6A181Fd754974f6917Ba4e00F16d39B24150"
        ],
        [
            [
                477
            ],
            "0xBDA7CD852E6dCc0491904CBCC6D705C8f6c4EeE9"
        ],
        [
            [
                478
            ],
            "0x8fe24df2a028AFB7C0c837ec0c1711355F67AC60"
        ],
        [
            [
                479,
                480
            ],
            "0x4248A61811A096802BC8bfD4f8cD11C6C0e6c30f"
        ],
        [
            [
                482
            ],
            "0x07dc36Eb6f3d7A92B2E2018116d25f6FCcFe0c04"
        ]
    ]

    for (let i = 0; i < reservedTokensByOwner.length; i++) {
        const innerArray = reservedTokensByOwner[i][0];
        const address = reservedTokensByOwner[i][1];
        let data = [innerArray, address];
        console.log(data)
        let estimate = await signer.estimateGas(ERC721_contract.setReservedTokens([data]));
        console.log({estimate});
        await ERC721_contract.setReservedTokens([data], {
            gasLimit: 400000n,
            gasPrice: 10000000000n
        }).catch(e => console.log(e));
    }

} catch (e) {
    console.log(e);
}
