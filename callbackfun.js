let browser = "chrome"

function checkBrowserVersion(callback){
    setTimeout(function() {
        callback(browser)
    }, 2000);
}

function displayBrowserVersion(browserVersion) {
    console.log("Browser versiob using callback:" , browserVersion)

}

checkBrowserVersion(displayBrowserVersion)