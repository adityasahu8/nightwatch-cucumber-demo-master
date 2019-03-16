var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber.json',
        output: 'reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: false,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "CI",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "MacOX High Sierra",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
reporter.generate(options);