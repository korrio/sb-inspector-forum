import Dialog from "../Dialog";
import React, { useEffect } from "react";
import DialogFooter from "../Dialog/DialogFooter";
import DialogContent from "../Dialog/DialogContent";
import { useWeb3Context } from "@/common/context";
import TokenBalanceChip from "./TokenBalanceChip";

const WalletConnectorDialog = ({ showDialog, close }) => {
    const { disconnect, chainId } = useWeb3Context()
    const ChainId = {
        ETH_MAINNET: 1,
        OPTIMISM: 10,
        RINKEBY: 4,
        BSC_MAINNET: 56,
        BSC_TESTNET: 97
    }

    return (
        <Dialog
        showDialog={showDialog} 
        dialogTitleCenter={true}
        onClose={close}
        dialogTitle="Your Wallet"
        dialogSize="modal-sm"
    >
        <DialogContent>
            {chainId === ChainId.BSC_MAINNET ? (
                <>
                    <TokenBalanceChip symbol="BNB" />
                    <TokenBalanceChip symbol="BUSD" />
                    <TokenBalanceChip symbol="JUTC" />
                </>
            ) : chainId === ChainId.ETH_MAINNET ? (
                <>
                    <TokenBalanceChip symbol="ETH" />
                </>
            ) : chainId === ChainId.RINKEBY ? (
                <>
                    <TokenBalanceChip symbol="ETH" />
                </>
            ) : (
                <></>
            )}

        </DialogContent>
        <DialogFooter>
            <div className="w-100 m-0 text-center">
                <button
                    className="btn btn-link"
                    type="button"
                    onClick={ async () => {
                        disconnect()
                        close()
                    }
                    }>
                    Disconnect Wallet
                </button>
            </div>
        </DialogFooter>
    </Dialog>
    );
};

export default WalletConnectorDialog;