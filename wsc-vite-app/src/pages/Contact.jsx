import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageTitle from '../components/page-title';

function Contact() {
    return (
        <>
        <Nav />

        <PageTitle
            title="Contact Us"
            description="We’d love to hear from you! For business inquiries, collaboration opportunities,
            or general questions, please fill out the form below. Share any relevant information
            or resources so we can better understand your needs and work together toward your goals."
        />

        <div className="justify-center mx-auto">
  
          {/* Contact Form */}
          <div className="pb-12">
            <form className="flex flex-col space-y-6 max-w-md mx-auto">
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
        </div>
        
        <div className="pb-20"></div>

        <Footer />
      </>
    );
  }

export default Contact;