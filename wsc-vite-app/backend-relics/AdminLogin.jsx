/* wsc-vite-app/src/admin-dash/AdminLogin.jsx */

import React, { useState, useEffect } from "react";
import { BASE_URL } from "../utils/config";

function AdminLogin() {
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for error parameter in URL first
    const params = new URLSearchParams(window.location.search);
    const errorMsg = params.get("error");
    
    if (errorMsg) {
      setError(decodeURIComponent(errorMsg));
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
      return;
    }
    
    // Check if we have a token in localStorage first
    const savedToken = localStorage.getItem("authToken");
    if (savedToken) {
      // Verify the saved token
      verifyToken(savedToken);
    }

    // Check URL for token parameter (from OAuth callback)
    const token = params.get("token");
    if (token) {
      // If there's a token in the URL, verify and store it
      verifyToken(token);

      // Clean up URL by removing the token
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const verifyToken = async (token) => {
    try {
      setIsRedirecting(true);
      const response = await fetch(`${BASE_URL}/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        throw new Error("Failed to verify token");
      }

      const data = await response.json();

      if (data.valid) {
        // Store token in localStorage for persistence
        localStorage.setItem("authToken", token);

        // Redirect to dashboard
        window.location.href = "/events-dashboard";
      } else {
        setError("Session expired. Please log in again.");
        setIsRedirecting(false);
      }
    } catch (err) {
      console.error("Token verification failed:", err);
      setError("Authentication failed. Please try again.");
      setIsRedirecting(false);
    }
  };

  const handleLogin = () => {
    setIsRedirecting(true);
    window.location.href = `${BASE_URL}/login`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold pb-8">
        Western Sales Club Admin Dashboard Login
      </h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {isRedirecting ? (
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-4"></div>
          <p>Authorizing, please wait...</p>
        </div>
      ) : (
        <button
          className="w-48 h-12 text-white rounded-lg transition duration-300 bg-blue-500 hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login with Google
        </button>
      )}
    </div>
  );
}
export default AdminLogin