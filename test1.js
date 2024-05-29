module.exports={
    "test1" : function(browser){
browser.url("https://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html");
browser.pause(1000);
// browser.assert.visible('#assert-verify-header');
// browser.click('#make-header-invisible');
// browser.assert.not.visible('#assert-verify-header');
// browser.expect.element('#assert-verify-header').to.not.be.visible; //.not.be.visible; not.be.visible; not.be.visible;
// browser.assert.containsText('#more-text','some more text');
// browser.click("#change-text");
// browser.assert.not.containsText('#more-text','some more text')
// browser.assert.containsText('#more-text','You changed');

// browser.expect
// .element('#more-text')
// .text.equal("Hello! I'm some more text!");

// browser.expect
// .element('#more-text')
// .text.contains("some more text!");

// browser.expect
// .element('#some-list')
// .text.contains("One");

// browser.assert.elementPresent('#some-list');
// browser.click('#remove-list');
// browser.assert.not.elementPresent('#some-list');

// browser.expect
// .element('#some-list').to.be.present;

// browser.click('#remove-list');

// browser.expect
// .element('#some-list').not.to.be.present;

browser.end();

    }}