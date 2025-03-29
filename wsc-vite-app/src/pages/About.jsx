import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageTitle from "../components/page-title";

function About() {
  return (
    <>
      <Nav />
      <PageTitle 
        title="About Us" 
        description="Welcome to the Western Sales Club, where we equip students with the social skillset they need to excel as professionals." 
      />
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Mission Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="about1.png" 
              alt="Our Mission" 
              className="w-full md:w-1/2 rounded-lg shadow-lg" 
            />
            <div>
              <h3 className="text-2xl font-semibold text-white">Mission</h3>
              <p className="mt-4 text-gray-300">
                Our mission is to create an inclusive environment that equips members 
                with the tools, network, and confidence to become influential sales 
                professionals. By offering workshops, mentorship, and hands-on 
                experiences, we help our members reach their fullest potential.
              </p>
            </div>
          </div>
        </section>

        <hr className="w-2/3 mx-auto py-8 border-[#ffd95a]"></hr>

        {/* Vision Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-white">Vision</h3>
              <p className="mt-4 text-gray-300">
                We envision a future where our members lead with integrity, innovation, 
                and empathy in sales. Through continuous learning, collaboration, and 
                community engagement, we aim to shape a new generation of sales leaders 
                who can adapt to a rapidly evolving marketplace.
              </p>
            </div>
            <img 
              src="about2.png" 
              alt="Our Vision" 
              className="w-full md:w-1/2 rounded-lg shadow-lg" 
            />
          </div>
        </section>

        <hr className="w-2/3 mx-auto py-8 border-[#ffd95a]"></hr>

        {/* Values Section */}
        <section className="mb-16">
            <div className="w-full md:w-1/2 mx-auto">
                <h3 className="text-2xl font-semibold text-white pb-8">Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="p-4 bg-[#ffd95a] bg-opacity-30 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-300">Collaboration</h3>
                    <p className="mt-2 text-sm text-gray-400">
                    Communities are built with collaboration.
                    </p>
                </div>

                <div className="p-4 bg-[#ffd95a] bg-opacity-30 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-300">Community</h3>
                    <p className="mt-2 text-sm text-gray-400">
                    WSC is dedicated to bringing people together.
                    </p>
                </div>

                <div className="p-4 bg-[#ffd95a] bg-opacity-30 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-300">Innovation</h3>
                    <p className="mt-2 text-sm text-gray-400">
                    We encourage creativity and initiative in our members.
                    </p>
                </div>

                <div className="p-4 bg-[#ffd95a] bg-opacity-30 rounded-lg shadow hover:scale-105 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-gray-300">Inclusivity</h3>
                    <p className="mt-2 text-sm text-gray-400">
                    We're embracing the amazing diversity Western offers.
                    </p>
                </div>
                </div>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
