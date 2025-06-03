// babel.config.js   (в корне проекта)
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
      '@babel/plugin-transform-private-methods',
    ],
  };
};
