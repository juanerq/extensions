const throwNotification = (title, message) => {

  const notifOptions = {
    type: 'basic',
    iconUrl: './img/icon48.png',
    title,
    message
  }
  chrome.notifications.create('limitNotif', notifOptions)

}