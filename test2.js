module.exports={
    //tag
    //tags:["testthis"], 
    //npx nightwatch -e edge --headless --tag testthis //run file with have tags 
    //npx nightwatch -e edge --headless --skiptag testthis //skip file with have tags 
    //npx nightwatch -e edge --headless --group groupname // run file from this folder
    //npx nightwatch -e edge --headless --skipgroup groupname skip file in this folder
    //npx nightwatch -e edge --headless --group groupname/sub group // run everthing in sub group
    //npx nightwatch -e edge --headless --skipgroup groupname/sub group // skip everthing in subgroup
    //npx nightwatch -e edge --headless --skipgroup groupname --group groupname/sub group // run everthing
    //npx nightwatch -e edge --headless --skipgroup groupname --group sub group //skip only subgroup
    "test2" : function(browser){
        // 
        //npx nightwatch -e edge --headless // run evrything including sub folders
        //npx nightwatch ./test/test2.js -e edge --headless  // run individual 
        //npx nightwatch -e edge --headless ./test/test2.js // run evrything including sub folders
        //npx nightwatch -e edge --headless ./test/test2.js --test // run individual 

//browser.url("https://tutorials.actionqa.com/yt/nw/asserts/enabled.html");


// browser.pause(1000);

///Disable enable
// browser.assert.attributeEquals("#am-i-disabled","disabled","true");
// browser.setValue("#type-to-enable",'enable');
// browser.assert.attributeEquals("#am-i-disabled","enabled","true"); // will not work
// browser.pause(1000);
// browser.expect.element("#am-i-disabled").not.enabled;
// browser.setValue("#type-to-enable",'enable');
// browser.expect.element("#am-i-disabled").be.enabled;

/// waitFor element
browser.url("https://tutorials.actionqa.com/yt/nw/asserts/wait-for-element.html");
browser.assert.visible("#element-1");
browser.waitForElementVisible("#element-2",8000);
browser.assert.not.elementPresent("#element-1");
browser.waitForElementNotPresent("#element-2",8000);

browser.end();    
}}
