// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'trackEmail') {
    const { subject, recipient, trackingId } = request
    
    // Store tracking data
    chrome.storage.sync.get(['emailStats'], (result) => {
      const stats = result.emailStats || { emailCount: 0, openCount: 0 }
      stats.emailCount = (stats.emailCount || 0) + 1
      chrome.storage.sync.set({ emailStats: stats })
    })

    // Log the tracking
    console.log('Email tracked:', { subject, recipient, trackingId })
    sendResponse({ success: true })
  }

  if (request.action === 'toggleTracking') {
    chrome.storage.sync.set({ trackingEnabled: request.enabled })
    // Notify content scripts of the toggle
    chrome.tabs.query({}, (tabs) => {
      tabs.forEach((tab) => {
        chrome.tabs.sendMessage(tab.id, {
          action: 'trackingToggled',
          enabled: request.enabled,
        }).catch(() => {
          // Tab might not have content script loaded
        })
      })
    })
  }
})

// Handle extension icon click
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: 'https://emailtracker.app/dashboard' })
})
