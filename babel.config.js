module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-transform-private-methods', { loose: false }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: false }],
    ],
  };
};
