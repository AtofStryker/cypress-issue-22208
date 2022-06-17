const { defineConfig } = require("cypress");
const webpackPreprocessor = require('@cypress/webpack-preprocessor')
const webpackConfig = require("./webpack.config");

export default defineConfig({
    env: {
      codeCoverage: {
        exclude: 'cypress/**/*.*'
      }
    },
    component: {
        retries: {
            runMode: 2,
        },
        video: false,
        fixturesFolder: false,
        setupNodeEvents(on, config) {
            require("@cypress/code-coverage/task")(on, config);

            const options = {
                // send in the options from your webpack.config.js, so it works the same
                // as your app's code
                webpackOptions: require("./webpack.config"),
                watchOptions: {},
            };

            on("file:preprocessor", webpackPreprocessor(options));

            return config;
        },
        devServer: {
            framework: "react",
            bundler: "webpack",
            webpackConfig,
        },
        viewportWidth: 800,
        viewportHeight: 800,
    },
});