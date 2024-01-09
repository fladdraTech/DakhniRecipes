const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  // resolver: {
  //   blockList: {
  //     "E:\\Development\\DakhniRecipes\\frontend\\app.tsx": true,
  //   },
  // },
  // transformer: {
  //   assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  // },
//   serializer: {
//     createModuleIdFactory: require('metro-react-native-babel-transformer').createModuleIdFactory,
//   },
  // Add any other configurations you need...
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
