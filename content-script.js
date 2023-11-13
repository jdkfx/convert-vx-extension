chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.command == "convert") {
        navigator.clipboard.writeText(message.text).then(function () {
            /* clipboard successfully set */
        }, function () {
            /* clipboard write failed */
        });
    }
});