import React, { useState } from 'react'
import { ExternalLink } from 'lucide-react'

function App() {
  const [showApplication, setShowApplication] = useState(false)

  const handleLaunchApplication = () => {
    setShowApplication(true)
  }

  const handleBackToHome = () => {
    setShowApplication(false)
  }

  if (showApplication) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-gray-800">E-Transcript Portal</h1>
              <button
                onClick={handleBackToHome}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200"
              >
                Back to Home
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Request Transcript</h3>
                <p className="text-blue-600 mb-4">Submit a new transcript request for your academic records.</p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Start Request
                </button>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Track Status</h3>
                <p className="text-green-600 mb-4">Check the status of your existing transcript requests.</p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                  Track Request
                </button>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Download</h3>
                <p className="text-purple-600 mb-4">Download your completed transcript documents.</p>
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                  View Downloads
                </button>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">Payment</h3>
                <p className="text-orange-600 mb-4">Manage payments for transcript processing fees.</p>
                <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors duration-200">
                  Payment Portal
                </button>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Support</h3>
                <p className="text-red-600 mb-4">Get help with your transcript requests and account.</p>
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-200">
                  Contact Support
                </button>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Profile</h3>
                <p className="text-gray-600 mb-4">Update your personal information and preferences.</p>
                <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-12 rounded-xl shadow-xl max-w-md w-full mx-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">E-Transcript Portal</h1>
          <p className="text-gray-600 mb-8 text-lg">Complete Application</p>
          
          <button
            onClick={handleLaunchApplication}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <ExternalLink size={24} />
            Launch Application
          </button>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Access your academic transcript services
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App