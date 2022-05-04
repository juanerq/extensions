let menuItem = {
  "id": "wikit",
  "title": "Wikit",
  "contexts": ["selection"]
}
chrome.contextMenus.create(menuItem)

const fixedEncodeURI = (str) => {
  return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']')
}

chrome.contextMenus.onClicked.addListener(({menuItemId, selectionText}) => {
  if(menuItemId == 'wikit' && selectionText) {
    let wikiUrl = 'https://es.wikipedia.org/wiki/' + fixedEncodeURI(selectionText)
    let createData = {
      "url": wikiUrl,
      "type": "popup",
      "top": 5,
      "left": 5,
      "width": screen.availWidth/2,
      "height": screen.availHeight/2
    }
    chrome.windows.create(createData, () => {})
  }
})