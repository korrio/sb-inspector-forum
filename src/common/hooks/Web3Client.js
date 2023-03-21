import { useEffect, useReducer, useCallback } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

import {
  Web3ProviderState,
  Web3Action,
  web3InitialState,
  web3Reducer,
} from '../reducers'

import { toast } from "react-hot-toast";
import { SUPPORTED_CHAINS } from '../../constants/contracts'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      rpc: {
                        56: 'https://bsc-dataseed1.binance.org'
                    },
                    chainId: 56
    },
  },
}

let web3Modal;
if (typeof window !== 'undefined') {
  web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions, // required
  })
}

export const useWeb3 = () => {
  const [state, dispatch] = useReducer(web3Reducer, web3InitialState)
  const { provider, web3Provider, address, network, chainId } = state

  const connect = useCallback(async () => {
    if (web3Modal) {
      try {
        const provider = await web3Modal.connect()
        const web3Provider = new ethers.providers.Web3Provider(provider)
        const signer = web3Provider.getSigner()
        const address = await signer.getAddress()
        const network = await web3Provider.getNetwork()
        toast.success('Connected to Web3')
        
        const chainlist = Object.entries(SUPPORTED_CHAINS).map(([chainId]) => [
          chainId
        ])
        const supportChain = Object.entries(SUPPORTED_CHAINS).filter(
          ([chainId]) => Number(chainId) === network.chainId
        )

        if(supportChain.length === 0) {
          toast.error('Your selected chain is not support on this Dapp. Please switch to BSC or ETH Mainnet')
        }else{
          dispatch({
            type: 'SET_WEB3_PROVIDER',
            provider,
            web3Provider,
            address,
            network,
            chainId: network.chainId
          })
        }


      } catch (e) {
        console.log('connect error', e)
      }
    } else {
      console.error('No Web3Modal')
    }
  }, [])

  const disconnect = useCallback(async () => {
    if (web3Modal) {
      web3Modal.clearCachedProvider()
      if (provider?.disconnect && typeof provider.disconnect === 'function') {
        await provider.disconnect()
      }
      toast.error('Disconnected from Web3')
      dispatch({
        type: 'RESET_WEB3_PROVIDER',
      })
    } else {
      console.error('No Web3Modal')
    }
  }, [provider])

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal && web3Modal.cachedProvider) {
      connect()
    }
  }, [connect])

  // EIP-1193 events
  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        toast.success('Changed Web3 Account')
        dispatch({
          type: 'SET_ADDRESS',
          address: accounts[0],
        })
      }

      // https://docs.ethers.io/v5/concepts/best-practices/#best-practices--network-changes
      const handleChainChanged = (_hexChainId) => {
        if (typeof window !== 'undefined') {
          console.log('switched to chain...', _hexChainId)
          toast.success('Web3 Network Changed')
          window.location.reload()
        } else {
          console.log('window is undefined')
        }
      }

      const handleDisconnect = (error) => {
        // eslint-disable-next-line no-console
        console.log('disconnect', error)
        disconnect()
      }

      provider.on('accountsChanged', handleAccountsChanged)
      provider.on('chainChanged', handleChainChanged)
      provider.on('disconnect', handleDisconnect)

      // Subscription Cleanup
      return () => {
        if (provider.removeListener) {
          provider.removeListener('accountsChanged', handleAccountsChanged)
          provider.removeListener('chainChanged', handleChainChanged)
          provider.removeListener('disconnect', handleDisconnect)
        }
      }
    }
  }, [provider, disconnect])

  return {
    provider,
    web3Provider,
    address,
    network,
    chainId,
    connect,
    disconnect,
  }
}