# Web3-react MetaMask

### 설치

```
npm i @web3-react/core @ethersproject/providers
```

## 지갑 연동

wallet을 dapp에 연결하기 위해서는 해당 wallet에 맞는 connector를 activate 함수에 전달해야 한다.

### metaMask 연동

@web3-react/injected-connector 를 설치한다. (metamask 크롬 익스텐션 설치 필요)

```
npm i @web3-react/injected-connector
```

##### src/wallect/index.js

injectedConnector 인스턴트 생성 (connector들만 모아 관리)

```
import { InjectedConnector } from "@web3-react/injected-connector";

export const injected = new InjectedConnector();
```

### useWeb3React 활용 context 값 접근하기

```
const {
  connector,
  library,
  chainId,
  account,
  active,
  error,
  activate,
  deactivate
} = useWeb3React();
```

- connector: 현재 dapp에 연결된 월렛의 connector 값
- library: web3 provider 제공
- chainId: dapp에 연결된 account의 chainId
- account: dapp에 연결된 account address
- active: dapp 유저가 로그인 된 상태인지 체크
- activate: dapp 월렛 연결 기능 수행 함수
- deactivate: dapp 월렛 연결 해제 수행 함수
