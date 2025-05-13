import React from "react";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsor';

function Sponsors() {
  const [scrollY, setScrollY] = React.useState(0);
  
    React.useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
              <>
                {/** HERO */}
                <div className="relative flex flex-col w-full h-[80vh] items-center">
                    <div className="contents relative z-10">
                        <Nav/>
                    </div>
                    <div
                      className="absolute inset-0 bg-[url(/NEWYORK.jpg)] bg-cover bg-top opacity-50"
                      style={{ backgroundPositionY: `${scrollY * 0.3}px` }}
                  ></div>
                    <div className="relative z-10 flex-grow flex px-12">
                        <div>
                            <h1 className="text-5xl text-white font-bold pt-48 lg:pt-64">Our Sponsors</h1>
                            <p className="text-white text-md md:text-lg mt-4 hidden sm:block"> 
                              Our sponsors empower us to deliver our events and fulfill our mission to 
                              equip students with the social skillset they need to excel as professionals.
                              We are truly grateful for their support and collaborative efforts.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center pb-20 pt-12">

                  {/* Sponsors */}
                  <Sponsor  image="TSI.png"
                            name="Tech for Social Impact"
                            description="TSI is a student-led organization that provides
                            technology solutions to local non-profit organizations. TSI
                            built this website for us free of charge, denoting their 
                            committment to empowering the community. We continue to collaborate
                            with them, helping our clients with their tech-needs."
                            link="https://uwotsi.com"
                  />
                  
                  <Sponsor  image="OGPW.png"
                            name="OG Pressure Washing"
                            description="OG Pressure washing is a local business that
                            specializes in residential pressure washing. Run by our very
                            own Co-Founder and Vice President of Events, Owen Gerrard, 
                            OG Pressure Washing exemplifies the leadership and 
                            entrepreneurship WSC fosters."
                            link="https://ogpressurewashing.ca"
                  />
                  <Sponsor  image="DRT.png"
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