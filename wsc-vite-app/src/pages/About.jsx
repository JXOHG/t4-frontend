import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Nav />
            <div className = "flex flex-col justify-center w-[850px] mx-auto">
                <h1 className="">About Us</h1>
            <div >
                <hr className="border-t-2 border-gold my-10"></hr>
                <div className="my-20 flex items-center gap-8">
                    <img src="about.png" width={390} height={300} alt="About image" />
                    <h4 className="text-left my-1">
                    Our mission is to promote the sport of weightlifting in the Washington State area.
                    </h4>
                </div>
            </div>
            <div className = "my-10">
                <h3 className="text-left text-[#ffd95a]">Mission</h3>
                <p className="text-left my-1"> Our mission is to promote the sport of weightlifting in the Washington State area.</p>
                <h3 className="text-left text-[#ffd95a] mt-5">Vision</h3>
                <p className="text-left my-1"> Our mission is to promote the sport of weightlifting in the Washington State area.</p>
                <h3 className="text-left text-[#ffd95a] mt-5">Values</h3>
                <p className="text-left my-1"> Our mission is to promote the sport of weightlifting in the Washington State area.</p>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default About;