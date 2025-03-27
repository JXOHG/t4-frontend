import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsor';
import PageTitle from '../components/page-title';

function Sponsors() {
    return (
              <>
                <Nav />

                <PageTitle
                  title="Sponsors"
                  description="Our sponsors empower us to deliver our events and fulfill our mission to 
                  equip students with the social skillset they need to excel as professionals. We are 
                  truly grateful for their support and collaborative efforts."
                />

                <div className="flex flex-col justify-center pb-20">

                  {/* Sponsors */}
                  <Sponsor  image="tsi-logo.png"
                            name="Tech for Social Impact"
                            description="TSI is a student-led organization that provides
                            technology solutions to local non-profit organizations. TSI
                            built this website for us free of charge, denoting their 
                            committment to empowering the community. We continue to collaborate
                            with them, helping our clients with their tech-needs."
                  />
                  
                  <Sponsor  image="og-pressure-washing.png"
                            name="OG Pressure Washing"
                            description="OG Pressure washing is a local business that
                            specializes in residential pressure washing. Run by our very
                            own Co-Founder and Vice President of Events, Owen Gerrard, 
                            OG Pressure Washing exemplifies the leadership and 
                            entrepreneurship WSC fosters."
                  />
                  <Sponsor  image="DRT-logo.png"
                            name="DRTCyber"
                            description="DRTCyber is a cybersecurity consulting firm that
                            provides services to small and medium-sized businesses. They
                            are a valued sponsor of the WSC that contributes in our guest
                            speaker panels to bring valued insight to our students."
                  />

                </div>
                <Footer />
              </>
            );
          }

export default Sponsors;