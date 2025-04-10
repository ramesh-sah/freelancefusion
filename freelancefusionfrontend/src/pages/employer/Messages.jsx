import React from 'react';

const Messages = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Logo or Icon */}
          <div className="bg-indigo-600 rounded-full p-2">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Chat</h1>
        </div>
        <div>
          <button className="text-gray-600 hover:text-gray-800 transition">
            Settings
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Chat Rooms / Contacts */}
        <aside className="w-72 bg-white border-r border-gray-200 p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-6">Contacts</h2>
          <ul className="space-y-4">
            <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-gray-800 font-medium">John Doe</span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-gray-800 font-medium">Jane Smith</span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <span className="text-gray-800 font-medium">Alex Johnson</span>
            </li>
          </ul>
        </aside>

        {/* Main Chat Area */}
        <main className="flex-1 flex flex-col bg-gray-50">
          {/* Chat messages */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6">
            {/* Message from sender */}
            <div className="flex items-start">
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="bg-white rounded-xl shadow p-4 max-w-md">
                <p className="text-gray-800">
                  Hey, how are you doing today?
                </p>
                <span className="block text-xs text-gray-500 mt-2">10:00 AM</span>
              </div>
            </div>
            {/* Message from receiver */}
            <div className="flex items-start justify-end">
              <div className="bg-indigo-600 rounded-xl shadow p-4 max-w-md text-white">
                <p>I'm doing great! Thanks for asking.</p>
                <span className="block text-xs text-indigo-200 mt-2">10:01 AM</span>
              </div>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full ml-3"
              />
            </div>
            {/* Additional messages can be added here */}
          </div>

          {/* Message input */}
          <div className="border-t border-gray-200 px-6 py-4 bg-white">
            <form className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white rounded-full px-6 py-2 hover:bg-indigo-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Messages;
