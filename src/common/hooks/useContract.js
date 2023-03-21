/* eslint-disable react-hooks/rules-of-hooks */
import { useWeb3Context } from "@/common/context"
import { ethers, providers } from "ethers";

import { ContractInterface } from "@ethersproject/contracts";
import { useMemo } from "react";
import { ChainId, CONTRACTS } from "../../constants/contracts";

export const useContract = (contractName) => {
 const { web3Provider, chainId } = useWeb3Context();

  const contractInfo = CONTRACTS[contractName]
  if (!contractInfo) return null;

  return useMemo(
    () => {
      const address = contractInfo.address[chainId]
      const abi = contractInfo.abi

      if (!address || address.length === 0 || !abi) {
        return null
      }

      return new ethers.Contract(address, abi, web3Provider.getSigner());
    },
    [contractInfo.address, contractInfo.abi, chainId, web3Provider]
  )
}