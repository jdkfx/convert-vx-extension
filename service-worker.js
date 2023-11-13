chrome.commands.onCommand.addListener(function (command) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		const activeTab = tabs[0];
		const url = new URL(activeTab.url);
		const convertHostName = "vxtwitter.com";
		let result = "";
		console.log(url);
		if (url.hostname == "twitter.com" || url.hostname == "x.com") {
			result = url.protocol + "//" + convertHostName + url.pathname;	
		}
		(async () => {
			chrome.tabs.sendMessage(activeTab.id, { command: "convert", text: result })
			.then((response)=> {
				console.log(result)
			})
			.catch((error)=> {
				console.log(error)
			})
		})();
	});
})
