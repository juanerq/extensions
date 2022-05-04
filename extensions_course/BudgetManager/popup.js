$(() => {

  chrome.storage.sync.get(['total','limit'], ({total, limit}) => {
    $('#total').text(total)
    $('#limit').text(limit)

  })

  $('#spendAmount').click(() => {
    chrome.storage.sync.get(['total', 'limit'], (bubget) => {
      let newTotal = 0
      if (bubget.total) {
        newTotal += Number(bubget.total)
      }

      let amount = $('#amount').val()
      if(amount) {
        newTotal += Number(amount)
      }

      chrome.storage.sync.set({'total': newTotal}, () => {
        if(amount && newTotal >= bubget.limit) {

          throwNotification('Limit reached!', "Uh oh! Looks like you've reached your limit!")

        }
      })

      $('#total').text(newTotal)
      $('#amount').val('')
    })
  })
})