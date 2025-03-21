import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Nav />
            <div>
                <h1 className="">About Us</h1>
            </div>
            <div className = "flex flex-col justify-center w-[800px] mx-auto">
                <hr className="border-t-2 border-gold my-10"></hr>
                <h3 className="text-left text-[#ffd95a]">Mission</h3>
                <p className="text-left"> Our mission is to promote the sport of weightlifting in the Washington State area.</p>
            </div>
            <Footer />
        </>
    )
}

export default About;