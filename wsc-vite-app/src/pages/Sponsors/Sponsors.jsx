import React from "react";
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Sponsor from '../../components/Sponsor';
import './Sponsors.css';

function Sponsors() {
    const [scrollY, setScrollY] = React.useState(0);
    
    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <div className="sponsors-hero">
                <div className="contents relative z-10">
                    <Nav/>
                </div>
                <div
                    className="sponsors-hero-background"
                    style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
                ></div>
                <div className="sponsors-hero-content">
                    <div>
                        <h1 className="sponsors-hero-title">Our Sponsors</h1>
                        <p className="sponsors-hero-description">
                            Our sponsors empower us to deliver our events and fulfill our mission to 
                            equip students with the social skillset they need to excel as professionals.
                            We are truly grateful for their support and collaborative efforts.
                        </p>
                    </div>
                </div>
            </div>

            <div className="sponsors-page-container">
                <Sponsor  
                    image="TSI.png"
                    name="Tech for Social Impact"
                    description="TSI is a student-led organization that provides
                    technology solutions to local non-profit organizations. TSI
                    built this website for us free of charge, denoting their 
                    committment to empowering the community. We continue to collaborate
                    with them, helping our clients with their tech-needs."
                    link="https://uwotsi.com"
                />
                
                <Sponsor  
                    image="OGPW.png"
                    name="OG Pressure Washing"
                    description="OG Pressure washing is a local business that
                    specializes in residential pressure washing. Run by our very
                    own Co-Founder and Vice President of Events, Owen Gerrard, 
                    OG Pressure Washing exemplifies the leadership and 
                    entrepreneurship WSC fosters."
                    link="https://ogpressurewashing.ca"
                />
                
                <Sponsor  
                    image="DRT.png"
                    name="DRTCyber"
                    description="DRTCyber is a cybersecurity consulting firm that
                    provides services to small and medium-sized businesses. They
                    are a valued sponsor of the WSC that contributes in our guest
                    speaker panels to bring valued insight to our students."
                    link="https://drtcyber.com"
                />
            </div>
            
            <Footer />
        </>
    );
}

export default Sponsors;