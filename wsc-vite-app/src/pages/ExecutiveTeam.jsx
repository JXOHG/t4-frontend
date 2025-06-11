import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageTitle from '../components/PageTitle';
import Profile from '../components/Profile';

function ExecutiveTeam() {
    return (
        <>
            <Nav />
            <PageTitle 
                title="Executive Team" 
                description="Meet the team behind the Western Sales Club. 
                Our executives are dedicated to providing students with the resources and opportunities they need to succeed in sales."
            />

            <div className="w-full max-w-6xl px-4 mx-auto mb-10">

                {/* Co-Presidents */}
                <h3 className="font-bold text-2xl mt-10 mb-4">Our Presidents</h3>
                <hr className="border-t border-[#F9C726] w-1/2 mx-auto" />
                <div className="grid md:grid-cols-2 max-w-3xl mx-auto justify-center sm:grid-cols-1 gap-y-20 px-4 py-8">
                    <Profile
                        image="/execs/Hudson.png"
                        alt="Hudson Bates"
                        name="Hudson Bates"
                        title="Co-President, Co-Founder"
                    />
                    <Profile
                        image="/execs/Connor.png"
                        alt="Connor Hinton"
                        name="Connor Hinton"
                        title="Co-President, Co-Founder"
                    />
                </div>

                {/* Vice Presidents */}
                <h3 className="font-bold text-2xl mt-10 mb-4">Vice Presidents</h3>
                <hr className="border-t border-[#F9C726] w-1/2 mx-auto" />
                <div className="grid justify-center lg:grid-cols-4 md:grid-cols-2 md:gap-x-2 sm:grid-cols-1 gap-x-8 gap-y-20 px-4 py-8">
                <Profile
                        image="/execs/Owen.png"
                        alt="Owen Gerrard"
                        name="Owen Gerrard"
                        title="VP Events, Co-Founder"
                    />
                    <Profile
                        image="/execs/Jeevan.png"
                        alt="Jeevan Sahota"
                        name="Jeevan Sahota"
                        title="VP Finance, Co-Founder"
                    />
                    <Profile
                        image="/execs/Arda.png"
                        alt="Arda Deniz"
                        name="Arda Deniz"
                        title="VP External, Co-Founder"
                    />
                    <Profile
                        image="/execs/Joanna.png"
                        alt="Joanna Makrostergios"
                        name="Joanna Makrostergios"
                        title="VP Marketing"
                    />
                </div>

                {/* Assistant Vice Presidents */}
                <h3 className="font-bold text-2xl mt-10 mb-4">Assistant Vice Presidents</h3>
                <hr className="border-t border-[#F9C726] w-1/2 mx-auto" />
                <div className="grid justify-center lg:grid-cols-4 md:grid-cols-2 md:gap-x-2 sm:grid-cols-1 gap-x-8 gap-y-20 px-4 py-8">
                    <Profile
                        image="/execs/Max.png"
                        alt="Max Stewart"
                        name="Max Stewart"
                        title="AVP Events"
                    />
                    <Profile
                        image="/execs/Nishaan.png"
                        alt="Nishaan Mangat"
                        name="Nishaan Mangat"
                        title="AVP Finance"
                    />
                    <Profile
                        image="/execs/Maddy.png"
                        alt="Maddy Bates"
                        name="Maddy Bates"
                        title="AVP Communications"
                    />
                    <Profile
                        image="/execs/Liam.png"
                        alt="Liam Hinton"
                        name="Liam Hinton"
                        title="AVP Marketing"
                    />
                </div>

            </div>
            <Footer />
        </>
    );
}

export default ExecutiveTeam;
