import { useState,useEffect } from "react";
import { useRouter } from 'next/router';
import clsx from "clsx";
import { useWeb3Context } from '../../context'
import WalletConnectorDialog from "./WalletConnectorDialog";
import WalletConnectorDialogNew from "./WalletConnectorDialogNew";

import showToast from '@/common/utils/showToast';

const getShortenWalletAddress = (account) => {
  return `${account.slice(0, 4)}....${account.slice(
    account.length - 5,
    account.length - 1
  )}`;
};

const WalletConnectorButton = () => {
    const { web3Provider, connect, address } = useWeb3Context()

    const [showDialog, setShowDialog] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState(false)

    const router = useRouter();

    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    // const web3Login = async () => {
        
    //             const user = {
    //                 user_name: address,
    //                 password: `${address}@password`
    //             };
    //             setUser(user)

    //             await onLogin(user);
            
    //     }

    // useEffect(() => {
    //     if(address) {
    //         router.push('/');
    //     }
    // }, [address])

     const onLogin = async (values) => {
        try {
            const user = {
                user_name: values.user_name,
                password: values.password
            };
            setLoading(true);
            const response = await httpRequest.post({
                url: `/users/login`,
                data: user
            });
            if (response.data.success) {
                showToast.success('Login success');
                setCookie('token', response.data.data.access_token);
                router.push('/');
            }
        } catch (error) {
            showToast.error('Login error');
            if (!error?.response?.data?.success) {
                console.log("error",error.response)
                // setErrors(error.response.data);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {web3Provider ? (
                <>
{/*                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={open}
                    >
                        {address && `${getShortenWalletAddress(address)}`}
                    </button> */}
                    {/*<WalletConnectorDialog showDialog={showDialog} close={close} />*/}
                    <WalletConnectorDialogNew showDialog={showDialog} close={close} />
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
