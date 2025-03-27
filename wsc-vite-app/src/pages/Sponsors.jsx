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
                            technology solutions to local non-profit organizations. They
                            offereed their services to us free of charge and we are
                            truly grateful for their support. This sponsorship denotes the
                            beginning of a strong and mutually beneficial partnership."
                  />
                  
                  <Sponsor  image="og-pressure-washing.png"
                            name="OG Pressure Washing"
                            description="OG Pressure washing is a local business that
                            specializes in residential pressure washing. Run by our very
                            own Vice President of Events, Owen Gerrard, OG Pressure Washing
                            sets a model example of the leadership and entrepreneurship
                            we strive to foster in our members."
                  />
                  <Sponsor  image="DRT-logo.png"
                            name="DRTCyber"
                            description="DRTCyber is a cybersecurity consulting firm that
                            provides services to small and medium-sized businesses. They
                            are a valued sponsor of the Western Sales Club and help us to
                            provide our members with the resources and opportunities they
                            need address data security concerns in sales."
                  />

                </div>
                <Footer />
              </>
            );
          }

export default Sponsors;