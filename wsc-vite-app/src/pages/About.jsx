import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function About() {
    return (
        <>
            <Nav />
            <div className = "flex flex-col justify-center w-[850px] mx-auto object-covers">
                <h1 className="">About Us</h1>
            <div >
                <hr className="border-t-2 border-gold my-10"></hr>
                <div className="my-10 flex items-center gap-8">
                    <img src="about.png" className="w-[390px] h-[240px] object-cover rounded-2xl" alt="About image" />
                    <h4 className="text-left my-1 font-serif text-lg">
                        Welcome to the Western Sales Club, where we empower students and 
                        professionals to excel in the dynamic world of sales. Our mission 
                        is to foster a supportive community, provide practical training, 
                        and nurture leadership skills that prepare our members to thrive in 
                        any industry.
</h4>
                </div>
            </div>
            <div className = "mb-20">
                <h3 className="text-left text-[#ffd95a]">Mission</h3>
                <p className="text-left my-1"> 
                    Our mission is to create an inclusive environment that equips 
                    members with the tools, network, and confidence to become 
                    influential sales professionals. By offering workshops, mentorship, 
                    and hands-on experiences, we help our members reach their fullest 
                    potential.
                </p>
                <h3 className="text-left text-[#ffd95a] mt-5">Vision</h3>
                <p className="text-left my-1"> 
                    We envision a future where our members lead with integrity, innovation, 
                    and empathy in sales. Through continuous learning, collaboration, and 
                    community engagement, we aim to shape a new generation of sales leaders 
                    who can adapt to a rapidly evolving marketplace.
                </p>
                <h3 className="text-left text-[#ffd95a] mt-5">Values</h3>
                <p className="text-left my-1"> 
                    Collaboration: We believe in the power of teamwork and shared knowledge. <br />
                    Integrity: We uphold ethical standards and honesty in all our interactions. <br />
                    Innovation: We encourage creative thinking and embrace new ideas and technologies.  <br />
                    Growth: We strive for continuous personal and professional development. <br />
                    Community: We cultivate a supportive network that celebrates diverse backgrounds and perspectives.
                </p>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default About;