import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/router';

import { useWeb3Context } from "@/common/context";
import TokenBalanceChip from "./TokenBalanceChip";

import showToast from '@/common/utils/showToast';
import httpRequest from '@/common/utils/httpRequest';

import { getCookie } from '@/common/utils/session';

const WalletConnectorDialogNew = ({ showDialog, close }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBuy = () => setShow(true);

  const router = useRouter();

      const { disconnect, chainId,address } = useWeb3Context()
    const ChainId = {
        ETH_MAINNET: 1,
        OPTIMISM: 10,
        RINKEBY: 4,
        BSC_MAINNET: 56,
        BSC_TESTNET: 97
    }

      const onLogoutClick = async (e) => {
    // e.preventDefault();
    try {
      const response = await httpRequest.get({
        url: `/current_user/logout`,
        token: getCookie('token')
      });

      if (response.data.success) {
        removeCookie('token');
        showToast.success('Logout success');
        router.push('/login');
      }
    } catch (error) {
      console.log(error.response);
      showToast.error();
    }
  };

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

          <p className="text-justify text-center"><label>Address</label><br/> {address} <br/></p>
        	
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

            <p className="text-justify text-center"><label>NFT</label><br/></p>
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
                      onLogoutClick()
                        disconnect()
                        close()
                        
                    }
                    }>
                    Disconnect Wallet
                </Button>
{/*           <Button variant="primary" onClick={handleBuy}>
            Buy JUTC
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WalletConnectorDialogNew;
// render(<Example />);