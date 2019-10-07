module.exports = {
    "preset": 'jest-puppeteer', //调用preset
    "testMatch": ['<rootDir>./tests/test.js?(x)'], //指定需要进行测试的文件
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./html-report",  //specify the base path
            "filename": "report.html",  //Filename of saved report,Applies to the generated html
            "expand": true //specify whether default expand all data
        }]
    ],
}