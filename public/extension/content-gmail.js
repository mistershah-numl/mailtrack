// Gmail Content Script
let trackingEnabled = true

// Check if tracking is enabled
chrome.storage.sync.get(['trackingEnabled'], (result) => {
  trackingEnabled = result.trackingEnabled !== false
})

// Listen for toggle messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'trackingToggled') {
    trackingEnabled = request.enabled
  }
})

// Intercept send button
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      // Look for compose window
      const composeArea = document.querySelector('[role="dialog"][aria-label*="Compose"]')
      if (composeArea && !composeArea.dataset.trackerInjected) {
        composeArea.dataset.trackerInjected = 'true'
        injectTrackingUI(composeArea)
      }
    }
  })
})

observer.observe(document.body, {
  childList: true,
  subtree: true,
})

function injectTrackingUI(composeArea) {
  // Find send button area
  const sendButton = composeArea.querySelector('[data-tooltip="Send"]') || composeArea.querySelector('button[aria-label*="Send"]')
  
  if (sendButton && sendButton.parentElement) {
    // Create tracking toggle button
    const trackingButton = document.createElement('button')
    trackingButton.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M9 19c-5 1.5-5-2.5-7-4m14 6v-3.87a3.375 3.375 0 0 0-.84-2.26 3.375 3.375 0 0 0-2.76-.88c-.89 0-1.44.45-1.78 1.3m7 6h-6"></path>
      </svg>
      <span style="margin-left: 4px; font-size: 12px;">Track</span>
    `
    trackingButton.style.cssText = `
      display: flex;
      align-items: center;
      padding: 8px 12px;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 13px;
      margin-right: 8px;
      transition: background 0.2s;
    `
    trackingButton.onmouseover = () => (trackingButton.style.background = '#2563eb')
    trackingButton.onmouseout = () => (trackingButton.style.background = '#3b82f6')

    // Add toggle state
    let isTracking = trackingEnabled
    trackingButton.dataset.tracking = 'true'
    trackingButton.onclick = (e) => {
      e.preventDefault()
      isTracking = !isTracking
      trackingButton.style.opacity = isTracking ? '1' : '0.5'
      trackingButton.dataset.tracking = isTracking ? 'true' : 'false'
    }

    // Insert before send button
    sendButton.parentElement.insertBefore(trackingButton, sendButton)

    // Intercept send
    const originalSend = sendButton.onclick
    sendButton.onclick = function (e) {
      if (isTracking && trackingEnabled) {
        const composeBox = composeArea.closest('[role="dialog"]')
        const subject = composeBox?.querySelector('input[name="subjectbox"]')?.value || 'No Subject'
        const recipient = getRecipients(composeArea)

        if (recipient) {
          // Generate tracking ID
          const trackingId = 'track_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)

          // Send tracking request to background script
          chrome.runtime.sendMessage(
            {
              action: 'trackEmail',
              subject,
              recipient,
              trackingId,
            },
            (response) => {
              console.log('Email tracked:', { subject, recipient, trackingId })
            }
          )
        }
      }

      // Call original send
      if (originalSend) return originalSend.call(this, e)
    }
  }
}

function getRecipients(composeArea) {
  // Try to extract recipient email from compose area
  const toField = composeArea.querySelector('[aria-label*="To"]')?.textContent ||
                  composeArea.querySelector('.oy8Mbf')?.textContent ||
                  'unknown@example.com'
  return toField.trim()
}

// Monitor for dynamic compose windows
document.addEventListener('click', (e) => {
  // If clicking on compose
  if (e.target.closest('[data-tooltip="Compose"]') || e.target.closest('a[href="*#inbox/compose"]')) {
    setTimeout(() => {
      const composeArea = document.querySelector('[role="dialog"][aria-label*="Compose"]')
      if (composeArea && !composeArea.dataset.trackerInjected) {
        composeArea.dataset.trackerInjected = 'true'
        injectTrackingUI(composeArea)
      }
    }, 500)
  }
})
