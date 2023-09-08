const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  "retries": 2,  
        //individual retry code for runMode and openMode
  // "retries": {
       // Configure retry attempts for `cypress run`
  //   // Default is 0
  //   "runMode": 2,
          //   // Configure retry attempts for `cypress open`
  //   // Default is 0
  //   "openMode": 2
  // },
  e2e: {    
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here 
    //   module.exports = (on, config) =>{require ('cypress-grep/src/plugin')(config)}
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});