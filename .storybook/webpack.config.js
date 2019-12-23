const path = require('path')

// Export a function. Accept the base config as the only param.
// SEE: https://storybook.js.org/docs/configurations/custom-webpack-config/#full-control-mode
module.exports = async ({ config }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.sass$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              indentedSyntax: true
            },
            // data: `@import "styles/_chunk.sass";`,
            data: `@import "@/assets/style/_chunk.sass";`,
          }
        }
      ],
      include: path.resolve(__dirname, './'),
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, './'),
    },
    {
      test: /\.pug$/,
      oneOf: [
        {
          resourceQuery: /^\?vue/,
          use: ['pug-plain-loader']
        },
      ],
      include: path.resolve(__dirname, './'),
    }
  );

  config.resolve.alias = {
    '~': path.join(__dirname, './'),
    '@': path.join(__dirname, './'),
    vue$: 'vue/dist/vue.esm.js',
  }

  // Return the altered config
  return config;
};
