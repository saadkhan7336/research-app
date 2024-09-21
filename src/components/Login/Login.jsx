import React from 'react';
import { useState } from 'react';

function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: submit login form
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="h-screen flex">
      {/* Background image section */}
      <div className="w-2/3 bg-cover rounded-r-3xl"
        style={{ backgroundImage: 'url(https://picsum.photos/620/680)' }} // Using imported image
      >
        {/* Background image takes up 65% of the screen */}
      </div>
      {/* Login form section */}
      <div className="w-1/3 flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex pl-10 items-center justify-between mb-6">
            <button
              type="submit"
              className="  bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus-shadow-outline"
            >
              Login
            </button>
            <a href="#" className=" pt-20 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot password?
            </a>
          </div>
          <div className="text-center">
            <p className="  text-gray-600">Don't have an account?{' '}
              <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;