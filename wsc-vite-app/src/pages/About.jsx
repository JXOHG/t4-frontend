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
              <h3 className="text-2xl font-semibold text-[#ffd95a]">Mission</h3>
              <p className="mt-4 text-gray-300">
                Our mission is to create an inclusive environment that equips members 
                with the tools, network, and confidence to become influential sales 
                professionals. By offering workshops, mentorship, and hands-on 
                experiences, we help our members reach their fullest potential.
              </p>
            </div>
          </div>
        </section>
        {/* Vision Section */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#ffd95a]">Vision</h3>
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
        {/* Values Section */}
        <section className="mb-16">
            <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
                src="about3.png" 
                alt="Our Values" 
                className="w-full md:w-1/2 rounded-lg shadow-lg" 
            />
            <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-[#ffd95a] pb-4">Values</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div className="p-4 bg-[#7F42A9] bg-opacity-30 rounded-lg shadow hover:bg-opacity-40 transition-colors">
                    <h4 className="text-xl font-bold text-gray-300">Collaboration</h4>
                    <p className="mt-2 text-sm text-gray-400">
                    We believe in teamwork and sharing success.
                    </p>
                </div>

                <div className="p-4 bg-[#7F42A9] bg-opacity-30 rounded-lg shadow hover:bg-opacity-40 transition-colors">
                    <h4 className="text-xl font-bold text-gray-300">Community</h4>
                    <p className="mt-2 text-sm text-gray-400">
                    We build networks that celebrate diverse perspectives.
                    </p>
                </div>

                <div className="p-4 bg-[#7F42A9] bg-opacity-30 rounded-lg shadow hover:bg-opacity-40 transition-colors">
                    <h4 className="text-xl font-bold text-gray-300">Innovation</h4>
                    <p className="mt-2 text-sm text-gray-400">
                    We embrace creativity and forward thinking.
                    </p>
                </div>

                <div className="p-4 bg-[#7F42A9] bg-opacity-30 rounded-lg shadow hover:bg-opacity-40 transition-colors">
                    <h4 className="text-xl font-bold text-gray-300">Inclusivity</h4>
                    <p className="mt-2 text-sm text-gray-400">
                    We welcome everyone and celebrate diversity.
                    </p>
                </div>
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
