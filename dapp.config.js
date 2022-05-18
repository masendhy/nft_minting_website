const FORTMATIC_KEY = process.env.NEXT_PUBLIC_FORTMATIC_KEY
const RPC_URL = process.env.NEXT_PUBLIC_ALCHEMY_RPC_URL
const config = {
  title: 'BoredApe Dapp',
  description: 'a showcase dapp witch is built for you to creat your own',
  contractAddress: '0x7399E31089C06F7b4111BF166E578Ff90bbdfa26',
  maxMintAmount: 10,
  presaleMaxMintAmount: 3,
  pric: 0.01
}

const onboardOptions = {
  dappId: process.env.NEXT_PUBLIC_DAPP_ID,
  networkId: 4, // Rinkeby,
  darkMode: true,
  walletSelect: {
    wallets: [
      { walletName: 'metamask', preferred: true },
      { walletName: 'coinbase', preferred: true },
      {
        walletName: 'walletLink',
        preferred: true,
        rpcUrl: RPC_URL,
        appName: 'BoredApe Dapp'
      },
      {
        walletName: 'fortmatic',
        apiKey: FORTMATIC_KEY,
        preferred: true
      },
      { walletName: 'trust', preferred: true, rpcUrl: RPC_URL },
      { walletName: 'gnosis', preferred: true },
      { walletName: 'authereum' },
      // {
      //   walletName: 'trezor',
      //   appUrl: APP_URL,
      //   email: CONTACT_EMAIL,
      //   rpcUrl: RPC_URL
      // },
      {
        walletName: 'ledger',
        rpcUrl: RPC_URL
      },
      {
        walletName: 'lattice',
        rpcUrl: RPC_URL,
        appName: 'BoredApp Dapp'
      },
      {
        walletName: 'keepkey',
        rpcUrl: RPC_URL
      }
      // {
      //   walletName: 'mewwallet',
      //   rpcUrl: RPC_URL
      // },
      // {
      //   walletName: 'cobovault',
      //   rpcUrl: RPC_URL,
      //   appName: APP_NAME
      // },
      // {
      //   walletName: 'keystone',
      //   rpcUrl: RPC_URL,
      //   appName: APP_NAME
      // },

      // {
      //   walletName: 'portis',
      //   apiKey: PORTIS_KEY,
      //   preferred: true,
      //   label: 'Login with Email'
      // },
      // {
      //   walletName: 'walletConnect',
      //   infuraKey: INFURA_KEY
      // }
    ]
  },
  walletCheck: [
    { checkName: 'derivationPath' },
    { checkName: 'accounts' },
    { checkName: 'connect' },
    { checkName: 'network' }
  ]
}

export { config, onboardOptions }
