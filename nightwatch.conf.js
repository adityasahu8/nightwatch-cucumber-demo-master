const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');
//const geckodriver = require('geckodriver');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
});

module.exports = {
  output_folder: 'reports',
  globals_path: "./globals/globalModules.js",
  custom_commands_path : "commands",
  custom_assertions_path : "assertions",
  page_objects_path : "pages",
  live_output: true,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 9000
  },
  test_settings: {
    default: {
      test_workers: true,
      launch_url: 'https://cup-test.avlr.sh/',
      selenium_port: 9000,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        "chromeOptions" : {
          "args" : ["start-fullscreen"]
        },
        "globals": {
          waitForConditionTimeout: 7000
        }
      }
    },
    qa : {
      launch_url : "https://portal-qa.avlr.sh/",
      globals : {
      }
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        "chromeOptions" : {
          "args" : ["start-fullscreen"]
        }
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
};
