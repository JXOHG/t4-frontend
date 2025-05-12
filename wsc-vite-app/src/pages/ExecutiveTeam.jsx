import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import PageTitle from '../components/page-title';
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
                <div className="grid justify-center grid-cols-[repeat(auto-fit,_minmax(280px,_max-content))] gap-x-8 gap-y-20 px-4 py-8">
                <Profile
                        image="placeholder-person.png"
                        name="Hudson Bates"
                        title="Co-President"
                    />
                    <Profile
                        image="placeholder-person.png"
                        name="Connor Hinton"
                        title="Co-President"
                    />
                </div>


                {/* Vice Presidents */}
                <h3 className="font-bold text-2xl mt-10 mb-4">Vice Presidents</h3>
                <hr className="border-t border-[#F9C726] w-1/2 mx-auto" />
                <div className="grid justify-center grid-cols-[repeat(auto-fit,_minmax(280px,_max-content))] gap-x-8 gap-y-20 px-4 py-8">
                <Profile
                        image="placeholder-person.png"
                        name="Owen Gerrard"
                        title="VP Events, Co-Founder"
                    />
                    <Profile
                        image="placeholder-person.png"
                        name="Jeevan Sahota"
                        title="VP Finance, Co-Founder"
                    />
                    <Profile
                        image="placeholder-person.png"
                        name="Arda Deniz"
                        title="VP External, Co-Founder"
                    />
                    <Profile
                        image="placeholder-person.png"
                        name="TBD"
                        title="VP Marketing"
                    />
                </div>

                {/* Assistant Vice Presidents */}
                <h3 className="font-bold text-2xl mt-10 mb-4">Assistant Vice Presidents</h3>
                <hr className="border-t border-[#F9C726] w-1/2 mx-auto" />
                <div className="grid justify-center grid-cols-[repeat(auto-fit,_minmax(280px,_max-content))] gap-x-8 gap-y-20 px-4 py-8">
                    <Profile
                        image="placeholder-person.png"
                        name="Nishaan Mangat"
                        title="AVP Finance"
                    />
                    <Profile
                        image="placeholder-person.png"
                        name="Max Stewart"
                        title="AVP Events"
                    />
                    <Profile
                        image="placeholder-person.png"
                        name="TBD"
                        title="AVP External"
                    />
                    <Profile
                        image="placeholder-person.png"
                        name="Joanna Makrostergios"
                        title="AVP Marketing"
                    />
                </div>

            </div>
            <Footer />
        </>
    );
}

export default ExecutiveTeam;
