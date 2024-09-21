import React from 'react'
import { useState } from 'react';
function SignUp() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[cpassword,setCpassword]=useState('')
   
   
    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: submit login form
        console.log('Name',name)
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Password:', cpassword);


      };

    return (
        <div className="h-screen flex">
            {/* background image */}
            <div className='w-2/3 bg-cover rounded-r-3xl' style={{ backgroundImage: 'url(https://picsum.photos/620/680)' }}>
            </div>
            {/* Background image takes up 65% of the screen */}
            <div className='w-1/3 flex flex-col justify-center items-center p-8 bg-white'>
                <h2 className='text-3xl font-bold mb-6'>SignUp</h2>
                {/* <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor='name'  className='block py-2 px-3 text-gray-700 mb-2 '>
                            Name
                        </label>
                        <input 
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className='w-full text-gray-800 py-2 px-3 shadow appearance-none leading-tight border rounded' 

                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block py-2 px-3 text-gray-700 mb-2 '>
                            Email
                        </label>
                        <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                         className='w-full text-gray-800 py-2 px-3 shadow appearance-none leading-tight border rounded' 
                          />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='password' className='block py-2 px-3 text-gray-700 mb-2'>
                            Password
                        </label>
                        <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className='w-full text-gray-800 py-2 px-3 shadow border rounded appearance-none leading-tight'   
                        />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='cpassword' className='block py-2 px-3 text-gray-700 mb-2'>
                           Confirm Password
                        </label>
                        <input
                        type='cpassword'
                        id='cpassword'
                        value={cpassword}
                        onChange={(e)=>setCpassword(e.target.value)}

                        className='w-full text-gray-800 py-2 px-3 shadow border rounded appearance-none leading-tight'   
                        />
                    </div>
                    <div className='flex items-center pl-10 justify-between mb-6'>
                        <button type='submit' 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold    py-2 px-8 rounded '
                        > SignUp
                        </button>
                    </div>
                </form> */}
                <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
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
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
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
          <div className="mb-6">
            <label htmlFor="cpassword" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Login
              </a>
            </p>
          </div>
        </form>

            </div>

        </div>
    )
}
 

export default SignUp
