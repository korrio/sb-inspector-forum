import React, { ReactChild, createContext, useContext } from 'react'
import { useWeb3 } from '@/common/hooks/Web3Client'
import { Web3ProviderState, web3InitialState } from '../reducers'

const Web3Context = createContext(web3InitialState)

export const Web3ContextProvider = ({ children }) => {
  const web3ProviderState = useWeb3()

  console.log("web3ProviderState",web3ProviderState);

  return (
    <Web3Context.Provider value={web3ProviderState}>
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3Context() {
  return useContext(Web3Context)
}