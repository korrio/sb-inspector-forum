import { useTokenBalance } from "@/common/hooks/useTokenBalance";
import { formatEther } from "ethers/lib/utils";

const TokenBalanceChip= ({ symbol }) => {
  const balance = useTokenBalance(symbol);

  return (
    <div className="text-center">
        <h6>{symbol} balance</h6>
        <p>{balance ? formatEther(balance) : "-"} {symbol}</p>
    </div>
  );
};

export default TokenBalanceChip;
