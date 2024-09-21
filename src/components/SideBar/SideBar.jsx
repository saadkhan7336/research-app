import React from 'react';

function SideBar(){
  return (
    <div className="bg-[#080348] w-64 h-screen fixed top-15 left-0 text-white">
      {/* User Section */}
      <div className="flex items-center p-4 space-x-4">
        <div className="bg-gray-800 rounded-full p-2">
          <img
            src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202209210721" // Replace with Apple logo
            alt="Apple Logo"
            className="w-8 h-8"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium">User</h2>
          <p className="text-sm text-gray-500">User@gmail.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-8">
        {/* Home */}
        <a
          href="#"
          className="flex items-center p-4 hover:bg-blue-600 rounded-l-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="ml-3">Home</span>
        </a>

        {/* Search */}
        <div className="relative">
          <a
            href="#"
            className="flex items-center p-4 hover:bg-blue-700 rounded-l-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="ml-3">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
           {/* Other Navigation Items */}
          <a
          href="#"
          className="flex items-center p-4 hover:bg-blue-600 rounded-l-lg">
          <span className="ml-3">Database</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 hover:bg-blue-600 rounded-l-lg">
          <span className="ml-3">Subscription</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 hover:bg-blue-600 rounded-l-lg">
          <span className="ml-3">Profile Settings</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 hover:bg-blue-600 rounded-l-lg">
          <span className="ml-3">Team</span>
        </a>
        <button
          href="#"
          className="flex items-center p-4 hover:bg-green-600  justify-center rounded-lg">
          <span className="ml-3">Logout</span>
        </button>

        </div>

       
        
      </nav>
    </div>
  );
};

export default SideBar;
