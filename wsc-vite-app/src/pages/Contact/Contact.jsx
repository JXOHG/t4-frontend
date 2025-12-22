import React, { useState } from "react";
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';
import emailjs from '@emailjs/browser';
import './Contact.css';

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
                alert("Form Submitted. We will get back to you soon!");
            }, (error) => {
                console.error('Error sending email:', error.text);
                alert("Failed to send message. Please try again.");
            });
        
        // Clear form after submission
        setFormData({
            name: "",
            email: "",
            organization_type: "",
            subject: "",
            message: ""
        });
    }

    return (
        <>
        <Nav />

        <PageTitle
            title="Contact Us"
            description="We'd love to hear from you! For business inquiries, collaboration opportunities,
            or general questions, please fill out the form below. Share any relevant information
            or resources so we can better understand your needs and work together toward your goals."
        />

        <div className="contact-page-container">
          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-page-form">
              <input
                type="text"
                name="name"
                placeholder="Name*"
                value={formData.name}
                onChange={handleChange}
                className="contact-page-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="contact-page-input"
              />
              <input
                type="text"
                name="organization_type"
                placeholder="Organization Type (optional)"
                value={formData.organization_type}
                onChange={handleChange}
                className="contact-page-input"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject*"
                value={formData.subject}
                onChange={handleChange}
                className="contact-page-input"
              />
              <textarea
                name="message"
                placeholder="Your Message*"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="contact-page-textarea"
              />
              <button
                type="submit"
                className="contact-page-submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        
        <div className="contact-page-spacer"></div>

        <Footer />
      </>
    );
}

export default Contact;