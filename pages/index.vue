<template>
  <div id="app">
    <img class="header-img" src="../static/header.jpg" />

    <div class="center">
      <div class="description1">
        The Most Reliable Workers’ SBT in the World
      </div>
      <div class="description2">得意を中心に生きていくための SBTをMint</div>
      <button class="sign-button" @click="sign">sign</button>
    </div>
    <img class="header-img" src="../static/people.jpg" />

    <!-- <p>wallet_address: {{ walletAddress }}</p>
      <p>{{ howmany }} USDT</p>
    </div>
    <div>nonce: {{ nonce }}</div>
    <div v-if="load">
      <div v-if="howmany > 0">
        <p>HELLO,WORLD!</p>
      </div>
      <div v-else>
        <p>You dont have token.</p>
      </div> -->
  </div>
</template>

<script>
import Web3 from 'web3';
import axios from 'axios';
export default {
  name: 'TopPage',
  components: {},
  data: () => ({
    walletAddress: null,
    nonce: null,
    howmany: null,
    load: false,
    sec_load: false
  }),
  async mounted() {
    if (window.ethereum) {
      this.walletAddress = await this.getAccount();
      this.nonce = await this.getNonce();
      this.howmany = await this.getTokenBalance(this.walletAddress);
      this.load = true;
    } else {
      window.addEventListener('ethereum#initialized', this.handleEthereum, {
        once: true
      });
      setTimeout(this.handleEthereum, 3000);
    }
  },
  methods: {
    //
    handleEthereum: async function () {
      const { ethereum } = window;
      if (ethereum && ethereum.isMetaMask) {
        // console.log("Ethereum successfully detected!");
        console.log(ethereum.selectedAddress);
        const myaddress = ethereum.selectedAddress;
        return myaddress;
      } else {
        console.log('Please install MetaMask!');
      }
    },

    // connect metamask
    getAccount: async function () {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      // console.log(accounts);
      // this.$store.('setWalletAddress', accounts[0] || '');
      return accounts[0];
    },

    // connect api
    getNonce: async function () {
      var options = {
        method: 'GET',
        url: 'http://18.183.118.0:3000/auth/nonce/' + this.walletAddress
      };
      try {
        const response = await axios.request(options);
        return response.data.nonce || '';
      } catch (error) {
        console.error(error);
        return;
      }
    },

    // balance (example call method) (not used)
    getTokenBalance: async function (address) {
      const web3 = new Web3();
      web3.setProvider(
        new web3.providers.HttpProvider(
          'https://mainnet.infura.io/v3/1c2b12ebcf9f4123b64d6960ccb7bb55'
        )
      );
      const WALLET_ADDRESS = address;
      const CONTRACT_ADDRESS = '0xdac17f958d2ee523a2206206994597c13d831ec7';
      let minABI = [
        {
          constant: true,
          inputs: [{ name: '_owner', type: 'address' }],
          name: 'balanceOf',
          outputs: [{ name: 'balance', type: 'uint256' }],
          type: 'function'
        },
        {
          constant: true,
          inputs: [],
          name: 'decimals',
          outputs: [{ name: '', type: 'uint8' }],
          type: 'function'
        }
      ];
      const contract = new web3.eth.Contract(minABI, CONTRACT_ADDRESS);
      var balance = await contract.methods.balanceOf(WALLET_ADDRESS).call();
      var decimal = await contract.methods.decimals().call();
      var balance_result = balance / 10 ** decimal;
      return balance_result;
    },

    // example sign
    sign: async function () {
      const messagebody = JSON.stringify({
        domain: {
          // chainId: 1,
          // name: 'Arigato Java',
          // version: '1'
        },
        message: {
          text: this.nonce
        },
        primaryType: 'Message',
        types: {
          Message: [{ name: 'text', type: 'string' }]
        }
      });
      window.ethereum
        .request({
          method: 'eth_signTypedData_v4',
          params: [this.walletAddress, messagebody]
        })
        .then((res) => {
          console.log(res);
          return this.apiPostAuthConnect(
            this.walletAddress,
            JSON.parse(messagebody),
            res
          );
        })
        .then((res) => {
          // store jwt token
          this.$store.commit('setToken', res.data?.token || '');
          this.$router.push('/transaction');
          console.info(res.data?.token);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // example send transaction
    send: async function () {
      const params = [
        {
          from: this.walletAddress,
          to: this.walletAddress,
          gas: Web3.utils.toHex('21000'), // 21000
          gasPrice: Web3.utils.toHex('10000000000'), //
          value: Web3.utils.toHex('10000000000000000'), // 0.01 ETH
          data: '0x'
        }
      ];

      window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params
        })
        .then((result) => {
          console.info(result);
          // The result varies by RPC method.
          // For example, this method will return a transaction hash hexadecimal string on success.
        })
        .catch((error) => {
          console.info(error);
          // If the request fails, the Promise will reject with an error.
        });
    }
  }
};
</script>
<style>
.header-img {
  width: 100vw;
  object-fit: cover;
}
.sign-button {
  display: inline-block;
  outline: none;
  border-width: 0px;
  border-radius: 3px;
  box-sizing: border-box;
  font-size: inherit;
  font-weight: 500;
  max-width: 100%;
  text-align: center;
  text-decoration: none;
  transition: background 0.1s ease-out 0s,
    box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s;
  background: rgb(0, 82, 204);
  cursor: pointer;
  height: 3em;
  line-height: 24px;
  padding: 0px 12px;
  vertical-align: middle;
  width: 5em;
  font-size: 14px;
  color: rgb(255, 255, 255);
  margin: 2em;
}

.sign-button:hover {
  background: rgb(0, 101, 255);
  text-decoration: inherit;
  transition-duration: 0s, 0.15s;
  color: rgb(255, 255, 255);
}
.center {
  text-align: center;
  font-size: 1.5em;
}
</style>
