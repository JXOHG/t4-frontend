import React, { useState } from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import emailjs from '@emailjs/browser';

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        organization_type: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim() || !formData.subject.trim()) {
          alert("Please fill in all required fields.");
          return;
        }

        const form = e.target;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        
        // Send the form data using EmailJS - NOTE: Limit is 200 emails per month
        emailjs.sendForm('service_qwpe0fl', 'template_lt8anmn', form, publicKey)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.error('Error sending email:', error.text);
                console.log('Error details:', error);
            });
        
        // Clear form after submission
        setFormData({
            name: "",
            email: "",
            organization_type: "",
            subject: "",
            message: ""
        });

        alert("Form Submitted. We will get back to you soon!");
        console.log("Form submitted:", formData);
    }

    return (
        <>
        <Nav />

        <PageTitle
            title="Contact Us"
            description="We’d love to hear from you! For business inquiries, collaboration opportunities,
            or general questions, please fill out the form below. Share any relevant information
            or resources so we can better understand your needs and work together toward your goals."
        />

        <div className="justify-center mx-auto px-12">
  
          {/* Contact Form */}
          <div className="pb-12">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 max-w-md mx-auto">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <input
                type="text"
                name="organization_type"
                placeholder="Organization Type (optional)"
                value={formData.organization_type}
                onChange={handleChange}
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                className="p-3 bg-white text-black rounded-md outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message*"
                rows="4"
                value={formData.message}
                onChange={handleChange}
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