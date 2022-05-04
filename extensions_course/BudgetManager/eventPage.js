let contextMenuItem = {
  "id": "spendMoney",
  "title": "SpendMoney",
  "contexts": ["selection"]
}
chrome.contextMenus.create(contextMenuItem)

const isInt = (value) => {
  return !isNaN(value) &&
         parseInt(Number(value)) && 
         !isNaN(parseInt(value, 10))
}

chrome.contextMenus.onClicked.addListener(({menuItemId, selectionText}) => {
  if(menuItemId == "spendMoney" && selectionText) {
    if(isInt(selectionText)) {
      chrome.storage.sync.get(['total','limit'], ({total, limit}) => {
        let newTotal = 0
        if(total) {
          newTotal += Number(total)
        }
        newTotal += Number(selectionText)
        chrome.storage.sync.set({'total': newTotal}, () =>{ 
          if(newTotal >= limit) {
            const notifOptions = {
              type: 'basic',
              iconUrl: './img/icon48.png',
              title: 'Limit reached!',
              message: "Uh oh! Looks like you've reached your limit!"
            }
            chrome.notifications.create('limitNotif', notifOptions)
          }
        })
      })
    }
  }
})

chrome.storage.onChanged.addListener((changes, storageName) => {
  chrome.browserAction.setBadgeText({'text': changes.total.newValue.toString()})
})