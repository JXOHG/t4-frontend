import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function AdminLogin() {
    return (
        <> <div className="flex flex-col items-center justify-center h-screen">

            <h1 className="text-4xl font-bold pb-8">Western Sales Club Admin Dashboard Login</h1>

            <button className="w-48 h-12 text-white rounded-lg transition duration-300">
                Login with Google
            </button>

        </div> </>
    );
} 

export default AdminLogin;

