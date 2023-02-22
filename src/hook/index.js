import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import { injected } from "../wallet";

export const useMetaMaskWorked = () => {
  const [installed, setInstalled] = useState(false);
  const { account, active, activate, deactivate } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", true);
    } catch (ex) {
      console.log(ex);
    }
  };

  const disconnect = async () => {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", false);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    const { ethereum } = window;

    if (ethereum && ethereum.isMetaMask) {
      setInstalled(true);
    } else {
      setInstalled(false);
    }

    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", true);
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
  }, [activate]);

  const downloadApp = () => {
    window.open(
      "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/related?hl=en"
    );
  };

  return {
    active,
    account,
    connect,
    disconnect,
    installed,
    downloadApp,
  };
};
