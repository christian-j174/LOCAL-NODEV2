require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/hDFtA53t2-frm116GBZPKVsdfULNY0ju',
      accounts: ['45e9fa2fc9714fc120feffdfd3d367da7f3c190b48e855e56bea817b1c9053af'],
    },
  },
};

