import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function Contact() {
    return (
        <>
        <Nav />
        <div className="text-white py-12 px-6 flex flex-col items-center">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
            <div className="w-90 border-t-2 border-yellow-500 mb-4 mx-auto"></div>
            <p className="max-w-2xl mx-auto text-white-400">
              This is where you can get in touch with us. For business inquiries, tell us relevant
              information about who you are, what we can do for you, and provide any meaningful
              resources or references that will help us understand the matter.
            </p>
          </div>
  
          {/* Contact Form */}
          <div className="mt-10 w-full max-w-lg">
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <input
                type="text"
                placeholder="Organization Type (optional)"
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black font-bold py-2 rounded-md hover:bg-yellow-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
  
          {/* Contact Info */}
          <div className="text-center mt-6">
            <p className="text-lg">sales.club@westernusc.ca</p>
            <p className="text-gray-400 text-sm">+1 111-111-1111</p>
  
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

export default Contact;