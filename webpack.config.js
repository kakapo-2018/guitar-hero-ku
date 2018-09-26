const webpack = require("webpack");

module.exports = {
  "mode": "development",
  "entry": "./client/index.js",
  "output": {
    "path": __dirname + "/public",
    "filename": "bundle.js"
  },
  "devtool": "source-map",
  "module": {
    "rules": [
      {
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "env",
              "react"
          ]
        }
      }
    }
  ]
},
  resolve: {
    extensions: [".js", ".jsx"]
  },
}