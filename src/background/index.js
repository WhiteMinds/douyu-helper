function openOrFocusOptionsPage () {
  let optionsUrl = chrome.extension.getURL('options.html')
  chrome.tabs.query({}, function (extensionTabs) {
    let found = false
    for (let i = 0, len = extensionTabs.length; i < len; i++) {
      if (optionsUrl === extensionTabs[i].url) {
        found = true
        chrome.tabs.update(extensionTabs[i].id, { selected: true })
        break
      }
    }
    if (found === false) {
      chrome.tabs.create({ url: optionsUrl })
    }
  })
}

chrome.browserAction.onClicked.addListener(function (tab) {
  openOrFocusOptionsPage()
})
