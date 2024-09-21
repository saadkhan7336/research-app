import React from 'react'


function Home() {
  return (
    <div >
      
      <div className=" w-2/3 right-72 flex-1 pl-80 py-8">
        
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <input type="text" placeholder="Company Name" className="bg-gray-100 px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
          </div>
          <div className="flex items-center">
            <input type="text" placeholder="Company Website" className="bg-gray-100 px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            
          </div>
          <button className="bg-blue-500 px-4 py-2 rounded-md text-white hover:bg-blue-600">Search</button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-white rounded-md shadow-md p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Searches this month</h3>
            <span className="text-2xl font-bold text-gray-900">123 / 500</span>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">Total searches</h3>
            <span className="text-2xl font-bold text-gray-900">800</span>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">Searches this week</h3>
            <span className="text-2xl font-bold text-gray-900">30</span>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            
            <h3 className="text-lg font-bold text-gray-800 mb-2">Total viewed this month</h3>
            <span className="text-2xl font-bold text-gray-900">300</span>
          </div>
        </div>
        <div className="bg-white rounded-md shadow-md p-6 mt-6">
          
          <h3 className="text-lg font-bold text-gray-800 mb-2">Total Companies in database</h3>
          <span className="text-2xl font-bold text-gray-900">600 / 5000</span>
        </div>
      </div>
    </div>
  );
}

export default Home;