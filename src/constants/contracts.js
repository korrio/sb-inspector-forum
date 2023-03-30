import ERC20Abi from "./abis/ERC20.abi.json"

export const ChainId = {
    ETH_MAINNET: 1,
    OPTIMISM: 10,
    RINKEBY: 4,
    BSC_MAINNET: 56,
    BSC_TESTNET: 97
}

export const SUPPORTED_CHAINS = {
    [ChainId.ETH_MAINNET]: {
        name: 'Mainnet',
        short_name: 'eth',
        chain: 'ETH',
        network: 'mainnet',
        chain_id: 1,
        network_id: 1,
        rpc_url: 'https://mainnet.infura.io/v3/%API_KEY%',
        native_currency: {
            symbol: 'ETH',
            name: 'Ethereum',
            decimals: '18',
            contractAddress: '',
            balance: '',
        },
    },
    [ChainId.OPTIMISM]: {
        name: 'Optimism',
        short_name: 'eth',
        chain: 'ETH',
        network: 'optimism',
        chain_id: 10,
        network_id: 10,
        rpc_url: 'https://mainnet.optimism.io',
        native_currency: {
            symbol: 'ETH',
            name: 'Ethereum',
            decimals: '18',
            contractAddress: '',
            balance: '',
        },
    },
    [ChainId.RINKEBY]: {
        name: 'Rinkeby',
        short_name: 'rin',
        chain: 'ETH',
        network: 'rinkeby',
        chain_id: 4,
        network_id: 4,
        rpc_url: 'https://rinkeby.infura.io/v3/%API_KEY%',
        native_currency: {
            symbol: 'ETH',
            name: 'Ethereum',
            decimals: '18',
            contractAddress: '',
            balance: '',
        },
    },
    [ChainId.BSC_MAINNET]: {
        name: 'BSC',
        short_name: 'bsc',
        chain: 'smartchain',
        network: 'mainnet',
        chain_id: 56,
        network_id: 56,
        rpc_url: 'https://bsc-dataseed1.defibit.io/',
        native_currency: {
            symbol: 'BNB',
            name: 'BNB',
            decimals: '18',
            contractAddress: '',
            balance: '',
        },
    },
    [ChainId.BSC_TESTNET]: {
        name: 'BSC Testnet',
        short_name: 'bsc-testnet',
        chain: 'smartchain',
        network: 'mainnet',
        chain_id: 97,
        network_id: 97,
        rpc_url: 'https://bsc-dataseed1.defibit.io/',
        native_currency: {
            symbol: 'tBNB',
            name: 'tBNB',
            decimals: '18',
            contractAddress: '',
            balance: '',
        },
    }
}

export const SUPPORTED_CHAIN_IDS = [ChainId.ETH_MAINNET, ChainId.OPTIMISM, ChainId.RINKEBY, ChainId.BSC_MAINNET];

export const CONTRACTS = {
    BNB: {
        address: {
            [ChainId.ETH_MAINNET]: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
            [ChainId.OPTIMISM]: "",
            [ChainId.RINKEBY]: "",
            [ChainId.BSC_MAINNET]: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
            [ChainId.BSC_TESTNET]: "0x3dd1289157f2f298dde5ae42adc703532aa78478",
        },
        abi: ERC20Abi,
    },
    JUTC: {
        address: {
            [ChainId.ETH_MAINNET]: "",
            [ChainId.OPTIMISM]: "",
            [ChainId.RINKEBY]: "",
            [ChainId.BSC_MAINNET]: "0x5e7d3c2045c914316f26c1f5ad35c16aa4c92acf",
            [ChainId.BSC_TESTNET]: "0x3dd1289157f2f298dde5ae42adc703532aa78478",
        },
        abi: ERC20Abi,
    },
    ETH: {
        address: {
            [ChainId.ETH_MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            [ChainId.OPTIMISM]: "",
            [ChainId.RINKEBY]: "0x01BE23585060835E02B77ef475b0Cc51aA1e0709",
            [ChainId.BSC_MAINNET]: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
            [ChainId.BSC_TESTNET]: "0x3dd1289157f2f298dde5ae42adc703532aa78478",
        },
        abi: ERC20Abi,
    },
    BUSD: {
        address: {
            [ChainId.ETH_MAINNET]: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
            [ChainId.OPTIMISM]: "",
            [ChainId.RINKEBY]: "",
            [ChainId.BSC_MAINNET]: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
            [ChainId.BSC_TESTNET]: "0x3dd1289157f2f298dde5ae42adc703532aa78478",
        },
        abi: ERC20Abi,
    }
};