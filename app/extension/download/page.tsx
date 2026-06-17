import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function ExtensionDownloadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900">EmailTracker</h1>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Install EmailTracker Extension</CardTitle>
              <CardDescription>
                Get email tracking for Gmail and Outlook in just a few clicks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Installation Steps */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Installation Steps:</h3>
                
                <div className="space-y-3">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        1
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Download the Extension</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Click the button below to download the extension ZIP file.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        2
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Extract the Files</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Extract the ZIP file to a folder on your computer.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        3
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Open Extensions Page</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Chrome/Edge:</strong> Go to chrome://extensions/<br />
                        <strong>Firefox:</strong> Go to about:debugging#/runtime/this-firefox
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        4
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Enable Developer Mode</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Toggle &apos;Developer mode&apos; in the top right corner.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        5
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Load the Extension</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Click &apos;Load unpacked&apos; and select the extracted extension folder.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white">
                        6
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium">Sign In</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Click the extension icon and sign in with your EmailTracker account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-3">Features:</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>✓ Track email opens with timestamp</li>
                  <li>✓ See device type and browser info</li>
                  <li>✓ IP address tracking</li>
                  <li>✓ Works with Gmail and Outlook</li>
                  <li>✓ One-click enable/disable per email</li>
                  <li>✓ Real-time analytics dashboard</li>
                </ul>
              </div>

              {/* Download Button */}
              <div className="pt-4">
                <Button asChild size="lg" className="w-full">
                  <a href="/extension.zip" download>
                    Download Extension ZIP
                  </a>
                </Button>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Version 1.0.0 • Free for all users
                </p>
              </div>

              {/* Support */}
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="font-medium text-gray-900 mb-2">Need Help?</p>
                <p className="text-gray-600">
                  If you encounter any issues, please visit our support page or contact us at support@emailtracker.app
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
