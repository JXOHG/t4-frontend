import React from "react";
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';
import Profile from '../../components/Profile';
import './ExecutiveTeam.css';

function ExecutiveTeam() {
    return (
        <>
            <Nav />
            <PageTitle 
                title="Executive Team" 
                description="Meet the team behind the Western Sales Club. 
                Our executives are dedicated to providing students with the resources and opportunities they need to succeed in sales."
            />

            <div className="team-page-container">
                {/* Co-Presidents */}
                <h3 className="team-section-title">Our Presidents</h3>
                <hr className="team-section-divider" />
                <div className="team-grid-presidents">
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
                <h3 className="team-section-title">Vice Presidents</h3>
                <hr className="team-section-divider" />
                <div className="team-grid-vps">
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
                <h3 className="team-section-title">Assistant Vice Presidents</h3>
                <hr className="team-section-divider" />
                <div className="team-grid-avps">
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