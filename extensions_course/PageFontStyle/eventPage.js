chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if(request.todo == "showPageAction") {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.pageAction.show(tabs[0].id)
    })
  }
})

// chrome.tabs.query({}, (tabs) => {
//   const urls = tabs.map(({url, title, favIconUrl}) => {
//     return { url, title, favIconUrl }
//   })
//   document.getElementById('title').innerHTML = JSON.stringify(urls)
// })
