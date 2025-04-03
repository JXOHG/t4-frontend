// {/* 
//     ETHAN - Reference Figma
    
//     ETHAN: Admin login page (USE BRANCH admin-login-page)
// */}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AdminLogin() {
    return (
        <>            
            <div className="flex flex-col items-center justify-center bg-transparent text-white min-h-screen">
                <h2 className="text-4xl font-bold pb-4">Western Sales Club Admin Login</h2>
                
                <div className="bg-white text-black p-8 rounded-lg shadow-md w-full max-w-sm mt-6">
                    <h2 className="text-xl font-bold text-center">Welcome Back!</h2>
                    <p className="text-sm text-gray-600 text-center mt-1">Please sign in using your admin login.</p>
                    
                    <form 
                        className="mt-4 space-y-4"
                        onSubmit={(e) => {
                            e.preventDefault();

                            // USER AUTHENTICATION HERE

                            window.location.href = '/events-dashboard';
                        }}
                    >
                        <div>
                            <label className="block text-left font-medium text-black mb-1">Username</label>
                            <input
                                type="email"
                                //required
                                className="mt-1 block w-full rounded-md border border-gray-400 bg-white text-black shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-2"
                                placeholder="Username"
                            />
                        </div>

                        <div>
                            <label className="block text-left font-medium text-black mb-1">Password</label>
                            <input
                                type="password"
                                //required
                                className="mt-1 block w-full rounded-md border border-gray-400 bg-white text-black shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm p-2"
                                placeholder="Password"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium text-black bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                            Log in
                        </button>
                    </form>

                    <div className="text-left text-sm mt-4">
                        <a 
                            href="#reset-password"
                            className="font-medium text-gray-600 hover:text-gray-500 underline"
                        >
                            Reset Password
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
} 

export default AdminLogin;

