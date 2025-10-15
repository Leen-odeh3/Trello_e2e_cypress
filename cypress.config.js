const { defineConfig } = require('cypress');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    chromeWebSecurity: false,
    baseUrl: 'https://trello.com/',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
      return config;
    },
  }
// screenshotOnRunFailure :false,
//   reporter: 'mochawesome',
//   reporterOptions: {
//     reportDir: 'cypress/myReport',
//     overwrite: false,
//     html: true,
//     json: false,
//     timestamp: 'mmddyyyy_HHMMss',
//   },
});
