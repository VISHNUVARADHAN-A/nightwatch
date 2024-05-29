module.exports={
"get_url" : function(browser){
    browser.url("https://www.npmjs.com/package/nightwatch");
    browser.pause(3000);
    browser.click('#search > div > div > input');
    browser.setValue('#search > div > div > input','hello');
    browser.pause(2000);
    browser.click('#search > button');
    browser.pause(2000);
    browser.end();
},
};