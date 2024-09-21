import React from 'react'

function Header() {
  return (
    <div>
        <nav className="bg-[#080348]">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">
    <a href="/" className="text-white text-xl font-bold">
      Research 
    </a>
    <ul className="flex space-x-4">
      <li>
        <a href="/" className="text-white hover:text-gray-300">
          Home
        </a>
      </li>
      <li>
        <a href="/" className="text-white hover:text-gray-300">
          Profile
        </a>
      </li>
      <li>
        <a href="/" className="text-white hover:text-gray-300">
          Logout
        </a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header
