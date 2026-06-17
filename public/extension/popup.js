// Check if user is logged in
chrome.storage.sync.get(['authToken', 'trackingEnabled', 'emailStats'], (result) => {
  const loggedOut = document.getElementById('loggedOut')
  const loggedIn = document.getElementById('loggedIn')

  if (result.authToken) {
    loggedIn.style.display = 'block'
    loggedOut.style.display = 'none'

    // Set toggle state
    const toggle = document.getElementById('trackingToggle')
    toggle.checked = result.trackingEnabled !== false

    // Update stats
    if (result.emailStats) {
      document.getElementById('emailCount').textContent = result.emailStats.emailCount || 0
      document.getElementById('openCount').textContent = result.emailStats.openCount || 0
    }
  } else {
    loggedOut.style.display = 'block'
    loggedIn.style.display = 'none'
  }
})

// Handle tracking toggle
document.getElementById('trackingToggle')?.addEventListener('change', (e) => {
  chrome.storage.sync.set({ trackingEnabled: e.target.checked })
  chrome.runtime.sendMessage({
    action: 'toggleTracking',
    enabled: e.target.checked,
  })
})

// Open dashboard
function openDashboard() {
  chrome.tabs.create({ url: 'https://emailtracker.app/dashboard' })
}

// Sign out
function signOut() {
  chrome.storage.sync.remove(['authToken', 'trackingEnabled', 'emailStats'])
  location.reload()
}
