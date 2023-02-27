[日本語版 Readme はこちら](./README_ja.md)をご参照ください。

This repository is a template to execute test scripts generated by LatteArt.

This uses the testing framework [WebdriverIO](https://webdriver.io/).

# Setup

- Install Node.js version 14.
    - The test script using Sync mode in WDIO generated by LatteArt is not compatible with Node version 16 or later. 
- Put `test.spec.js`, `page_objects`, and `test_data` into the root directory, which are automatically generated by LatteArt.
- Execute `npm install`
    - Install Python if requested.


# Test Execution

`npm run test`

# Run in headless mode of Google Chrome

Uncomment the following in `wdio.conf.js`.

```
//   "goog:chromeOptions": {
//     args: ["--headless", "--disable-gpu"]
//   }
```

# Show Test Report

`npm run report`

This outputs test results using the [Allure Framework](http://allure.qatools.ru/).
Test results are accumulated and displayed as graphs.
In case of a test failure, a screenshot will be taken automatically.
The screenshot can be seen from the bottom of the "Execution" column in the "Overview" of each test case.