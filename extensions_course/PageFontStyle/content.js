chrome.runtime.sendMessage({todo: "showPageAction"})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  
  if(request.todo == 'changeColor') {
    
    let addColor = request.clickedColor
    $('body').css('color', addColor)
  }
})