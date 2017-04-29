# Truffle Box (React, Redux and UPort Authentication)

All truffle boxes come with Truffle, Webpack and React. This box adds react-router, redux and redux-auth-wrapper for authentication powered by UPort. The easiest way to get started with UPort.

## Installation

1. Install geth, truffle and an ethereum client. For local development, try EthereumJS TestRPC.  Geth might take a while, but instructions can be found here: https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Mac -- then after that install truffle:
    ```javascript
    npm install -g truffle // Version 3.0.5+ required.
    npm install -g ethereumjs-testrpc
    ```

2. Clone or download the truffle box of your choice.
    ```javascript
    git clone [repo]
    ```

3. Install the node dependencies.
    ```javascript
    npm install
    ```
4. Start geth console, and open a port on your local machine
  ```javascript
  geth console
  admin.startRPC("127.0.0.1", 8545, "*", "web3,db,net,eth")
  ```

5. Compile and migrate the contracts.
    ```javascript
    NODE_ENV=test truffle compile
    NODE_ENV=test truffle migrate
    ```

6. Run the webpack server for front-end hot reloading. For now, smart contract changes must be manually recompiled and migrated.
    ```javascript
    npm run start
    ```

7. Jest is included for testing React components and Truffle's own suite is incldued for smart contracts. Be sure you've compile your contracts before running jest, or you'll receive some file not found errors.
    ```javascript
    // Runs Jest for component tests.
    npm run test

    // Runs Truffle's test suite for smart contract tests.
    truffle test
    ```

8. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## FAQ

* __Why is there both a truffle.js file and a truffle-config.js file?__

    Truffle requires the truffle.js file be named truffle-config on Windows machines. Feel free to delete the file that doesn't correspond to your platform.

* __Where is my production build?__

    The production build will be in the build_webpack folder. This is because Truffle outputs contract compilations to the build folder.

* __Where can I find more documentation?__

    All truffle boxes are a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
