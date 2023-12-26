const { defineConfig } = require("cypress");

watchForFileChanges:false
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges:false
  },
});
