import React from "react";
import { useMetaMaskWorked } from "./hook";

function App() {
  const { active, account, connect, disconnect, installed, downloadApp } =
    useMetaMaskWorked();

  const conditionMessage = (active, account, installed) => {
    return !installed ? (
      <span>MetaMask 플러그인이 설치되지 않았습니다.</span>
    ) : active ? (
      <span>
        Accounts: <b>{account}</b>
      </span>
    ) : (
      <span>연결 없음</span>
    );
  };

  const message = conditionMessage(active, account, installed);

  return (
    <div className="App">
      {!installed ? (
        <button onClick={downloadApp}>MetaMask 설치</button>
      ) : active ? (
        <button onClick={disconnect}>logout</button>
      ) : (
        <button onClick={connect}>MetaMask 연결</button>
      )}
      <p>{message}</p>
    </div>
  );
}

export default App;
