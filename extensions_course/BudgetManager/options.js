$(() => {
  chrome.storage.sync.get('limit', ({limit}) => {
    $('#limit').val(limit)
  })

  $('#saveLimit').click(() => {
    let limit = $('#limit').val()
    if(limit) {
      chrome.storage.sync.set({'limit': limit}, () => {
        close()
      })
    }
  })

  $('#resetTotal').click(() => {

    chrome.storage.sync.set({'total': 0}, () => {
      throwNotification('Total reset!', "Total has been reset to 0!")
    })
  })
})
