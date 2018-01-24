var upstreamTransformer = require("metro/src/transformer");
var sassTransformer = require("react-native-sass-transformer");
var cssTransformer = require("react-native-css-transformer");

module.exports.transform = function({ src, filename, options }) {
  if (filename.endsWith(".scss")) {
    return sassTransformer.transform({ src, filename, options });
  } else if (filename.endsWith(".css")) {
    return cssTransformer.transform({ src, filename, options });
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};
