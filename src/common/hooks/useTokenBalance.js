import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3Context } from "@/common/context"
import { useContract } from "./useContract"
import { formatEther } from 'ethers/lib/utils'

export const useTokenBalance = (symbol) => {
    const { address, chainId } = useWeb3Context()
    const [balance, setBalance] = useState(ethers.utils.parseEther("0"))
    //const [balance, setBalance] = useState('')
    const tokenContract = useContract(symbol)

    const getBalance = async () => {
        //const balance = await web3Provider.getBalance(address)
        const balance = await tokenContract?.balanceOf(address)
        setBalance(balance)
    }

  useEffect(() => {
    getBalance()
  }, [chainId])
  
  return balance
}