$(() => {
  let color = $('#fontColor').val()
  $('#fontColor').on("change", ({target}) => {
    color = target.value
  })

  $('#btnChange').click(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {todo: "changeColor", clickedColor: color})
    })
  })
})