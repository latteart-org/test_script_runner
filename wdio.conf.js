exports.config = {
  runner: "local",
  specs: ["./test.spec.js"],
  exclude: [],
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
      // "goog:chromeOptions": {
      //     args: ["--headless", "--disable-gpu"]
      // }
    }
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results"
      }
    ]
  ],
  mochaOpts: {
    require: ["@babel/register"],
    ui: "bdd",
    timeout: 50000
  },
  afterTest: function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    if (!passed) {
      browser.takeScreenshot();
    }
  },
  onComplete: function () {
    const fs = require("fs-extra");
    fs.mkdir("./allure-results/history", { recursive: true }, (err) => {
      if (err) throw err;
    });
    if (fs.existsSync("./allure-report/history")) {
      fs.copySync("./allure-report/history", "./allure-results/history");
    }
    const allure = require("allure-commandline");

    const reportError = new Error("Could not generate Allure report");
    const generation = allure(["generate", "allure-results", "--clean"]);
    return new Promise((resolve, reject) => {
      generation.on("exit", function (exitCode) {
        if (exitCode !== 0) {
          return reject(reportError);
        }

        fs.removeSync("./allure-results");
        console.log("Allure report successfully generated");
        resolve();
      });
    });
  }
};
