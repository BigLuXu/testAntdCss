const CracoLessPlugin = require('craco-less');
const AntDesignTheme = require('./src/antd/antd-theme.json')
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: AntDesignTheme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};