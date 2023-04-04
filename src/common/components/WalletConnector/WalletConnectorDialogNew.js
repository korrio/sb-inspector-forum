import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useWeb3Context } from "@/common/context";
import TokenBalanceChip from "./TokenBalanceChip";

const WalletConnectorDialogNew = ({ showDialog, close }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

      const { disconnect, chainId,address } = useWeb3Context()
    const ChainId = {
        ETH_MAINNET: 1,
        OPTIMISM: 10,
        RINKEBY: 4,
        BSC_MAINNET: 56,
        BSC_TESTNET: 97
    }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Your Wallet
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Assets</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <p class="text-justify text-center"><label>Address</label><br/> {address} <br/></p>
        	
         {chainId === ChainId.BSC_MAINNET ? (
                <>
                    <TokenBalanceChip symbol="BNB" />
                    <TokenBalanceChip symbol="BUSD" />
                    <TokenBalanceChip symbol="JUTC" />
                </>
            ) : chainId === ChainId.BSC_TESTNET ? (
                <>
                    <TokenBalanceChip symbol="BNB" />
                    <TokenBalanceChip symbol="BUSD" />
                    <TokenBalanceChip symbol="JUTC" />
                </>
            ) :
             chainId === ChainId.ETH_MAINNET ? (
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

            <p class="text-justify text-center"><label>NFT</label><br/></p>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
           <Button
           variant="secondary"
                    className="btn"
                    type="button"
                    onClick={ async () => {
                        disconnect()
                        close()
                    }
                    }>
                    Disconnect Wallet
                </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WalletConnectorDialogNew;
// render(<Example />);