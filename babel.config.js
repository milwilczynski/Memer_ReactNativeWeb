module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset', '@babel/preset-env', '@babel/preset-react'],
    plugins: [
      [
          require("@babel/plugin-proposal-class-properties"), { loose: false }
      ],
        ["@babel/plugin-syntax-class-properties"],

    ],
  };
};