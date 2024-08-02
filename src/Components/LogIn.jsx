import React from "react";
import '../Styles/Navbar.css';
import {GoogleLogin} from "@react-oauth/google";
import {Link} from "react-router-dom";

export const LogIn = () => {

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className=" m-0 sm:m-10 bg-white flex justify-center flex-1">
        <div className="flex-1 text-center hidden lg:flex flex justify-center items-center">
          <img src="/Images/signup.png" alt="Logo" className='w-[500px]'/>
        </div>
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 relative right-[180px] top-[40px]">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-semibold">
              Log In
            </h1>
            <div className="w-full flex-1 mt-4">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email" placeholder="Email" />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password" placeholder="Password" />
                <button
                  className="my-5 tracking-wide font-semibold bg-[#7c8cfc] text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                       strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Log In</span>
                </button>
                <p className='mb-5'>Or</p>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} useOneTap={false} containerProps='height: 56px' text='continue_with' locale='en' width='320px' />
                <p className='mt-6 text-xs text-gray-600 text-center'>{`Don't have an account yet?  `}
                  <Link to="/signup" className='text-[#7c8cfd]'>Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}