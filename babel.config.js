module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-env', '@babel/preset-react'],
    plugins: [
      ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ],
  };
};