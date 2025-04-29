import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AdminLogin() {
  const handleLogin = () => {
    window.location.href =
      "https://flask-app-250624862173.us-central1.run.app/login";
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold pb-8">
          Western Sales Club Admin Dashboard Login
        </h1>
        <button
          className="w-48 h-12 text-white rounded-lg transition duration-300 bg-blue-500 hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      </div>
    </>
  );
}

export default AdminLogin;
