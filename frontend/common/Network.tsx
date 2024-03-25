"use client";

// Copyright 2022 Cartesi Pte. Ltd.

// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy
// of the license at http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

import { FC, useEffect } from "react";
import { useConnectWallet, useSetChain } from "@web3-onboard/react";
import configFile from "../config.json";
import { usePeepsContext } from "../context/Index";

const config: any = configFile;

export const Network: FC = () => {
  // const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const [{ chains, connectedChain, settingChain }, setChain] = useSetChain();
  const {
    updateBaseDappAddress,
    updateCurrentUser,
    wallet,
    connecting,
    connect,
    disconnect,
    notices,
  } = usePeepsContext();

  useEffect(() => {
    if (notices) {
      updateBaseDappAddress(wallet?.accounts[0]?.address);
      notices?.length > 0 &&
        updateCurrentUser(
          JSON.parse(notices?.reverse()[0].payload).users.filter(
            (it: any) => it.address === wallet?.accounts[0]?.address
          )
        );
    }
  }, [wallet]);

  const handleWalletConnect = () => {
    connect();
  };

  return (
    <div>
      {!wallet && (
        <button
          type="button"
          className="btn btn-primary rounded-box"
          onClick={handleWalletConnect}
        >
          {connecting ? "connecting" : "connect"}
        </button>
      )}
      {wallet && (
        <div className="space-x-3">
          {/* <label>Switch Chain</label> */}
          {settingChain ? (
            <span>Switching chain...</span>
          ) : (
            <select
              className="select select-sm ring-0 max-w-xs focus:outline-0 bg-base-200 focus:bg-base-300"
              onChange={({ target: { value } }) => {
                if (config[value] !== undefined) {
                  setChain({ chainId: value });
                } else {
                  alert("No deploy on this chain");
                }
              }}
              value={connectedChain?.id}
            >
              {chains.map(({ id, label }) => {
                return (
                  <option key={id} value={id}>
                    {label}
                  </option>
                );
              })}
            </select>
          )}
          <button onClick={() => disconnect(wallet)}>Disconnect Wallet</button>
        </div>
      )}
    </div>
  );
};