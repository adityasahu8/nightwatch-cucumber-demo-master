let loginCommands = {
    verifyPageTitle: function(text){
        return this.waitForTitleContains("@loginButton",text || "Avalara Identity");
    },
    enterUserNameTextBox: function(){
        return this.enterValueInElement("@userNameTextBox", "aditya_sbx");
    },
    enterPasswordTextBox: function(){
        return this.enterValueInElement("@passwordTextBox", "aditya@123");
    },
    clickOnLoginButton: function(){
        return this.clickOnElement("@loginButton");
    }
}

let loginPage = {
    elements: {
      userNameTextBox: '#Username',
      passwordTextBox: '#Password',
      loginButton: "button#loading",
    },
    commands: [loginCommands]
};
module.exports = loginPage;