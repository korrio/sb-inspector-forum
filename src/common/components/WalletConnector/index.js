import { useState } from "react";
import clsx from "clsx";
import { useWeb3Context } from '../../context'
import WalletConnectorDialog from "./WalletConnectorDialog";

const getShortenWalletAddress = (account) => {
  return `${account.slice(0, 4)}....${account.slice(
    account.length - 5,
    account.length - 1
  )}`;
};

const WalletConnectorButton = () => {
    const { web3Provider, connect, address } = useWeb3Context()

    const [showDialog, setShowDialog] = useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);


    return (
        <>
            {web3Provider ? (
                <>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={open}
                    >
                        {address && `${getShortenWalletAddress(address)}`}
                    </button>
                <WalletConnectorDialog showDialog={showDialog} close={close} />
                </>
            ) : (
                <button className="btn btn-primary" type="button" onClick={connect}>
                    Connect Wallet
                </button>
            )}

        </>
    );
};

export default WalletConnectorButton;
