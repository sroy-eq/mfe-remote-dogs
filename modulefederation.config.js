const { dependencies } = require("./package.json");

module.exports = {
  name: "dogs",
  exposes: {
    "./App": "./src/App",
  },
  filename: "remoteEntry.js",
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react"],
    },
    "react-dom": {
      singleton: true,
      eager: true,
      requiredVersion: dependencies["react-dom"],
    },
  },
};
