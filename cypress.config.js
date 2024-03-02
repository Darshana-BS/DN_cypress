const { defineConfig } = require("cypress");

watchForFileChanges:false
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false,
    "reporter": "mochawesome",
      "reporterOptions": {
        "charts": true,
        "overwrite": false,
        "html": false,
        "json": true,
        "reportDir": "cypress/report/mochawesome-report"
      }
  },
});
